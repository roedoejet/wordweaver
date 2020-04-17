import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { AffOption } from "../../../models/models";
import { AffixService } from "../../../core/core.module";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { actionChangeAffOptions } from "../../../core/tableviewer-selection/tableviewer-selection.actions";

import { TableviewerState } from "../../../core/tableviewer-selection/tableviewer-selection.model";
import { selectTableviewer } from "../../../core/tableviewer-selection/tableviewer-selection.selectors";

@Component({
  selector: "ww-tableviewer-temp-panel",
  templateUrl: "./tableviewer-temp-panel.component.html",
  styleUrls: ["./tableviewer-temp-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableviewerTempPanelComponent implements OnInit {
  possibleTimes$: Observable<AffOption[]>;
  selection$: Observable<TableviewerState>;
  constructor(private affixService: AffixService, private store: Store) {
    this.possibleTimes$ = this.affixService.affoptions$;
  }

  ngOnInit(): void {
    // populate with store's selection
    this.selection$ = this.store.pipe(select(selectTableviewer));
  }

  onAffOptionSelect(affoptions) {
    this.store.dispatch(actionChangeAffOptions({ option: affoptions.value }));
  }
}
