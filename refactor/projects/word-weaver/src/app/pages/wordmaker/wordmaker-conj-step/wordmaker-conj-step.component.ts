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
  word$: Observable<any>;
  settings$: Observable<SettingsState>;
  constructor(
    private store: Store<State>,
    private selectionService: WordmakerSelectionService,
    private conjugationService: ConjugationService
  ) {}

  ngOnInit(): void {
    this.settings$ = this.store.pipe(select(selectSettings));
    this.word$ = this.selectionService.selection$.pipe(
      switchMap(selection => {
        if (
          selection.root &&
          ((selection.root.thematic_relation === "purple" &&
            selection.agent &&
            selection.patient) ||
            (selection.root.thematic_relation === "red" && selection.agent) ||
            (selection.root.thematic_relation === "blue" && selection.patient))
        ) {
          const args = Object.entries(selection).reduce(
            (a, [k, v]) => (v == null ? a : { ...a, [k]: [v.tag] }),
            {}
          );
          return this.conjugationService
            .conjugate(args)
            .pipe(
              map(conjugations =>
                this.conjugationService.createTiers(conjugations)
              )
            );
        } else {
          return EMPTY;
        }
      })
    );
  }
}
