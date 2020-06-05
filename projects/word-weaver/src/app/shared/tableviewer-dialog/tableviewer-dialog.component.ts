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
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { take } from "rxjs/operators";
import {
  actionChangeViewMode,
  actionChangeGridOrder
} from "../../core/tableviewer-selection/tableviewer-selection.actions";
import { Store, select } from "@ngrx/store";
import { State } from "../../core/settings/settings.model";
import { TableviewerState } from "../../core/tableviewer-selection/tableviewer-selection.model";
import { selectTableviewerState } from "../../core/core.state";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { selectTableViewerGridOrder } from "../../core/tableviewer-selection/tableviewer-selection.selectors";
import {
  GridOrder,
  GridOrderOptions
} from "../../pages/tableviewer/conjugation-grid/conjugation-grid.component";

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
  gridOrderTitles = ["Tabs", "Rows", "Columns"];
  gridOrder$;
  gridOrderValues: GridOrderOptions[];
  constructor(
    private dialogRef: MatDialogRef<TableViewerDialogComponent>,
    private store: Store<State>
  ) {
    this.gridOrder$ = this.store.pipe(select(selectTableViewerGridOrder));
    this.gridOrder$
      .pipe(take(1))
      .subscribe(x => (this.gridOrderValues = [x.main, x.row, x.col])); // Initialize
  }

  ngOnInit(): void {
    this.selection$ = this.store.pipe(select(selectTableviewerState));
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.gridOrderValues,
      event.previousIndex,
      event.currentIndex
    );
    this.store.dispatch(
      actionChangeGridOrder({
        name: "gridOrder",
        partial: {
          main: this.gridOrderValues[0],
          row: this.gridOrderValues[1],
          col: this.gridOrderValues[2]
        }
      })
    );
  }

  onSelecteViewMode(event) {
    this.store.dispatch(actionChangeViewMode({ view: event.value }));
  }

  exit() {
    this.dialogRef.close();
  }
}
