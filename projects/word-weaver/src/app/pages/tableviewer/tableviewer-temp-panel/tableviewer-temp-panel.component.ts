import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Option } from "../../../../config/config";
import { OptionService } from "../../../core/core.module";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, distinct } from "rxjs/operators";

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
  possibleOptions$: Observable<Option[]>;
  possibleOptionsByType$: Observable<object>;
  selection$: Observable<TableviewerState>;
  constructor(
    private optionService: OptionService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.possibleOptions$ = this.optionService.options$;
    this.possibleOptionsByType$ = this.possibleOptions$.pipe(
      map(options => {
        const optionTypes = [...new Set(options.map(x => x.type))];
        const optionsByType = [];
        optionTypes.forEach(x =>
          optionsByType.push({
            type: x,
            options: options.filter(y => y.type === x)
          })
        );
        return optionsByType;
      })
    );
    // populate with store's selection
    this.selection$ = this.store.pipe(select(selectTableviewer));
  }

  onOptionSelect(Options) {
    this.store.dispatch(actionChangeOptions({ option: Options.value }));
  }
}
