import {
  ChangeDetectorRef,
  Component,
  OnInit,
  Input,
  OnDestroy,
} from "@angular/core";
import { EveryVoiceService } from "../every-voice.service";
import { BehaviorSubject, Subject, Subscription } from "rxjs";

@Component({
  selector: "lib-every-voice",
  templateUrl: "./every-voice.component.html",
  styleUrls: ["./every-voice.component.css"],
})
export class EveryVoiceComponent implements OnInit, OnDestroy {
  @Input() textToGenerate: string;
  @Input() icon = "volume_up";
  @Input() stopIcon = "stop";
  isPlaying: boolean;
  isLoading: boolean;
  hasError: boolean;

  private subscription: Subscription;

  constructor(public tts: EveryVoiceService, private cdr: ChangeDetectorRef) {
    this.isLoading = false;
    this.subscription = new Subscription();
    this.subscription.add(
      this.tts.status$.subscribe((status) => {
        console.log("[DEBUG] tts status received", status);

        if (status === "GENERATING" || status === "LOADING") {
          this.isLoading = true;
          this.isPlaying = false;
          this.hasError = false;
        } else if (status === "READY" || status === "PAUSED") {
          this.isLoading = false;
          this.isPlaying = false;
          this.hasError = false;
        } else if (status === "PLAYING") {
          this.isLoading = false;
          this.isPlaying = true;
          this.hasError = false;
        } else if (status === "ERROR") {
          this.hasError = true;
          this.isLoading = false;
          this.isPlaying = false;
        } else {
          this.isLoading = false;
        }
        this.cdr.detectChanges();
      })
    );
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onClick() {
    if (this.textToGenerate) {
      this.hasError = false;
      if (this.isPlaying) {
        this.tts.stop();
        this.isPlaying = false;
        this.isLoading = false;
        this.cdr.detectChanges();
      } else {
        this.isPlaying = true;
        this.isLoading = true;
        this.cdr.detectChanges();
        this.tts.playSound(this.textToGenerate).catch((error) => {
          console.error(error);
        });
      }
    } else {
      this.hasError = true;
    }
  }
}
