import {
  Component,
  Inject,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { META, TableviewerViewModes } from "../../../config/config";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BehaviorSubject, Observable } from "rxjs";
import { actionChangeViewMode } from "../../core/tableviewer-selection/tableviewer-selection.actions";
import { Store, select } from "@ngrx/store";
import { State } from "../../core/settings/settings.model";
import { TableviewerState } from "../../core/tableviewer-selection/tableviewer-selection.model";
import { selectTableviewerState } from "../../core/core.state";

@Component({
  selector: "ww-tableviewer-dialog",
  templateUrl: "./tableviewer-dialog.component.html",
  styleUrls: ["./tableviewer-dialog.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableViewerDialogComponent implements OnInit {
  showDelay = new FormControl(600);
  hideDelay = new FormControl(200);
  tooltipPosition = "above";
  Meta = META;
  selection$: Observable<TableviewerState>;
  constructor(
    private dialogRef: MatDialogRef<TableViewerDialogComponent>,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.selection$ = this.store.pipe(select(selectTableviewerState));
  }

  onSelecteViewMode(event) {
    this.store.dispatch(actionChangeViewMode({ view: event.value }));
  }

  exit() {
    this.dialogRef.close();
  }
}
