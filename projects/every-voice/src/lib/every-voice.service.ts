import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Inject, Injectable, Optional } from "@angular/core";
import { AUTH0_INSTANCE, EVERY_VOICE_CONFIG } from "./every-voice.token";
import {
  EveryVoiceConfig,
  EveryVoiceServiceStatus,
  EveryVoiceServiceMiddlewareInfoResponse,
} from "./every-voice.config";
import {
  BehaviorSubject,
  from,
  Subject,
  Observable,
  throwError,
  of,
} from "rxjs";
import { catchError, finalize, map, switchMap, tap } from "rxjs/operators";
import { AuthService } from "@auth0/auth0-angular";

@Injectable()
export class EveryVoiceService {
  public status$: Subject<EveryVoiceServiceStatus>;
  public ttsEnabledAndAuthenticated$ = new BehaviorSubject<boolean>(false);
  public loading$ = new BehaviorSubject<boolean>(false);
  public speakers$ = new BehaviorSubject<string[]>([]);
  public speakerID: string | undefined;
  public diffusionSteps: number | undefined;
  private enableTTS: boolean;
  private requiresAuth: boolean;
  private apiUrl: string;
  private bearerToken: string | undefined;
  private abortController: any | undefined;
  private audioPlayer: HTMLAudioElement | undefined;
  private middlewareEndpoint: string;

  constructor(
    @Optional() @Inject(EVERY_VOICE_CONFIG) config: EveryVoiceConfig,
    @Optional() @Inject(AUTH0_INSTANCE) private authService: AuthService,
    private http: HttpClient
  ) {
    this.status$ = new Subject<EveryVoiceServiceStatus>();
    this.status$.next("INITIALIZED");
    this.apiUrl = config?.apiUrl;
    this.middlewareEndpoint = config?.middlewareEndpoint;
    this.enableTTS =
      config?.enableTTS !== undefined
        ? config.enableTTS
        : config?.apiUrl?.length > 0; // Only enable TTS by default if apiUrl is defined
    this.bearerToken = config?.developmentBearerToken;
    this.speakerID = config?.speakerID;
    this.diffusionSteps = config?.diffusionSteps;
    this.requiresAuth = config?.requiresAuth;
    // If authentication is not required, then we set the default to true
    this.ttsEnabledAndAuthenticated$.next(this.enableTTS && !this.requiresAuth);
    // If tts enabled and authenticated, then look for fetch and set the tts options
    this.ttsEnabledAndAuthenticated$
      .pipe(
        switchMap((isAuthenticated) => {
          if (isAuthenticated) {
            return this.setTTSOptions().pipe(
              tap((response) => {
                this.speakers$.next(response.speakers || []);

                this.speakerID = this.speakerID || response.defaultSpeaker;

                this.diffusionSteps =
                  this.diffusionSteps || response.defaultDiffusionSteps;
              })
            );
          } else {
            return of(isAuthenticated);
          }
        }),
        catchError((err) => {
          console.error("[ERROR] Failed to set TTS options:", err);
          return throwError(err);
        })
      )
      .subscribe();
    console.log("[DEBUG] initialized EveryVoiceService with config:", config);
    this.status$.next("READY");
  }

  generateSessionHash(length: number = 32): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    const charactersLength = characters.length;
    const array = new Uint8Array(length);
    crypto.getRandomValues(array); // cryptographically secure RNG

