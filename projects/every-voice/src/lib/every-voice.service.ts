import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Inject, Injectable, Optional } from "@angular/core";
import { AUTH0_INSTANCE, EVERY_VOICE_CONFIG } from "./every-voice.token";
import {
  EveryVoiceConfig,
  EveryVoiceServiceStatus,
} from "./every-voice.config";
import { BehaviorSubject, from, Subject, Observable, throwError } from "rxjs";
import { catchError, finalize, map, switchMap, tap } from "rxjs/operators";
import { AuthService } from "@auth0/auth0-angular";

@Injectable()
export class EveryVoiceService {
  public status$: Subject<EveryVoiceServiceStatus>;
  public ttsEnabledAndAuthenticated$ = new BehaviorSubject<boolean>(false);
  public loading$ = new BehaviorSubject<boolean>(false);
  private enableTTS: boolean;
  private requiresAuth: boolean;
  private apiUrl: string;
  private bearerToken: string | undefined;
  private speakerID: string | undefined;
  private steps: number | undefined;
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
    this.apiUrl = config?.apiUrl ?? "https://default.api/tts";
    this.middlewareEndpoint = config?.middlewareEndpoint;
    this.enableTTS =
      config?.enableTTS !== undefined
        ? config.enableTTS
        : config?.apiUrl?.length > 0; // Only enable TTS by default if apiUrl is defined
    this.bearerToken = config?.developmentBearerToken;
    this.speakerID = config?.speakerID;
    this.steps = config?.steps;
    this.requiresAuth = config?.requiresAuth;
    // If authentication is not required, then we set the default to true
    this.ttsEnabledAndAuthenticated$.next(this.enableTTS && !this.requiresAuth);
    console.log("[DEBUG] initialized EveryVoiceService with config:", config);
    this.status$.next("READY");
  }
  generateSessionHash(): string {
    let sessionHash = "";
    const sessionHashLength = Math.floor(Math.random() * 32);
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    for (let index = 0; index < sessionHashLength; index++) {
      sessionHash += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return sessionHash;
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
    }
    if (this.steps) {
      body.data.push(this.steps);
    }

    console.log("[DEBUG] Body: ", body);
    console.log("[DEBUG] Header: ", header);

    return from(
      fetch(this.apiUrl + "join", {
        method: "POST",
        headers: header,
        signal: this.abortController.signal,
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
          fetch(`${this.apiUrl}data?session_hash=${sessionHash}`, {
            headers: header,
            signal: this.abortController.signal,
          })
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

    return this.generateAudioAndReturnURL$(text).pipe(
      switchMap((audioURL) => {
        if (!audioURL) {
          return throwError(() => new Error("Audio URL not found in response"));
        }
        return this.playAudioFromURL$(audioURL);
      }),
      catchError((error) => {
        this.status$.next("ERROR");
        return throwError(() => error);
      })
    );
  }

  playSoundWithDefaultTTS(text: string): Observable<void> {
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

  sendTextToTTSMiddleware(text: string, token: string): Observable<object> {
    this.loading$.next(true);
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: `Bearer ${token}`,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "Content-Type": "application/json",
    });

    return this.http.post(this.middlewareEndpoint, { text }, { headers }).pipe(
      catchError((error) => {
        this.status$.next("ERROR");
        return throwError(() => error);
      }),
      finalize(() => {
        this.loading$.next(false);
      })
    );
  }

  playSoundWithTTSMiddleware(text): Observable<object> {
    this.loading$.next(true);
    return this.authService.getAccessTokenSilently().pipe(
      switchMap((token) => this.sendTextToTTSMiddleware(text, token)) // pass token to the next step
    );
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
