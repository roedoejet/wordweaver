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
import { selectTableviewer } from "../../../core/tableviewer-selection/tableviewer-selection.selectors";

@Component({
  selector: "ww-tableviewer-temp-panel",
  templateUrl: "./tableviewer-temp-panel.component.html",
  styleUrls: ["./tableviewer-temp-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableviewerTempPanelComponent implements OnDestroy, OnInit {
  possibleOptions$: Observable<Option[]>;
  possibleOptionsByType$: Observable<object>;
  selection$: Observable<TableviewerState>;
  unsubscribe$ = new Subject<void>();
  constructor(
    private optionService: OptionService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.possibleOptions$ = this.optionService.options$.pipe(
      takeUntil(this.unsubscribe$)
    );
    this.possibleOptionsByType$ = this.possibleOptions$.pipe(
      takeUntil(this.unsubscribe$),
      map(options => {
        const optionTypes = [...new Set(options.map(x => x.type))];
        const optionsByType = [];
        optionTypes
          .filter(x => x)
          .forEach(x =>
            optionsByType.push({
              type: x,
              options: options.filter(y => y.type === x)
            })
          );
        return optionsByType;
      })
    );
    // populate with store's selection
    this.selection$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectTableviewer)
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  optionsUseType$(): Observable<boolean> {
    return this.possibleOptions$.pipe(
      map(options => options.some(option => option.type))
    );
  }

  onOptionSelect(Options) {
    this.store.dispatch(actionChangeOptions({ option: Options.value }));
  }
}
