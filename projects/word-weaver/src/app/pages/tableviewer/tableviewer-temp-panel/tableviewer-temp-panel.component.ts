import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Option } from "../../../models/models";
import { OptionService } from "../../../core/core.module";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { actionChangeOptions } from "../../../core/tableviewer-selection/tableviewer-selection.actions";

import {
  TableviewerState,
  State
} from "../../../core/tableviewer-selection/tableviewer-selection.model";
import { selectTableviewer } from "../../../core/tableviewer-selection/tableviewer-selection.selectors";

@Component({
  selector: "ww-tableviewer-temp-panel",
  templateUrl: "./tableviewer-temp-panel.component.html",
  styleUrls: ["./tableviewer-temp-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableviewerTempPanelComponent implements OnInit {
  possibleTimes$: Observable<Option[]>;
  selection$: Observable<TableviewerState>;
  constructor(
    private optionService: OptionService,
    private store: Store<State>
  ) {
    this.possibleTimes$ = this.optionService.options$;
  }

  ngOnInit(): void {
    // populate with store's selection
    this.selection$ = this.store.pipe(select(selectTableviewer));
  }

  onOptionSelect(Options) {
    this.store.dispatch(actionChangeOptions({ option: Options.value }));
  }
}
