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
import { WordmakerState } from "./wordmaker-selection.model";
import { selectWordmakerState, selectSettingsState } from "../core.state";
import { LocalStorageService } from "../local-storage/local-storage.service";
import {
  actionConjugationEvent,
  actionChangeAgent,
  actionChangeAffOption,
  actionChangePatient,
  actionChangeVerb,
  actionChangeStep,
  actionChangeLoading,
  actionChangeConjugations
} from "./wordmaker-selection.actions";
import { HttpClient, HttpParams } from "@angular/common/http";
import { marker } from "@biesbjerg/ngx-translate-extract-marker";

export const WORDMAKER_SELECTION_KEY = "WORDMAKER";

export function createRequestQueryArgs(selection) {
  const params = new URLSearchParams();
  ["option", "agent", "patient", "root"].forEach(x => {
    if (selection[x]) {
      params.append(x, selection[x].tag);
    }
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

  changeStep = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionChangeStep),
        withLatestFrom(this.store.pipe(select(selectWordmakerState))),
        tap(([action, selection]) => {
          console.log(selection);
          switch (selection.step) {
            case 0: {
              console.log("step 0");
              break;
            }
            case 1: {
              console.log("step 1");
              break;
            }
            case 2: {
              this.store.dispatch(actionConjugationEvent({}));
              break;
            }
            case 3: {
              this.store.dispatch(actionConjugationEvent({}));
            }
          }
        })
      ),
    { dispatch: false }
  );

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
                  actionChangeConjugations({ conjugations: conj })
                );
              });
          }
        })
      ),
    { dispatch: false }
  );
}
