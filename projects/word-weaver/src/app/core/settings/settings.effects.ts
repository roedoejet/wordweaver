import { ActivationEnd, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { OverlayContainer } from "@angular/cdk/overlay";
import { select, Store } from "@ngrx/store";
import { Actions, createEffect, ofType, Effect } from "@ngrx/effects";
import { TranslateService } from "@ngx-translate/core";
import { combineLatest, interval, merge, of } from "rxjs";
import {
  tap,
  withLatestFrom,
  map,
  distinctUntilChanged,
  mapTo,
  filter
} from "rxjs/operators";

import { selectSettingsState } from "../core.state";
import { LocalStorageService } from "../local-storage/local-storage.service";
import { AnimationsService } from "../animations/animations.service";

import {
  actionSettingsChangeAnimationsElements,
  actionSettingsChangeAnimationsPage,
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeLanguage,
  actionSettingsChangeLevel,
  actionSettingsChangeHighlight,
  actionSettingsChangeTestApi,
  actionSettingsChangeTheme,
  actionSettingsChangeStickyHeader,
  actionSettingsChangeHour,
  actionSettingsChangeBaseUrl
} from "./settings.actions";
import {
  selectEffectiveTheme,
  selectSettingsLanguage,
  selectPageAnimations,
  selectElementsAnimations
} from "./settings.selectors";
import { State } from "./settings.model";
import { environment } from "../../../environments/environment";

export const SETTINGS_KEY = "SETTINGS";

const INIT = of("ww-init-effect-trigger");

@Injectable()
export class SettingsEffects {
  defaultBaseUrl = environment.base + environment.prefix;
  testBaseUrl = environment.base + environment.testPrefix;
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private router: Router,
    private overlayContainer: OverlayContainer,
    private localStorageService: LocalStorageService,
    private animationsService: AnimationsService,
    private translateService: TranslateService
  ) {}

  changeHour = createEffect(() =>
    merge(
      interval(60_000),
      this.actions$.pipe(ofType(actionSettingsChangeAutoNightMode))
    ).pipe(
      mapTo(new Date().getHours()),
      distinctUntilChanged(),
      map(hour => actionSettingsChangeHour({ hour }))
    )
  );

  persistSettings = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          actionSettingsChangeAnimationsElements,
          actionSettingsChangeAnimationsPage,
          actionSettingsChangeAnimationsPageDisabled,
          actionSettingsChangeAutoNightMode,
          actionSettingsChangeLanguage,
          actionSettingsChangeStickyHeader,
          actionSettingsChangeTestApi,
          actionSettingsChangeLevel,
          actionSettingsChangeHighlight,
          actionSettingsChangeTheme
        ),
        withLatestFrom(this.store.pipe(select(selectSettingsState))),
        tap(([action, settings]) =>
          this.localStorageService.setItem(SETTINGS_KEY, settings)
        )
      ),
    { dispatch: false }
  );

  updateBaseUrl = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionSettingsChangeTestApi),
        withLatestFrom(this.store.pipe(select(selectSettingsState))),
        tap(([action, settings]) => {
          if (settings.testApi) {
            this.store.dispatch(
              actionSettingsChangeBaseUrl({ baseUrl: this.testBaseUrl })
            );
          } else {
            this.store.dispatch(
              actionSettingsChangeBaseUrl({ baseUrl: this.defaultBaseUrl })
            );
          }
        })
      ),
    { dispatch: false }
  );

  updateRouteAnimationType = createEffect(
    () =>
      merge(
        INIT,
        this.actions$.pipe(
          ofType(
            actionSettingsChangeAnimationsElements,
            actionSettingsChangeAnimationsPage
          )
        )
      ).pipe(
        withLatestFrom(
          combineLatest([
            this.store.pipe(select(selectPageAnimations)),
            this.store.pipe(select(selectElementsAnimations))
          ])
        ),
        tap(([action, [pageAnimations, elementsAnimations]]) =>
          this.animationsService.updateRouteAnimationType(
            pageAnimations,
            elementsAnimations
          )
        )
      ),
    { dispatch: false }
  );

  updateTheme = createEffect(
    () =>
      merge(INIT, this.actions$.pipe(ofType(actionSettingsChangeTheme))).pipe(
        withLatestFrom(this.store.pipe(select(selectEffectiveTheme))),
        tap(([action, effectiveTheme]) => {
          const classList = this.overlayContainer.getContainerElement()
            .classList;
          const toRemove = Array.from(classList).filter((item: string) =>
            item.includes("-theme")
          );
          if (toRemove.length) {
            classList.remove(...toRemove);
          }
          classList.add(effectiveTheme);
        })
      ),
    { dispatch: false }
  );

  setTranslateServiceLanguage = createEffect(
    () =>
      this.store.pipe(
        select(selectSettingsLanguage),
        distinctUntilChanged(),
        tap(language => this.translateService.use(language))
      ),
    { dispatch: false }
  );
}
