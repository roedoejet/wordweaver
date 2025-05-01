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
    this.enableTTS = config?.enableTTS ?? true;
  }
  playSound(text: string) {
    if (this.enableTTS) {
      console.log(`Calling ${this.apiUrl} with text:`, text);
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  }

  stop() {
    window.speechSynthesis.cancel();
  }
}
