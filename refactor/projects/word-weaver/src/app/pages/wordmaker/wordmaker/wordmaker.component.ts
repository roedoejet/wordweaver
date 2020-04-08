import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotificationService } from "../../../core/core.module";
import { BehaviorSubject, Observable } from "rxjs";
import {
  AffixService,
  PronounService,
  VerbService
} from "../../../core/core.module";
import { WordmakerSelectionService } from "../../../core/core.module";
import { marker } from "@biesbjerg/ngx-translate-extract-marker";
import { TranslateService } from "@ngx-translate/core";

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
  verbFormGroup: FormGroup;
  persFormGroup: FormGroup;
  tempFormGroup: FormGroup;
  currentStep$: Observable<number>;
  @ViewChild("stepper") private stepper;
  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private affixService: AffixService,
    private pronounService: PronounService,
    private verbService: VerbService,
    private selectionService: WordmakerSelectionService,
    private translate: TranslateService
  ) {}
  ngOnInit(): void {
    // console.log(this.stepper.selectedIndex)
    // this.stepper.valueChanges.subscribe(x => console.log(x.selected))
    // Step 1: Verb
    this.verbFormGroup = this.formBuilder.group({
      verbCtrl: ["", Validators.required]
    });
    this.verbFormGroup.controls.verbCtrl.valueChanges.subscribe(x => {
      if (x) {
        this.verbLabel.next(x.gloss);
      } else {
        this.verbLabel.next("ww.wordmaker.verb.question");
      }
      this.selectionService.updateVerb(x);
    });
    // Step 2: Pronoun
    this.persFormGroup = this.formBuilder.group({
      persCtrl: ["", Validators.required]
    });
    this.persFormGroup.controls.persCtrl.valueChanges.subscribe(x => {
      if (x) {
        let label = "";
        if ("agent" in x && "patient" in x) {
          label = x.agent.gloss + " > " + x.patient.gloss;
          this.selectionService.updateAgent(x.agent);
          this.selectionService.updatePatient(x.patient);
        } else if ("agent" in x) {
          this.selectionService.updateAgent(x.agent);
          label = x.agent.gloss;
        } else if ("patient" in x) {
          this.selectionService.updatePatient(x.patient);
          label = x.patient.gloss;
        }
        this.persLabel.next(label);
      } else {
        this.persLabel.next("ww.wordmaker.pers.question");
      }
    });
    // Step 3: Temporal
    this.tempFormGroup = this.formBuilder.group({
      tempCtrl: ["", Validators.required]
    });
    this.tempFormGroup.controls.tempCtrl.valueChanges.subscribe(x => {
      if (x) {
        this.tempLabel.next(x.gloss);
      } else {
        this.tempLabel.next("ww.wordmaker.temp.question");
      }
      this.selectionService.updateAffOption(x);
    });
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    this.currentStep$ = this.stepper.selectedIndex.valueChanges;
  }

  randomX(x) {
    return x[Math.floor(Math.random() * (x.length - 1) + 1)];
  }

  selectRandomIfNull(type) {
    if (type === "verb" && !this.verbFormGroup.controls.verbCtrl.value) {
      this.onVerbSelect(this.randomX(this.verbService.verbs), true);
    } else if (type === "pers" && !this.persFormGroup.controls.persCtrl.value) {
      if (
        this.verbFormGroup.controls.verbCtrl.value.thematic_relation ===
        "purple"
      ) {
        // TODO: Filter options
        this.onPersSelect({
          agent: this.randomX(this.pronounService.pronouns),
          patient: this.randomX(this.pronounService.pronouns)
        });
      } else if (
        this.verbFormGroup.controls.verbCtrl.value.thematic_relation === "red"
      ) {
        this.onPersSelect({
          agent: this.randomX(this.pronounService.pronouns)
        });
      } else if (
        this.verbFormGroup.controls.verbCtrl.value.thematic_relation === "blue"
      ) {
        this.onPersSelect({
          patient: this.randomX(this.pronounService.pronouns)
        });
      }
    } else if (type === "temp" && !this.tempFormGroup.controls.tempCtrl.value) {
      this.onTempSelect(this.randomX(this.affixService.affixoptions), true);
    }
  }

  onVerbSelect($event, random = false) {
    // Reset following steps
    this.selectionService.updateAgent("");
    this.selectionService.updatePatient("");
    this.selectionService.updateAffOption("");
    this.persFormGroup.reset();
    this.tempFormGroup.reset();
    this.verbFormGroup.controls.verbCtrl.setValue($event);
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

  onPersSelect($event, random = false) {
    this.persFormGroup.controls.persCtrl.setValue($event);
    let completed = false;
    // Reset following step
    this.selectionService.updateAffOption("");
    this.tempFormGroup.reset();
    if ("agent" in $event && "patient" in $event) {
      if (random) {
        this.notificationService.translated(
          marker("ww.wordmaker.notifications.random.pers.transitive"),
          { agent: $event.agent.gloss, patient: $event.patient.gloss },
          "success"
        );
      } else {
        this.notificationService.translated(
          marker("ww.wordmaker.notifications.selected.pers.transitive"),
          { agent: $event.agent.gloss, patient: $event.patient.gloss },
          "success"
        );
      }
      completed = true;
    } else if ("agent" in $event) {
      if (
        this.verbFormGroup.controls.verbCtrl.value.thematic_relation === "red"
      ) {
        if (random) {
          this.notificationService.translated(
            marker("ww.wordmaker.notifications.random.pers.intransitive"),
            { value: $event.agent.gloss },
            "success"
          );
        } else {
          this.notificationService.translated(
            marker("ww.wordmaker.notifications.selected.pers.intransitive"),
            { value: $event.agent.gloss },
            "success"
          );
        }
        completed = true;
      }
    } else if ("patient" in $event) {
      if (
        this.verbFormGroup.controls.verbCtrl.value.thematic_relation === "blue"
      ) {
        if (random) {
          this.notificationService.translated(
            marker("ww.wordmaker.notifications.random.pers.intransitive"),
            { value: $event.patient.gloss },
            "success"
          );
        } else {
          this.notificationService.translated(
            marker("ww.wordmaker.notifications.selected.pers.intransitive"),
            { value: $event.patient.gloss },
            "success"
          );
        }
        completed = true;
      }
    }
    if (completed) {
      this.stepper.next();
    }
  }

  onTempSelect($event, random = false) {
    this.tempFormGroup.controls.tempCtrl.setValue($event);
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
