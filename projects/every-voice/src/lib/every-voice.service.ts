import { Inject, Injectable, Optional } from "@angular/core";
import { EVERY_VOICE_CONFIG } from "./every-voice.token";
import { EveryVoiceConfig } from "./every-voice.config";

@Injectable()
export class EveryVoiceService {
  private apiUrl: string;

  constructor(
    @Optional() @Inject(EVERY_VOICE_CONFIG) config: EveryVoiceConfig
  ) {
    this.apiUrl = config?.apiUrl ?? "https://default.api/tts";
  }
  playSound(text: string) {
    console.log(`Calling ${this.apiUrl} with text:`, text);
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }

  stop() {
    window.speechSynthesis.cancel();
  }
}
