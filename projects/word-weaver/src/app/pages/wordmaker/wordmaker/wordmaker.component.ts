import {
  Component,
  Directive,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators
} from "@angular/forms";
import { NotificationService } from "../../../core/core.module";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { selectWordmaker } from "../../../core/wordmaker-selection/wordmaker-selection.selectors";
import {
  WordmakerState,
  State
} from "../../../core/wordmaker-selection/wordmaker-selection.model";
import {
  AffixService,
  PronounService,
  VerbService
} from "../../../core/core.module";
import { Store, select } from "@ngrx/store";
import { marker } from "@biesbjerg/ngx-translate-extract-marker";
import { TranslateService } from "@ngx-translate/core";
import {
  actionChangeStep,
  actionChangeVerb
} from "../../../core/wordmaker-selection/wordmaker-selection.actions";

@Component({
  selector: "ww-wordmaker",
  templateUrl: "./wordmaker.component.html",
  styleUrls: ["./wordmaker.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordmakerComponent implements OnInit {
  loading;
  isLinear = true;
  verbLabel = new BehaviorSubject<string>(marker("ww.wordmaker.verb.question"));
  persLabel = new BehaviorSubject<string>(marker("ww.wordmaker.pers.question"));
  tempLabel = new BehaviorSubject<string>(marker("ww.wordmaker.temp.question"));
  selection$: Observable<WordmakerState>;
  @ViewChild("stepper") private stepper;
  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private affixService: AffixService,
    private pronounService: PronounService,
    private verbService: VerbService,
    private translate: TranslateService,
    private store: Store<State>
  ) {}
  ngOnInit(): void {
    this.selection$ = this.store.pipe(select(selectWordmaker));
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
        if (x.root.thematic_relation === "purple" && x.agent && x.patient) {
          label = x.agent.gloss + " > " + x.patient.gloss;
        } else if (x.root.thematic_relation === "red") {
          label = x.agent.gloss;
        } else if (x.root.thematic_relation === "blue") {
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

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    this.stepper.selectionChange.subscribe(x =>
      this.onStepChange(x.selectedIndex)
    );
  }

  randomX(x) {
    return x[Math.floor(Math.random() * (x.length - 1) + 1)];
  }

  selectRandomIfNull(type) {
    // if (type === "verb" && !this.verbFormGroup.controls.verbCtrl.value) {
    //   this.onVerbSelect(this.randomX(this.verbService.verbs), true);
    // } else if (type === "pers" && !this.persFormGroup.controls.persCtrl.value) {
    //   if (
    //     this.verbFormGroup.controls.verbCtrl.value.thematic_relation ===
    //     "purple"
    //   ) {
    //     // TODO: Filter options
    //     this.onPersSelect({
    //       agent: this.randomX(this.pronounService.pronouns),
    //       patient: this.randomX(this.pronounService.pronouns)
    //     });
    //   } else if (
    //     this.verbFormGroup.controls.verbCtrl.value.thematic_relation === "red"
    //   ) {
    //     this.onPersSelect(
    //       {
    //         agent: this.randomX(this.pronounService.pronouns)
    //       },
    //       true
    //     );
    //   } else if (
    //     this.verbFormGroup.controls.verbCtrl.value.thematic_relation === "blue"
    //   ) {
    //     this.onPersSelect(
    //       {
    //         patient: this.randomX(this.pronounService.pronouns)
    //       },
    //       true
    //     );
    //   }
    // } else if (type === "temp" && !this.tempFormGroup.controls.tempCtrl.value) {
    //   this.onTempSelect(this.randomX(this.affixService.affixoptions), true);
    // }
  }

  onVerbSelect($event, random = false) {
    // Reset following steps
    // this.selectionService.updateAgent("");
    // this.selectionService.updatePatient("");
    // this.selectionService.updateAffOption("");
    // this.persFormGroup.reset();
    // this.tempFormGroup.reset();
    // this.verbFormGroup.controls.verbCtrl.setValue($event);
    if (random) {
      this.notificationService.translated(
        marker("ww.wordmaker.notifications.random.verb"),
        { value: $event.gloss },
        "success"
      );
    } else {
      this.notificationService.translated(
        marker("ww.wordmaker.notifications.selected.verb"),
        { value: $event.gloss },
        "success"
      );
    }
    this.stepper.next();
  }

  onPatientSelect($event, random = false) {
    this.stepper.next();
  }

  onAgentSelect($event, random = false) {
    let completed = false;
    // Reset following step
    // this.selectionService.updateAffOption("");
    // this.tempFormGroup.reset();
    // if ("agent" in $event && "patient" in $event) {
    //   if (random) {
    //     this.notificationService.translated(
    //       marker("ww.wordmaker.notifications.random.pers.transitive"),
    //       { agent: $event.agent.gloss, patient: $event.patient.gloss },
    //       "success"
    //     );
    //   } else {
    //     this.notificationService.translated(
    //       marker("ww.wordmaker.notifications.selected.pers.transitive"),
    //       { agent: $event.agent.gloss, patient: $event.patient.gloss },
    //       "success"
    //     );
    //   }
    //   completed = true;
    // } else if ("agent" in $event) {
    //   if (
    //     this.verbFormGroup.controls.verbCtrl.value.thematic_relation === "red"
    //   ) {
    //     if (random) {
    //       this.notificationService.translated(
    //         marker("ww.wordmaker.notifications.random.pers.intransitive"),
    //         { value: $event.agent.gloss },
    //         "success"
    //       );
    //     } else {
    //       this.notificationService.translated(
    //         marker("ww.wordmaker.notifications.selected.pers.intransitive"),
    //         { value: $event.agent.gloss },
    //         "success"
    //       );
    //     }
    //     completed = true;
    //   }
    // } else if ("patient" in $event) {
    //   if (
    //     this.verbFormGroup.controls.verbCtrl.value.thematic_relation === "blue"
    //   ) {
    //     if (random) {
    //       this.notificationService.translated(
    //         marker("ww.wordmaker.notifications.random.pers.intransitive"),
    //         { value: $event.patient.gloss },
    //         "success"
    //       );
    //     } else {
    //       this.notificationService.translated(
    //         marker("ww.wordmaker.notifications.selected.pers.intransitive"),
    //         { value: $event.patient.gloss },
    //         "success"
    //       );
    //     }
    //     completed = true;
    //   }
    // }
    // if (completed) {
    this.stepper.next();
    // }
  }

  onTempSelect($event, random = false) {
    if (random) {
      this.notificationService.translated(
        marker("ww.wordmaker.notifications.random.temp"),
        { value: $event.gloss },
        "success"
      );
    } else {
      this.notificationService.translated(
        marker("ww.wordmaker.notifications.selected.temp"),
        { value: $event.gloss },
        "success"
      );
    }
    this.stepper.next();
  }
}
