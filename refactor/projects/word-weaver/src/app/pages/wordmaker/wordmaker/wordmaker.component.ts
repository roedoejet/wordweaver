import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "ww-wordmaker",
  templateUrl: "./wordmaker.component.html",
  styleUrls: ["./wordmaker.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordmakerComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  isLinear = false;
  verbFormGroup: FormGroup;
  persFormGroup: FormGroup;
  tempFormGroup: FormGroup;
  ngOnInit(): void {
    this.verbFormGroup = this.formBuilder.group({
      verbCtrl: ["", Validators.required]
    });
    this.persFormGroup = this.formBuilder.group({
      persCtrl: ["", Validators.required]
    });
    this.tempFormGroup = this.formBuilder.group({
      tempCtrl: ["", Validators.required]
    });
  }
}
