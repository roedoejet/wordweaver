import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { AffOption } from "../../../models/models";
import { AffixService } from "../../../core/core.module";
import { TableviewerSelectionService } from "../../../core/core.module";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "ww-tableviewer-temp-panel",
  templateUrl: "./tableviewer-temp-panel.component.html",
  styleUrls: ["./tableviewer-temp-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableviewerTempPanelComponent implements OnInit {
  times = new FormControl();
  possibleTimes$: Observable<AffOption[]>;
  constructor(
    private affixService: AffixService,
    private selectionService: TableviewerSelectionService
  ) {
    this.possibleTimes$ = this.affixService.affoptions$;
  }

  ngOnInit(): void {
    // TODO: Redux
    this.times.valueChanges.subscribe(affopts => {
      return this.pushChanges(affopts.map(affopt => affopt.tag));
    });
  }
  // TODO: Redux
  pushChanges(c) {
    this.selectionService.updateAffOptions(c);
  }

  // TODO: Redux
  filterTrue(c) {
    return Object.keys(c).filter(k => {
      return c[k];
    });
  }
}
