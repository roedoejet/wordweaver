import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { Conjugation } from "../../../models/models";
import { Observable, EMPTY } from "rxjs";
import { switchMap, map } from "rxjs/operators";
import { WordmakerState } from "../../../core/wordmaker-selection/wordmaker-selection.model";
import { selectWordmaker } from "../../../core/wordmaker-selection/wordmaker-selection.selectors";
import { SettingsState, State } from "../../../core/settings/settings.model";
import { Store, select } from "@ngrx/store";
import { selectSettings } from "../../../core/settings/settings.selectors";

import {
  ConjugationService,
  WordmakerSelectionService
} from "../../../core/core.module";

@Component({
  selector: "ww-wordmaker-conj-step",
  templateUrl: "./wordmaker-conj-step.component.html",
  styleUrls: ["./wordmaker-conj-step.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordmakerConjStepComponent implements OnInit {
  settings$: Observable<SettingsState>;
  selection$: Observable<WordmakerState>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.settings$ = this.store.pipe(select(selectSettings));
    this.selection$ = this.store.pipe(select(selectWordmaker));
  }
}
