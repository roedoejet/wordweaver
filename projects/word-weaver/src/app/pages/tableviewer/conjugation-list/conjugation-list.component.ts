import {
  Component,
  OnDestroy,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { TIERS, Response } from "../../../../config/config";

import { SettingsState, State } from "../../../core/settings/settings.model";
import { selectSettings } from "../../../core/settings/settings.selectors";

import { Store, select } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "ww-conjugation-list",
  templateUrl: "./conjugation-list.component.html",
  styleUrls: ["./conjugation-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConjugationListComponent implements OnDestroy, OnInit {
  settings$: Observable<SettingsState>;
  // selection$: Observable<TableviewerState>;
  @Input() data$: Observable<Response>;
  unsubscribe$ = new Subject<void>();
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.settings$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectSettings)
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  // TODO: This is currently used for determining whether gridData is an error. This is fragile, and errors should be handled differently.
  isString(val) {
    return typeof val === "string";
  }

  isL2Showing(levels): boolean {
    const L2Tiers = TIERS.filter(x => x.options.language === "L2");
    return L2Tiers && L2Tiers.some(x => levels[x.name]);
  }
}
