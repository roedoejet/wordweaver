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
  checkboxGroup: FormGroup = new FormGroup({});
  checkboxPossibleValues: Observable<
    AffOption[]
  > = this.affixService.affoptions$.pipe(
    map(values => {
      values.forEach(value => {
        this.checkboxGroup.addControl(
          value["tag"],
          new FormControl(this.checkedValues.indexOf(value["tag"]) !== -1)
        );
      });
      return values;
    })
  );
  checkedValues: string[] = [];
  chosenTimes = [];
  selectAll = false;
  constructor(
    private affixService: AffixService,
    private selectionService: TableviewerSelectionService
  ) {}

  ngOnInit(): void {}

  pushChanges(c) {
    this.selectionService.updateAffOptions(c);
  }

  filterTrue(c) {
    return Object.keys(c).filter(k => {
      return c[k];
    });
  }

  toggleSelectAll() {
    this.selectAll = !this.selectAll;
    this.checkboxPossibleValues.subscribe(ts => {
      ts.forEach(t =>
        this.checkboxGroup.controls[t.tag].setValue(this.selectAll)
      );
    });
  }
}
