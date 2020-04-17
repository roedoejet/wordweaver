import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { State } from "./wordmaker-selection.model";
import {
  tap,
  withLatestFrom,
  switchMap,
  catchError,
  map,
  distinctUntilChanged,
  mapTo,
  filter
} from "rxjs/operators";
import { of } from "rxjs";
import { selectWordmakerState, selectSettingsState } from "../core.state";
import { LocalStorageService } from "../local-storage/local-storage.service";
import {
  actionConjugationEvent,
  actionChangeAgent,
  actionChangeAffOption,
  actionChangePatient,
  actionChangeVerb,
  actionChangeLoading,
  actionChangeConjugation
} from "./wordmaker-selection.actions";
import { HttpClient, HttpParams } from "@angular/common/http";
import { marker } from "@biesbjerg/ngx-translate-extract-marker";

export const WORDMAKER_SELECTION_KEY = "WORDMAKER";

export function createRequestQueryArgs(selection) {
  const params = new URLSearchParams();
  ["aff-option", "agent", "patient", "root"].forEach(x => {
    selection[x].forEach(y => {
      if (y.tag) {
        params.append(x, y.tag);
      }
    });
  });
  return params;
}

@Injectable()
export class WordmakerEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private localStorageService: LocalStorageService,
    private http: HttpClient
  ) {}

  // TODO: persist
  // persistSelection = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(
  //         actionChangeAgents,
  //         actionChangeAffOptions,
  //         actionChangeVerbs,
  //         actionChangePatients
  //       ),
  //       withLatestFrom(this.store.pipe(select(selectWordmakerState))),
  //       tap(([action, settings]) =>
  //         this.localStorageService.setItem(WORDMAKER_SELECTION_KEY, settings)
  //       )
  //     ),
  //   { dispatch: false }
  // );

  conjugate = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionConjugationEvent),
        withLatestFrom(this.store.pipe(select(selectWordmakerState))),
        tap(([action, selection]) => {
          const queryArgs = createRequestQueryArgs(selection);
          if (queryArgs) {
            this.store.dispatch(actionChangeLoading({ loading: true }));
            this.store
              .pipe(
                select(selectSettingsState),
                switchMap(settings =>
                  this.http
                    .get(
                      settings.baseUrl + "conjugations?" + queryArgs.toString()
                    )
                    .pipe(catchError(err => of(err)))
                )
              )
              .subscribe(conj => {
                this.store.dispatch(actionChangeLoading({ loading: false }));
                this.store.dispatch(
                  actionChangeConjugation({ conjugation: conj })
                );
              });
          }
        })
      ),
    { dispatch: false }
  );
}
