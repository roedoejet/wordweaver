import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { State } from "./tableviewer-selection.model";
import {
  tap,
  withLatestFrom,
  map,
  distinctUntilChanged,
  mapTo,
  filter
} from "rxjs/operators";

import { selectTableviewerState } from "../core.state";
import { LocalStorageService } from "../local-storage/local-storage.service";
import {
  actionChangeAgents,
  actionChangeAffOptions,
  actionChangePatients,
  actionChangeVerbs
} from "./tableviewer-selection.actions";

export const TABLEVIEWER_SELECTION_KEY = "TABLEVIEWER";

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private localStorageService: LocalStorageService
  ) {}

  persistSelection = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          actionChangeAgents,
          actionChangeAffOptions,
          actionChangeVerbs,
          actionChangePatients
        ),
        withLatestFrom(this.store.pipe(select(selectTableviewerState))),
        tap(([action, settings]) =>
          this.localStorageService.setItem(TABLEVIEWER_SELECTION_KEY, settings)
        )
      ),
    { dispatch: false }
  );
}
