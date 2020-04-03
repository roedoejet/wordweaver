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
  agent = new FormControl();
  patient = new FormControl();
  possiblePronouns$: Observable<Pronoun[]>;
  constructor(
    public pnService: PronounService,
    private selectionService: TableviewerSelectionService
  ) {
    this.possiblePronouns$ = this.pnService.pronouns$;
  }

  ngOnInit(): void {
    // TODO: Redux
    this.agent.valueChanges.subscribe(pns => {
      return this.pushAgChanges(pns.map(pn => pn.tag));
    });
    // TODO: Redux
    this.patient.valueChanges.subscribe(pns => {
      return this.pushPatChanges(pns.map(pn => pn.tag));
    });
  }

  // TODO: Redux
  pushAgChanges(c) {
    this.selectionService.updateAgents(c);
  }

  // TODO: Redux
  pushPatChanges(c) {
    this.selectionService.updatePatients(c);
  }

  // TODO: Redux
  filterTrue(c) {
    return Object.keys(c).filter(k => {
      return c[k];
    });
  }
}
