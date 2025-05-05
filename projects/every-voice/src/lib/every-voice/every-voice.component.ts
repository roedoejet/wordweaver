import { ChangeDetectorRef, Component, OnInit, Input } from "@angular/core";
import { EveryVoiceService } from "../every-voice.service";

@Component({
  selector: "lib-every-voice",
  templateUrl: "./every-voice.component.html",
  styleUrls: ["./every-voice.component.css"],
})
export class EveryVoiceComponent implements OnInit {
  @Input() textToGenerate: string;
  @Input() icon = "volume_up";
  @Input() stopIcon = "stop";
  isPlaying = false;
  constructor(public tts: EveryVoiceService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  onClick() {
    if (this.textToGenerate) {
      if (this.isPlaying) {
        this.tts.stop();
        this.isPlaying = false;
      } else {
        this.isPlaying = true;
        this.tts
          .playSound(this.textToGenerate)
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            this.isPlaying = false;
            this.cdr.detectChanges();
          });
      }
    }
  }
}
