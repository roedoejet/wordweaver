import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Pronoun } from "../../../models/models";
import { PronounService, ValidationService } from "../../../core/core.module";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";

import {
  actionChangeAgents,
  actionChangePatients
} from "../../../core/tableviewer-selection/tableviewer-selection.actions";

import { TableviewerState } from "../../../core/tableviewer-selection/tableviewer-selection.model";
import { selectTableviewer } from "../../../core/tableviewer-selection/tableviewer-selection.selectors";

@Component({
  selector: "ww-tableviewer-pers-panel",
  templateUrl: "./tableviewer-pers-panel.component.html",
  styleUrls: ["./tableviewer-pers-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableviewerPersPanelComponent implements OnInit {
  possiblePronouns$: Observable<Pronoun[]>;
  selection$: Observable<TableviewerState>;
  constructor(
    public pnService: PronounService,
    private store: Store,
    public validationService: ValidationService
  ) {
    this.possiblePronouns$ = this.pnService.pronouns$;
  }

  ngOnInit(): void {
    this.selection$ = this.store.pipe(select(selectTableviewer));
  }

  onAgentSelect(pns) {
    this.store.dispatch(actionChangeAgents({ agent: pns.value }));
  }

  onPatientSelect(pns) {
    this.store.dispatch(actionChangePatients({ patient: pns.value }));
  }
}
