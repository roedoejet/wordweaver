import { Inject, Injectable, Optional } from "@angular/core";
import { EVERY_VOICE_CONFIG } from "./every-voice.token";
import { EveryVoiceConfig } from "./every-voice.config";

@Injectable()
export class EveryVoiceService {
  public enableTTS: boolean;
  private apiUrl: string;

  constructor(
    @Optional() @Inject(EVERY_VOICE_CONFIG) config: EveryVoiceConfig
  ) {
    this.apiUrl = config?.apiUrl ?? "https://default.api/tts";
    this.enableTTS =
      config?.enableTTS !== undefined
        ? config.enableTTS
        : config?.apiUrl?.length > 0; // Only enable TTS by default if apiUrl is defined
  }
  playSound(text: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.enableTTS) {
        console.log(`Calling ${this.apiUrl} with text:`, text);
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onend = () => resolve();
        utterance.onerror = (event) => reject(event.error);
        window.speechSynthesis.speak(utterance);
      } else {
        reject("Text-to-Speech is disabled");
      }
    });
  }

  stop() {
    window.speechSynthesis.cancel();
  }
}
