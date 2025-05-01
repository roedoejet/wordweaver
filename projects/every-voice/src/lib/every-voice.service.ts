import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class EveryVoiceService {
  playSound(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }

  stop() {
    window.speechSynthesis.cancel();
  }
}
