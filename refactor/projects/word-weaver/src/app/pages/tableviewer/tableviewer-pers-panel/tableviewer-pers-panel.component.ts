import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { TableviewerSelectionService } from "../../../core/core.module";
import { Pronoun } from "../../../models/models";
import { PronounService } from "../../../core/core.module";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "ww-tableviewer-pers-panel",
  templateUrl: "./tableviewer-pers-panel.component.html",
  styleUrls: ["./tableviewer-pers-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableviewerPersPanelComponent implements OnInit {
  agCheckboxGroup: FormGroup = new FormGroup({});
  agCheckboxPossibleValues: Observable<
    Pronoun[]
  > = this.pnService.pronouns$.pipe(
    map(values => {
      values.forEach(value => {
        this.agCheckboxGroup.addControl(
          value["tag"],
          new FormControl(this.agCheckedValues.indexOf(value["tag"]) !== -1)
        );
      });
      return values;
    })
  );
  agCheckedValues: string[] = [];
  patCheckboxGroup: FormGroup = new FormGroup({});
  patCheckboxPossibleValues: Observable<
    Pronoun[]
  > = this.pnService.pronouns$.pipe(
    map(values => {
      values.forEach(value => {
        this.patCheckboxGroup.addControl(
          value["tag"],
          new FormControl(this.patCheckedValues.indexOf(value["tag"]) !== -1)
        );
      });
      return values;
    })
  );
  patCheckedValues: string[] = [];
  chosenPro;
  role = "agent";
  limit = 8;
  selectAllAg = false;
  selectAllPat = false;
  constructor(
    private pnService: PronounService,
    private selectionService: TableviewerSelectionService
  ) {}

  ngOnInit(): void {}

  pushAgChanges(c) {
    this.selectionService.updateAgents(c);
  }

  pushPatChanges(c) {
    this.selectionService.updatePatients(c);
  }

  filterTrue(c) {
    return Object.keys(c).filter(k => {
      return c[k];
    });
  }

  toggleSelectAll() {
    if (this.role === "agent") {
      this.selectAllAg = !this.selectAllAg;
      this.agCheckboxPossibleValues.subscribe(pns => {
        pns.forEach(pn =>
          this.agCheckboxGroup.controls[pn.tag].setValue(this.selectAllAg)
        );
      });
    } else if (this.role === "patient") {
      this.selectAllPat = !this.selectAllPat;
      this.patCheckboxPossibleValues.subscribe(pns => {
        pns.forEach(pn =>
          this.patCheckboxGroup.controls[pn.tag].setValue(this.selectAllPat)
        );
      });
    }
  }

  checkRole() {
    console.log(this.role);
  }
}