    return Array.from(array, (byte) =>
      characters.charAt(byte % charactersLength)
    ).join("");
  }
  handleError(error: any) {
    console.error("Error:", error);
  }

  generateAudioAndReturnURL$(text: string): Observable<string> {
    this.status$.next("GENERATING");

    const sessionHash = this.generateSessionHash();
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const header = new Headers({ "Content-Type": "application/json" });
    if (this.bearerToken) {
      header.append("Authorization", `Bearer ${this.bearerToken}`);
    }

    const body: any = {
      data: [text],
      // eslint-disable-next-line @typescript-eslint/naming-convention
      session_hash: sessionHash,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      fn_index: 0,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      event_data: null,
      trigger: null,
    };
    if (this.speakerID) {
      body.data.push(this.speakerID);
    } else {
      return throwError(
        () => new Error("SpeakerID is required for synthesis.")
      );
    }
    if (this.diffusionSteps) {
      body.data.push(this.diffusionSteps);
    } else {
      return throwError(
        () =>
          new Error("The number of diffusion steps is required for synthesis.")
      );
    }

    console.log("[DEBUG] Body: ", body);
    console.log("[DEBUG] Header: ", header);

    return from(
      fetch(new URL("/gradio_api/queue/join", this.apiUrl).href, {
        method: "POST",
        headers: header,
        signal: this.abortController.signal, // note, signal is not supported by httpclient until Angular 17, so we use fetch.
        body: JSON.stringify(body),
      })
    ).pipe(
      switchMap((response) => {
        if (!response.ok) {
          this.status$.next("ERROR");
          return throwError(
            () => new Error("Error submitting audio generation request")
          );
        }
        return from(response.json());
      }),
      tap((json) => {
        console.log("[DEBUG] Response from join:", json);
      }),
      switchMap((json) => {
        if (!json?.event_id?.length) {
          this.status$.next("ERROR");
          return throwError(() => new Error("Missing event_id in response"));
        }
        return from(
          fetch(
            new URL(
              `/gradio_api/queue/data?session_hash=${sessionHash}`,
              this.apiUrl
            ).href,
            {
              headers: header,
              signal: this.abortController.signal,
            }
          )
        );
      }),
      switchMap((audioResponse) => {
        if (!audioResponse.ok) {
          this.status$.next("ERROR");
          return throwError(
            () => new Error("Error getting audio generated URL")
          );
        }
        return from(audioResponse.text());
      }),
      map((rawText) => rawText.split("\n")),
      map((lines) => {
        for (const line of lines) {
          if (!line.includes("}")) {
            continue;
          }
          const qjson = JSON.parse(line.substring(line.indexOf("{")).trim());
          const url = qjson?.output?.data?.[0]?.url;
          if (url) {
            return url;
          }
        }
        this.status$.next("ERROR");
        throw new Error("Audio URL not found in response");
      }),
      tap((url) => {
        console.log("[DEBUG] Final Audio URL:", url);
      }),
      catchError((err) => {
        this.status$.next("ERROR");
        return throwError(() => err);
      })
    );
  }

  playAudioFromURL$(audioURL: string): Observable<void> {
    this.status$.next("LOADING");
    this.audioPlayer = new Audio(audioURL);
    return new Observable<void>((observer) => {
      this.audioPlayer.onplaying = () => {
        console.log("[DEBUG] Audio is playing");
        this.status$.next("PLAYING");
      };

      this.audioPlayer.onerror = (event) => {
        console.error("Error playing audio:", event);
        this.status$.next("ERROR");
        observer.error(event);
      };

      this.audioPlayer.onabort = () => {
        console.log("[DEBUG] Audio playback aborted");
        this.status$.next("STOPPED");
        this.abortController.abort();
        observer.error(new Error("Audio playback aborted"));
      };

      this.audioPlayer.onended = () => {
        console.log("[DEBUG] Audio playback ended");
        this.status$.next("READY");
        observer.next();
        observer.complete();
      };

      this.audioPlayer.play().catch((error) => {
        console.error("Error playing audio:", error);
        this.status$.next("ERROR");
        observer.error(error);
      });

      // Cleanup on unsubscribe
      return () => {
        this.audioPlayer?.pause();
        this.audioPlayer = undefined;
      };
    });
  }

  playSound$(text: string): Observable<void> {
    if (!this.ttsEnabledAndAuthenticated$.value || !text) {
      return throwError(
        () =>
          new Error(
            "TTS is disabled, you are not authenticated, or the text is empty"
          )
      );
    }

    console.log("[DEBUG] Text-to-Speech is enabled generating audio...");

    // Cancel any existing playback or request
    if (this.abortController) {
      this.abortController.abort();
    }
    if (this.audioPlayer) {
      this.audioPlayer.pause();
      this.audioPlayer = undefined;
    }

    // Create a new AbortController
    this.abortController = new AbortController();

    if (!this.apiUrl && !this.middlewareEndpoint) {
      // Default Browser TTS
      return this.playSoundWithDefaultTTS$(text).pipe(
        catchError((error) => {
          this.status$.next("ERROR");
          return throwError(() => error);
        })
      );
    } else if (this.apiUrl && !this.middlewareEndpoint) {
      // Call HF directly
      return this.generateAudioAndReturnURL$(text).pipe(
        switchMap((audioURL) => {
          if (!audioURL) {
            return throwError(
              () => new Error("Audio URL not found in response")
            );
          }
          return this.playAudioFromURL$(audioURL);
        }),
        catchError((error) => {
          this.status$.next("ERROR");
          return throwError(() => error);
        })
      );
    } else if (this.middlewareEndpoint) {
      // Call TTS Middleware

      console.log("calling middleware");
      // @ts-ignore
      return this.playSoundWithTTSMiddleware$(text).pipe(
        map((test) => {
          console.log(test);
          return test;
        }),
        catchError((error) => {
          this.status$.next("ERROR");
          return throwError(() => error);
        })
      );
    }
  }

  playSoundWithDefaultTTS$(text: string): Observable<void> {
    if (!this.ttsEnabledAndAuthenticated$.value) {
      return throwError(() => new Error("Text-to-Speech is disabled"));
    }

    return new Observable<void>((observer) => {
      console.log(`Calling ${this.apiUrl} with text:`, text);

      const utterance = new SpeechSynthesisUtterance(text);

      utterance.onend = () => {
        observer.next();
        observer.complete();
      };

      utterance.onerror = (event) => {
        observer.error(event.error);
      };

      window.speechSynthesis.speak(utterance);

      // Cleanup logic if the observable is unsubscribed
      return () => {
        window.speechSynthesis.cancel();
      };
    });
  }

  sendTextToTTSMiddleware$(text: string, token: string): Observable<void> {
    this.loading$.next(true);
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: `Bearer ${token}`,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "Content-Type": "application/json",
    });
    const sessionHash = this.generateSessionHash();
    const body: any = {
      data: [text],
      // eslint-disable-next-line @typescript-eslint/naming-convention
      session_hash: sessionHash,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      fn_index: 0,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      event_data: null,
      trigger: null,
    };
    if (this.speakerID) {
      body.data.push(this.speakerID);
    } else {
      return throwError(
        () => new Error("SpeakerID is required for synthesis.")
      );
    }
    if (this.diffusionSteps) {
      body.data.push(this.diffusionSteps);
    } else {
      return throwError(
        () =>
          new Error("The number of diffusion steps is required for synthesis.")
      );
    }
    return this.http
      .post(this.middlewareEndpoint, body, {
        headers,
        responseType: "blob",
        observe: "response",
      })
      .pipe(
        switchMap((response) => {
          console.log(response);
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const blob = new Blob([response.body!], {
            type: response.headers["content_type"] || "audio/mpeg",
          });
          const url = URL.createObjectURL(blob);
          console.log(blob);
          console.log(url);
          return this.playAudioFromURL$(url);
        }),
        catchError((error) => {
          this.status$.next("ERROR");
          return throwError(() => error);
        }),
        finalize(() => {
          this.loading$.next(false);
        })
      );
  }

  playSoundWithTTSMiddleware$(text): Observable<void> {
    this.loading$.next(true);
    console.log("calling playSoundWithTTSMiddleware");
    return this.authService.getAccessTokenSilently().pipe(
      switchMap((token) => this.sendTextToTTSMiddleware$(text, token)) // pass token to the next step
    );
  }

  setTTSOptions(): Observable<EveryVoiceServiceMiddlewareInfoResponse> {
    if (this.middlewareEndpoint) {
      console.log("[DEBUG] getting middleware tts info");
      return this.authService?.getAccessTokenSilently().pipe(
        switchMap((token) => {
          //console.log("[DEBUG]  middleware tts info token ", token);
          const headers = new HttpHeaders({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Authorization: `Bearer ${token}`,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "Content-Type": "application/json",
          });
          return this.http
            .get<EveryVoiceServiceMiddlewareInfoResponse>(
              `${this.middlewareEndpoint}/info`,
              {
                headers,
                responseType: "json",
                observe: "response",
              }
            )
            .pipe(
              map((response) => {
                console.log(
                  "[DEBUG] middleware TTS API info set",
                  response.body
                );
                return response.body;
              }),
              catchError((error) => {
                console.log("[ERROR] middleware tts info", error);
                this.status$.next("ERROR");
                return throwError(() => error);
              })
            );
        }) // pass token to the next step
      );
    } else if (this.apiUrl) {
      console.log("[DEBUG] getting API tts info");
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const header = new Headers({ "Content-Type": "application/json" });
      if (this.bearerToken) {
        header.append("Authorization", `Bearer ${this.bearerToken}`);
      }
      const url = new URL("/gradio_api/info", this.apiUrl).href;
      return from(
        fetch(url, {
          method: "GET",
          headers: header,
        })
      ).pipe(
        switchMap(async (response) => {
          if (!response.ok) {
            this.status$.next("ERROR");
            console.log("[ERROR] fetching API tts info", response.body);
            throw new Error("Failed to fetch API tts info");
          }

          const infoResponse = await response.json();
          const options: EveryVoiceServiceMiddlewareInfoResponse = {
            speakers: [],
            defaultDiffusionSteps: this.diffusionSteps,
            defaultSpeaker: this.speakerID,
          };
          if (infoResponse["named_endpoints"]) {
            const namedEndpoints = infoResponse["named_endpoints"];
            if (namedEndpoints["/synthesize"]) {
              const synthesizeEndPoint = namedEndpoints["/synthesize"];
              if (synthesizeEndPoint["parameters"]) {
                for (const parameter of synthesizeEndPoint["parameters"]) {
                  switch (parameter["parameter_name"]) {
                    case "voice":
                      options.speakers = parameter["type"]["enum"];
                      options.defaultSpeaker =
                        this.speakerID || parameter["parameter_default"];
                      break;
                    case "lngsteps":
                      options.defaultDiffusionSteps =
                        this.diffusionSteps || parameter["parameter_default"];
                      break;
                  }
                }

                console.log("[DEBUG] api tts info", options);
                return options;
              }
            }
          }
          throw new Error("API tts info not found in response");
        }),
        map((options) => options as EveryVoiceServiceMiddlewareInfoResponse),
        catchError((error) => {
          this.status$.next("ERROR");
          console.log("[ERROR] getting API tts info", error);
          return throwError(() => error);
        })
      );
    }
  }

  stop() {
    this.status$.next("STOPPED");
    this.abortController?.abort();
    this.audioPlayer?.pause();
    this.audioPlayer = undefined;
    this.status$.next("READY");
  }
  pause() {
    this.audioPlayer?.pause();
    this.status$.next("PAUSED");
  }
  resume() {
    this.audioPlayer?.play();
    this.status$.next("PLAYING");
  }
}
