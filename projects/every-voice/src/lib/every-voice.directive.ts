import { Directive, HostListener, Input } from "@angular/core";
import { EveryVoiceService } from "./every-voice.service";

@Directive({
  selector: "[libEveryVoice]",
})
export class EveryVoiceDirective {
  @Input("libEveryVoice") text!: string;

  constructor(private tts: EveryVoiceService) {}

  @HostListener("click")
  onClick() {
    if (this.text) {
      this.tts.playSound(this.text);
    }
  }
}
