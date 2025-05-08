import { Inject, Injectable, Optional } from "@angular/core";
import { EVERY_VOICE_CONFIG } from "./every-voice.token";
import {
  EveryVoiceConfig,
  EveryVoiceServiceStatus,
} from "./every-voice.config";
//import { Client } from "@gradio/client";
import { Subject } from "rxjs";
@Injectable()
export class EveryVoiceService {
  public status$: Subject<EveryVoiceServiceStatus>;
  public enableTTS: boolean;
  private apiUrl: string;
  private bearerToken: string | undefined;
  private speakerID: string | undefined;
  private steps: number | undefined;
  private abortController: any | undefined;
  private audioPlayer: HTMLAudioElement | undefined;
  constructor(
    @Optional() @Inject(EVERY_VOICE_CONFIG) config: EveryVoiceConfig
  ) {
    this.status$ = new Subject<EveryVoiceServiceStatus>();
    this.status$.next("INITIALIZED");
    this.apiUrl = config?.apiUrl ?? "https://default.api/tts";
    this.enableTTS =
      config?.enableTTS !== undefined
        ? config.enableTTS
        : config?.apiUrl?.length > 0; // Only enable TTS by default if apiUrl is defined
    this.bearerToken = config?.bearerToken;
    this.speakerID = config?.speakerID;
    this.steps = config?.steps;
    console.log("[DEBUG] initialized EveryVoiceService with config:", config);
    this.status$.next("READY");
    //this.client = new Client(this.apiUrl); //TODO: check which version of Gradio Client can be compiled by this version of Angular
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
  async generateAudio(resolve, reject, text): Promise<string | undefined> {
    this.status$.next("GENERATING");
    const sessionHash = this.generateSessionHash();
    //setup request
    const header = new Headers({
      "Content-Type": "application/json",
      mode: "no-cors",
    });
    if (this.bearerToken) {
      header.append("Authorization", `Bearer ${this.bearerToken}`);
    }
    const body = {
      data: [],
      session_hash: sessionHash,
      fn_index: 0,
      event_data: null,
      trigger: null,
    };
    body.data.push(text);
    if (this.speakerID) {
      body.data.push(this.speakerID);
    } else {
      this.status$.next("ERROR");
      reject("Speaker ID is required");

      return;
    }
    if (this.steps) {
      body.data.push(this.steps);
    } else {
      this.status$.next("ERROR");
      reject("Steps is required");
      return;
    }
    console.log("[DEBUG] Body: ", body);
    console.log("[DEBUG] Header: ", header);
    // Send the request to the API
    const response = await fetch(this.apiUrl + "join", {
      method: "POST",
      headers: header,
      signal: this.abortController.signal,
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      this.status$.next("ERROR");
      reject("Error submitting audio generation request");
      return;
    }
    const json = await response.json();
    console.log("[DEBUG] Body: ", body, "Response:", json);
    if (json && json.event_id && json.event_id.length > 0) {
      console.log(
        "[DEBUG] Audio generation successful with event ID:",
        json.event_id
      );
      //get audio blob
      const audioResponse = await fetch(
        this.apiUrl + `data?session_hash=${sessionHash}`,
        {
          headers: header,
          signal: this.abortController.signal,
        }
      );
      if (!response.ok) {
        this.status$.next("ERROR");
        reject("Error getting audio generated url");
        return;
      }
      const queue = (await audioResponse.text()).split("\n");
      console.log("[DEBUG] queue", queue);
      //look for url in queue
      for (const line of queue) {
        if (!line.includes("}")) {
          continue;
        }

        const qjson = JSON.parse(line.substring(line.indexOf("{")).trim());
        if (qjson.output) {
          if (
            qjson.output.data &&
            qjson.output.data[0] &&
            qjson.output.data[0].url
          ) {
            resolve(qjson.output.data[0].url);
            return qjson.output.data[0].url;
          } else {
            this.status$.next("ERROR");
            reject("Audio URL not found in response");
            return;
          }
        }
      }
    }
  }
  playSound(text: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      if (this.enableTTS && text) {
        console.log("[DEBUG] Text-to-Speech is enabled generating audio...");

        if (this.abortController) {
          this.abortController.abort();
        }
        if (this.audioPlayer) {
          this.audioPlayer.pause();
          this.audioPlayer = undefined;
        }
        // Create a new AbortController for this request
        this.abortController = new AbortController();

        const audioURL = await this.generateAudio(resolve, reject, text);
        console.log("[DEBUG] Audio URL:", audioURL);
        if (audioURL) {
          this.status$.next("LOADING");
          //play audio
          this.audioPlayer = new Audio(audioURL);
          this.audioPlayer.onplaying = () => {
            console.log("[DEBUG] Audio is playing");
            this.status$.next("PLAYING");
          };
          this.audioPlayer.onerror = (event) => {
            console.error("Error playing audio:", event);
            this.status$.next("ERROR");
            reject(event);
          };
          this.audioPlayer.onabort = () => {
            console.log("[DEBUG] Audio playback aborted");
            this.status$.next("STOPPED");
            this.abortController.abort();
            reject("Audio playback aborted");
          };
          this.audioPlayer
            .play()
            .then(() => {
              console.log("[DEBUG] Audio is playing");
              this.audioPlayer.onended = () => {
                this.status$.next("READY");
                resolve();
              };
            })
            .catch((error) => {
              console.error("Error playing audio:", error);
              this.status$.next("ERROR");
              reject(error);
            });
          return;
        } else {
          reject("Audio URL not found in response");
          return;
        }
      } else {
        reject("Text-to-Speech is disabled");
      }
    });
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
