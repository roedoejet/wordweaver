import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AffixService, SettingsService } from "../../../../../services";
import { AffOption, Conjugation, Settings } from "../../../../../models";
import { Observable } from "rxjs";
import { MetaData } from "../../../../../global";

@Component({
  selector: "wordmaker-conj-panel",
  templateUrl: "./wordmaker-conj-panel.component.html",
  styleUrls: ["./wordmaker-conj-panel.component.scss"]
})
export class WordmakerConjPanel implements OnInit {
  @Input()
  word$: Observable<Conjugation[]>;
  @Input() wordmaker;
  @Output() goBackTrigger = new EventEmitter();
  settings: Settings;
  message = MetaData.congratulations;
  constructor(
    private affixService: AffixService,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {
    this.settingsService.settings.subscribe((settings: Settings) => {
      this.settings = settings;
    });
  }

  goBack(start?) {
    this.goBackTrigger.emit(start);
  }
}
