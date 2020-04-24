import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from "@angular/core";
import { ValidationService } from "../../../core/core.module";
import { BehaviorSubject, Observable, Subject, Subscription } from "rxjs";
import { selectWordmaker } from "../../../core/wordmaker-selection/wordmaker-selection.selectors";
import {
  WordmakerState,
  State
} from "../../../core/wordmaker-selection/wordmaker-selection.model";
import { Store, select } from "@ngrx/store";
import { marker } from "@biesbjerg/ngx-translate-extract-marker";
import { actionChangeStep } from "../../../core/wordmaker-selection/wordmaker-selection.actions";
import { distinctUntilKeyChanged, take, takeUntil } from "rxjs/operators";

@Component({
  selector: "ww-wordmaker",
  templateUrl: "./wordmaker.component.html",
  styleUrls: ["./wordmaker.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordmakerComponent implements OnDestroy, OnInit, AfterViewInit {
  loading;
  isLinear = true;
  verbLabel = new BehaviorSubject<string>(marker("ww.wordmaker.verb.question"));
  persLabel = new BehaviorSubject<string>(marker("ww.wordmaker.pers.question"));
  tempLabel = new BehaviorSubject<string>(marker("ww.wordmaker.temp.question"));
  selection$: Observable<WordmakerState>;
  unsubscribe$ = new Subject<void>();
  @ViewChild("stepper") private stepper;
  constructor(
    private store: Store<State>,
    private validationService: ValidationService
  ) {}
  ngOnInit(): void {
    this.selection$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectWordmaker)
    );
    // Step 1: Labels
    this.selection$.subscribe(x => {
      if (x.root) {
        this.verbLabel.next(x.root.gloss);
      } else {
        this.verbLabel.next("ww.wordmaker.verb.question");
      }
      // TODO: This needs to be refactored to be language agnostic
      if (x.agent || x.patient) {
        let label = "";
        if (x.agent && x.patient) {
          label = x.agent.gloss + " > " + x.patient.gloss;
        } else if (x.agent) {
          label = x.agent.gloss;
        } else if (x.patient) {
          label = x.patient.gloss;
        } else {
          label = "ww.wordmaker.pers.question";
        }
        this.persLabel.next(label);
      } else {
        this.persLabel.next("ww.wordmaker.pers.question");
      }
      if (x.option) {
        this.tempLabel.next(x.option.gloss);
      } else {
        this.tempLabel.next("ww.wordmaker.temp.question");
      }
    });
  }

  onStepChange(s) {
    this.store.dispatch(actionChangeStep({ step: s }));
  }

  ngAfterViewInit() {
    this.stepper.selectionChange
      .pipe(
        takeUntil(this.unsubscribe$),
        distinctUntilKeyChanged("selectedIndex")
      )
      .subscribe(x => this.onStepChange(x.selectedIndex));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  randomX(x) {
    return x[Math.floor(Math.random() * (x.length - 1) + 1)];
  }

  onVerbSelect($event) {
    this.stepper.next(1);
  }

  onPatientSelect($event) {
    this.selection$.pipe(take(1)).subscribe(selection => {
      if (
        this.validationService.validate(
          "validation",
          "selection",
          "patients",
          selection
        )
      ) {
        this.stepper.next();
      }
    });
  }

  onAgentSelect($event) {
    this.selection$.pipe(take(1)).subscribe(selection => {
      if (
        this.validationService.validate(
          "validation",
          "selection",
          "agents",
          selection
        )
      ) {
        this.stepper.next();
      }
    });
  }

  onTempSelect($event) {
    this.stepper.next();
  }
}
