import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { SettingsState, State } from "../../core/settings/settings.model";
import { selectSettings } from "../../core/settings/settings.selectors";
import { actionSettingsChangeLevel } from "../../core/settings/settings.actions";
@Component({
  selector: "ww-download-dialog",
  templateUrl: "./download-dialog.component.html",
  styleUrls: ["./download-dialog.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DownloadDialogComponent implements OnInit {
  objectkeys = Object.keys;
  settings$: Observable<SettingsState>;
  fileTypes: string[] = ["csv", "docx", "latex"];
  showDelay = new FormControl(600);
  hideDelay = new FormControl(200);
  tooltipPosition = "above";
  form: FormGroup = new FormGroup({
    ftype: new FormControl("docx", [Validators.required]),
    headers: new FormControl(false),
    heading: new FormControl("")
  });
  constructor(
    private dialogRef: MatDialogRef<DownloadDialogComponent>,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.settings$ = this.store.pipe(select(selectSettings));
    this.form.valueChanges.subscribe(x => console.log(x));
  }

  onLevelSelect({ checked }, key: string) {
    this.store.dispatch(actionSettingsChangeLevel({ checked, key }));
  }

  download() {}

  exit() {
    this.dialogRef.close();
  }
}
