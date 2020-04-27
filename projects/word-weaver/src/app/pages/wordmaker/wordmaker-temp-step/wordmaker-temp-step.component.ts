import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ChangeDetectionStrategy
} from "@angular/core";
import { Option, Conjugation, Response } from "../../../models/models";
import { OptionService, TierService } from "../../../core/core.module";
import { Observable, Subject } from "rxjs";
import { map, switchMap, withLatestFrom, takeUntil } from "rxjs/operators";
import { Store, select } from "@ngrx/store";
import { actionChangeOption } from "../../../core/wordmaker-selection/wordmaker-selection.actions";
import {
  WordmakerState,
  State
} from "../../../core/wordmaker-selection/wordmaker-selection.model";
import { selectWordmaker } from "../../../core/wordmaker-selection/wordmaker-selection.selectors";
import { createRequestQueryArgs } from "../../../core/tableviewer-selection/tableviewer-selection.effects";

@Component({
  selector: "ww-wordmaker-temp-step",
  templateUrl: "./wordmaker-temp-step.component.html",
  styleUrls: ["./wordmaker-temp-step.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordmakerTempStepComponent implements OnDestroy, OnInit {
  selection$: Observable<WordmakerState>;
  unsubscribe$ = new Subject<void>();
  @Output() selectedTemp = new EventEmitter<Option>();
  options$: Observable<any>;
  constructor(
    private optionService: OptionService,
    private store: Store<State>,
    private tierService: TierService
  ) {}

  ngOnInit(): void {
    this.selection$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectWordmaker)
    );
    this.options$ = this.selection$.pipe(
      takeUntil(this.unsubscribe$),
      // See all options, despite selection
      map(selection => {
        const newSelection = { ...selection, ...{ option: null } };
        return newSelection;
      }),
      switchMap(selection => this.tierService.conjugate$(selection))
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  returnTranslation(conjugations: Response) {
    let translationTier = this.tierService.TIERS.filter(
      x => x.name === "translation"
    );
    if (translationTier.length === 0) {
      translationTier = [
        this.tierService.TIERS[this.tierService.TIERS.length - 1]
      ];
    }
    return this.tierService.createTiers(conjugations, translationTier)[0][0][
      "html"
    ];
  }

  onAffOptSelect(ao) {
    this.store.dispatch(actionChangeOption({ option: ao }));
    this.selectedTemp.emit(ao);
  }

  onChipClick(tag) {
    this.returnAffoptFromTag$(tag).subscribe(t => {
      this.onAffOptSelect(t);
    });
  }

  returnAffoptFromTag$(tag) {
    return this.optionService.options$.pipe(
      map(affopts => {
        const picked_ao = affopts.filter(ao => ao["tag"] === tag)[0];
        return picked_ao;
      })
    );
  }

  returnAffoptFromGloss$(gloss) {
    return this.optionService.options$.pipe(
      map(affopts => {
        const picked_ao = affopts.filter(ao => ao["gloss"] === gloss)[0];
        return picked_ao;
      })
    );
  }
}
