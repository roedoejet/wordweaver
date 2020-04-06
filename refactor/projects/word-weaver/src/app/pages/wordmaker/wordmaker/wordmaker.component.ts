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
    private verbService: VerbService
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
    });
    // Step 2: Pronoun
    this.persFormGroup = this.formBuilder.group({
      persCtrl: ["", Validators.required]
    });
    this.persFormGroup.controls.persCtrl.valueChanges.subscribe(x => {
      if (x) {
        this.persLabel.next(x.gloss);
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
    });
  }

  randomX(x) {
    return x[Math.floor(Math.random() * (x.length - 1) + 1)];
  }

  selectRandomIfNull(type) {
    if (type === "verb" && !this.verbFormGroup.controls.verbCtrl.value) {
      this.onVerbSelect(this.randomX(this.verbService.verbs), true);
    } else if (type === "pers" && !this.persFormGroup.controls.persCtrl.value) {
    } else if (type === "temp" && !this.tempFormGroup.controls.tempCtrl.value) {
    }
  }

  onVerbSelect($event, random = false) {
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
    console.log($event);
    // this.persFormGroup.controls.persCtrl.setValue($event);
    // this.notificationService.success('Person "' + $event.gloss + '" selected')
    // this.stepper.next();
  }

  onTempSelect($event, random = false) {
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
