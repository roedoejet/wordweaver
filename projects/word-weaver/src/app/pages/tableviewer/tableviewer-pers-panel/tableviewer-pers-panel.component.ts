import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { Pronoun } from "../../../../config/config";
import {
  PronounService,
  ValidationService,
  selectSettingsLanguage
} from "../../../core/core.module";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Store, select } from "@ngrx/store";

import {
  actionChangeAgents,
  actionChangePatients
} from "../../../core/tableviewer-selection/tableviewer-selection.actions";

import { TableviewerState } from "../../../core/tableviewer-selection/tableviewer-selection.model";
import { selectTableviewerPronouns } from "../../../core/tableviewer-selection/tableviewer-selection.selectors";

@Component({
  selector: "ww-tableviewer-pers-panel",
  templateUrl: "./tableviewer-pers-panel.component.html",
  styleUrls: ["./tableviewer-pers-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableviewerPersPanelComponent implements OnDestroy, OnInit {
  possiblePronouns$: Observable<Pronoun[]>;
  selection$: Observable<Partial<TableviewerState>>;
  unsubscribe$ = new Subject<void>();
  lang$ = this.store.pipe(
    takeUntil(this.unsubscribe$),
    select(selectSettingsLanguage)
  );
  constructor(
    public pnService: PronounService,
    private store: Store,
    public validationService: ValidationService
  ) {
    this.possiblePronouns$ = this.pnService.pronouns$;
  }

  ngOnInit(): void {
    this.selection$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectTableviewerPronouns)
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onAgentSelect(pns) {
    this.store.dispatch(actionChangeAgents({ agent: pns.value }));
  }

  onPatientSelect(pns) {
    this.store.dispatch(actionChangePatients({ patient: pns.value }));
  }
}
