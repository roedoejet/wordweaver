import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { switchMap, map } from "rxjs/operators";
import { WordmakerState } from "../../../core/wordmaker-selection/wordmaker-selection.model";
import { selectWordmaker } from "../../../core/wordmaker-selection/wordmaker-selection.selectors";
import { SettingsState, State } from "../../../core/settings/settings.model";
import { Store, select } from "@ngrx/store";
import { selectSettings } from "../../../core/settings/settings.selectors";
import { Conjugation } from "../../../models/models";
import { TierService } from "../../../core/core.module";

@Component({
  selector: "ww-wordmaker-conj-step",
  templateUrl: "./wordmaker-conj-step.component.html",
  styleUrls: ["./wordmaker-conj-step.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordmakerConjStepComponent implements OnInit {
  settings$: Observable<SettingsState>;
  selection$: Observable<WordmakerState>;
  conjugation$: Observable<any>;
  constructor(private store: Store<State>, private tierService: TierService) {}

  ngOnInit(): void {
    this.settings$ = this.store.pipe(select(selectSettings));
    this.selection$ = this.store.pipe(select(selectWordmaker));
    this.conjugation$ = this.selection$.pipe(
      switchMap(selection => this.tierService.conjugate$(selection)),
      map(conjugation => this.tierService.createTiers(conjugation)[0])
    );
  }
}
