import { Component, OnInit, Input } from "@angular/core";
import { EveryVoiceService } from "../every-voice.service";

@Component({
  selector: "lib-every-voice",
  templateUrl: "./every-voice.component.html",
  styleUrls: ["./every-voice.component.css"],
})
export class EveryVoiceComponent implements OnInit {
  @Input() textToGenerate: string;
  @Input() icon = "volume_up";

  constructor(private tts: EveryVoiceService) {}

  ngOnInit(): void {}

  onClick() {
    if (this.textToGenerate) {
      this.tts.playSound(this.textToGenerate);
    } else {
      console.log("whoops");
      console.log(this.textToGenerate);
    }
  }
}
