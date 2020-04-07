import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotificationService } from "../../../core/core.module";
import { BehaviorSubject } from "rxjs";
import {
  AffixService,
  PronounService,
  VerbService
} from "../../../core/core.module";
import { WordmakerSelectionService } from "../../../core/core.module";

@Component({
  selector: "ww-wordmaker",
  templateUrl: "./wordmaker.component.html",
  styleUrls: ["./wordmaker.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordmakerComponent implements OnInit {
  isLinear = true;
  verbLabel = new BehaviorSubject<string>("What is the action?");
  persLabel = new BehaviorSubject<string>("Who is doing it?");
  tempLabel = new BehaviorSubject<string>("When is it happening?");
  verbFormGroup: FormGroup;
  persFormGroup: FormGroup;
  tempFormGroup: FormGroup;
  @ViewChild("stepper") private stepper;
  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private affixService: AffixService,
    private pronounService: PronounService,
    private verbService: VerbService,
    private selectionService: WordmakerSelectionService
  ) {}
  ngOnInit(): void {
    // Step 1: Verb
    this.verbFormGroup = this.formBuilder.group({
      verbCtrl: ["", Validators.required]
    });
    this.verbFormGroup.controls.verbCtrl.valueChanges.subscribe(x => {
      if (x) {
        this.verbLabel.next(x.gloss);
      } else {
        this.verbLabel.next("What is the action?");
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
        this.persLabel.next("Who is doing it?");
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
        this.tempLabel.next("When is it happening?");
      }
      this.selectionService.updateAffOption(x);
    });
  }

  randomX(x) {
    return x[Math.floor(Math.random() * (x.length - 1) + 1)];
  }

  selectRandomIfNull(type) {
    console.log(this.verbFormGroup.controls.verbCtrl.value);
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
      this.notificationService.success(
        'Random verb "' + $event.gloss + '" selected'
      );
    } else {
      this.notificationService.success('Verb "' + $event.gloss + '" selected');
    }
    this.stepper.next();
  }

  onPersSelect($event, random = false) {
    this.persFormGroup.controls.persCtrl.setValue($event);
    let completed = false;
    // Reset following step
    this.selectionService.updateAffOption("");
    this.tempFormGroup.reset();
    let start = 'Person "';
    if (random) {
      start = 'Random person "';
    }
    console.log($event);
    if ("agent" in $event && "patient" in $event) {
      this.notificationService.success(
        start + $event.agent.gloss + " > " + $event.patient.gloss + '" selected'
      );
      completed = true;
    } else if ("agent" in $event) {
      if (
        this.verbFormGroup.controls.verbCtrl.value.thematic_relation === "red"
      ) {
        this.notificationService.success(
          start + $event.agent.gloss + '" selected'
        );
        completed = true;
      }
    } else if ("patient" in $event) {
      if (
        this.verbFormGroup.controls.verbCtrl.value.thematic_relation === "blue"
      ) {
        this.notificationService.success(
          start + $event.patient.gloss + '" selected'
        );
        completed = true;
      }
    }
    if (completed) {
      this.stepper.next();
    }
  }

  onTempSelect($event, random = false) {
    console.log($event);
    this.tempFormGroup.controls.tempCtrl.setValue($event);
    if (random) {
      this.notificationService.success(
        'Random time "' + $event.gloss + '" selected'
      );
    } else {
      this.notificationService.success('Time "' + $event.gloss + '" selected');
    }
    this.stepper.next();
  }
}
