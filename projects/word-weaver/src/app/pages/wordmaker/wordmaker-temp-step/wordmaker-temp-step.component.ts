import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ChangeDetectionStrategy
} from "@angular/core";
import { Option, Conjugation, Response } from "../../../../config/config";
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
import { META } from "../../../../config/config";

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
  conjugatedOptions$: Observable<any>;
  possibleOptions$: Observable<Option[]>;
  possibleOptionsByType$: Observable<object>;
  displayTier: string = META.wordmaker.tempView;
  constructor(
    public optionService: OptionService,
    private store: Store<State>,
    private tierService: TierService
  ) {}

  ngOnInit(): void {
    this.selection$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectWordmaker)
    );
    this.possibleOptions$ = this.optionService.options$.pipe(
      takeUntil(this.unsubscribe$)
    );
    this.possibleOptionsByType$ = this.optionService.optionsByType$.pipe(
      takeUntil(this.unsubscribe$)
    );
    this.conjugatedOptions$ = this.selection$.pipe(
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

  returnOptionTierFromName() {
    const selectedTier = this.tierService.TIERS.filter(
      x => x.name === this.displayTier
    );
    return selectedTier[0];
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
