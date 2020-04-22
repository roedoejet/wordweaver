import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy
} from "@angular/core";
import {
  AffOption,
  Pronoun,
  Verb,
  ResponseObject,
  Conjugation
} from "../../../models/models";
import {
  AffixService,
  ConjugationService,
  WordmakerSelectionService
} from "../../../core/core.module";
import { Observable, empty, EMPTY, of } from "rxjs";
import {
  distinctUntilChanged,
  map,
  switchMap,
  catchError
} from "rxjs/operators";
import { Store, select } from "@ngrx/store";
import { actionChangeAffOption } from "../../../core/wordmaker-selection/wordmaker-selection.actions";
import {
  WordmakerState,
  State
} from "../../../core/wordmaker-selection/wordmaker-selection.model";
import { selectWordmaker } from "../../../core/wordmaker-selection/wordmaker-selection.selectors";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { SettingsState } from "../../../core/settings/settings.model";
import { selectSettings } from "../../../core/settings/settings.selectors";
import { selectSettingsState } from "../../../core/core.state";

@Component({
  selector: "ww-wordmaker-temp-step",
  templateUrl: "./wordmaker-temp-step.component.html",
  styleUrls: ["./wordmaker-temp-step.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordmakerTempStepComponent implements OnInit {
  selection$: Observable<WordmakerState>;
  @Output() selectedTemp = new EventEmitter<AffOption>();
  constructor(
    private affixService: AffixService,
    private store: Store<State>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.selection$ = this.store.pipe(select(selectWordmaker));
  }

  onAffOptSelect(ao) {
    this.store.dispatch(actionChangeAffOption({ option: ao }));
    this.selectedTemp.emit(ao);
  }

  onChipClick(tag) {
    this.returnAffoptFromTag$(tag).subscribe(t => {
      this.onAffOptSelect(t);
    });
  }

  returnAffoptFromTag$(tag) {
    return this.affixService.affoptions$.pipe(
      map(affopts => {
        const picked_ao = affopts.filter(ao => ao["tag"] === tag)[0];
        return picked_ao;
      })
    );
  }

  returnAffoptFromGloss$(gloss) {
    return this.affixService.affoptions$.pipe(
      map(affopts => {
        const picked_ao = affopts.filter(ao => ao["gloss"] === gloss)[0];
        return picked_ao;
      })
    );
  }
}
