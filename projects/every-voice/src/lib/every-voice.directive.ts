import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  OnInit,
  AfterViewInit,
} from "@angular/core";
import { EveryVoiceService } from "./every-voice.service";

@Directive({
  selector: "[libEveryVoice]",
})
export class EveryVoiceDirective implements AfterViewInit {
  @Input("libEveryVoice") text!: string;

  constructor(
    private tts: EveryVoiceService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener("click")
  onClick() {
    if (this.tts.enableTTS && this.text) {
      this.tts.playSound(this.text);
    }
  }

  ngAfterViewInit() {
    if (this.tts.enableTTS) {
      this.renderer.setStyle(this.el.nativeElement, "cursor", "pointer");
    }
    const innerText = this.el.nativeElement.textContent;
    console.log("Element innerText:", innerText);
    this.text = innerText;
  }
}
