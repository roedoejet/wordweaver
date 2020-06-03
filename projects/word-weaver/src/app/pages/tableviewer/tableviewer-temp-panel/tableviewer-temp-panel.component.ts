import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { Option } from "../../../../config/config";
import { OptionService } from "../../../core/core.module";
import { Store, select } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { map, takeUntil } from "rxjs/operators";

import { actionChangeOptions } from "../../../core/tableviewer-selection/tableviewer-selection.actions";

import {
  TableviewerState,
  State
} from "../../../core/tableviewer-selection/tableviewer-selection.model";
import { selectTableViewerOption } from "../../../core/tableviewer-selection/tableviewer-selection.selectors";

@Component({
  selector: "ww-tableviewer-temp-panel",
  templateUrl: "./tableviewer-temp-panel.component.html",
  styleUrls: ["./tableviewer-temp-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableviewerTempPanelComponent implements OnDestroy, OnInit {
  possibleOptions$: Observable<Option[]>;
  possibleOptionsByType$: Observable<object>;
  selection$: Observable<Option[]>;
  unsubscribe$ = new Subject<void>();
  constructor(
    public optionService: OptionService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.possibleOptions$ = this.optionService.options$.pipe(
      takeUntil(this.unsubscribe$)
    );
    this.possibleOptionsByType$ = this.optionService.optionsByType$.pipe(
      takeUntil(this.unsubscribe$)
    );
    // populate with store's selection
    this.selection$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectTableViewerOption)
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onOptionSelect(Options) {
    this.store.dispatch(actionChangeOptions({ option: Options.value }));
  }
}
