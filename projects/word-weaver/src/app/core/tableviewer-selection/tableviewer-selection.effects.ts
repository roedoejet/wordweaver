import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { marker } from "@biesbjerg/ngx-translate-extract-marker";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { of } from "rxjs";
import {
  catchError,
  map,
  switchMap,
  take,
  tap,
  withLatestFrom
} from "rxjs/operators";
import { ConjugationService } from "../../core/conjugation/conjugation.service";
import { selectSettingsState, selectTableviewerState } from "../core.state";
// import { LocalStorageService } from "../local-storage/local-storage.service";
import { NotificationService } from "../notifications/notification.service";
import {
  actionChangeConjugations,
  actionChangeLoading,
  actionConjugationEvent
} from "./tableviewer-selection.actions";
import { State } from "./tableviewer-selection.model";

export const TABLEVIEWER_SELECTION_KEY = "TABLEVIEWER";

export function createRequestQueryArgs(selection) {
  const params = new URLSearchParams();
  ["option", "agent", "patient", "root"].forEach((x) => {
    selection[x].forEach((y) => {
      if (y.tag) {
        params.append(x, y.tag);
      }
    });
  });
  return params;
}

@Injectable()
export class TableviewerEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    // private localStorageService: LocalStorageService,
    private http: HttpClient,
    private notificationService: NotificationService,
    private conjugationService: ConjugationService
  ) {}

  // TODO: persist
  // persistSelection = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(
  //         actionChangeAgents,
  //         actionChangeOptions,
  //         actionChangeVerbs,
  //         actionChangePatients
  //       ),
  //       withLatestFrom(this.store.pipe(select(selectTableviewerState))),
  //       tap(([action, settings]) =>
  //         this.localStorageService.setItem(TABLEVIEWER_SELECTION_KEY, settings)
  //       )
  //     ),
  //   { dispatch: false }
  // );

  conjugate = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionConjugationEvent),
        withLatestFrom(this.store.pipe(select(selectTableviewerState))),
        tap(([action, selection]) => {
          if (selection.root.length < 1) {
            this.notificationService.translated(
              marker("ww.pages.tableviewer.notifications.error.missing-root"),
              {},
              "error"
            );
            return;
          }
          const queryArgs = createRequestQueryArgs(selection);
          if (queryArgs) {
            this.store.dispatch(actionChangeLoading({ loading: true }));
            this.store
              .pipe(
                select(selectSettingsState),
                switchMap((settings) => {
                  if (true) {
                    // TODO: Currently this always uses the local cached copy, but maybe this should be a configurable setting?
                    console.log("conjugated");
                    return this.conjugationService.conjugations$.pipe(
                      map((x) =>
                        this.conjugationService.filterConjugations(x, selection)
                      )
                    );
                  } else {
                    return this.http
                      .get(
                        settings.baseUrl +
                          "conjugations?" +
                          queryArgs.toString()
                      )
                      .pipe(catchError((err) => of(err)));
                  }
                }),
                take(1)
              )
              .subscribe((conj) => {
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
