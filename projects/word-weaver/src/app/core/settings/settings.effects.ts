import { OverlayContainer } from "@angular/cdk/overlay";
import { Injectable } from "@angular/core";
import { marker } from "@colsen1991/ngx-translate-extract-marker";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { combineLatest, interval, merge, of } from "rxjs";
import {
  distinctUntilChanged,
  map,
  mapTo,
  tap,
  withLatestFrom,
} from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { AnimationsService } from "../animations/animations.service";
import { selectSettingsState } from "../core.state";
import { LocalStorageService } from "../local-storage/local-storage.service";
import {
  actionSettingsChangeAnalytics,
  actionSettingsChangeAnimationsElements,
  actionSettingsChangeAnimationsPage,
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeBaseUrl,
  actionSettingsChangeHighlight,
  actionSettingsChangeHour,
  actionSettingsChangeLanguage,
  actionSettingsChangeLevel,
  actionSettingsChangeStickyHeader,
  actionSettingsChangeTestApi,
  actionSettingsChangeTheme,
} from "./settings.actions";
import { State } from "./settings.model";
import {
  selectEffectiveTheme,
  selectElementsAnimations,
  selectPageAnimations,
  selectSettingsAnalytics,
  selectSettingsLanguage,
} from "./settings.selectors";
import { NotificationService } from "../core.module";

export const SETTINGS_KEY = "SETTINGS";

const INIT = of("ww-init-effect-trigger");

@Injectable()
export class SettingsEffects {
  defaultBaseUrl = environment.base + environment.dataPrefix;
  testBaseUrl = environment.base + environment.dataTestPrefix;
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private overlayContainer: OverlayContainer,
    private localStorageService: LocalStorageService,
    private animationsService: AnimationsService,
    private translateService: TranslateService,
    private notificationService: NotificationService
  ) {}

  changeHour = createEffect(() =>
    merge(
      interval(60_000),
      this.actions$.pipe(ofType(actionSettingsChangeAutoNightMode))
    ).pipe(
      mapTo(new Date().getHours()),
      distinctUntilChanged(),
      map((hour) => actionSettingsChangeHour({ hour }))
    )
  );

  changeAnalytics = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionSettingsChangeAnalytics),
        withLatestFrom(this.store.pipe(select(selectSettingsAnalytics))),
        tap(([action, usesAnalytics]) => {
          if (usesAnalytics) {
            // Change to opt-in
            this.localStorageService.removeItem("plausible_ignore");
            this.notificationService.translated(
              marker("ww.pages.settings.notifications.analytics.opt-in"),
              {},
              "success"
            );
          } else {
            // Change to opt-out
            this.localStorageService.setItem("plausible_ignore", "true");
            this.notificationService.translated(
              marker("ww.pages.settings.notifications.analytics.opt-out"),
              {},
              "error"
            );
          }
        })
      ),
    { dispatch: false }
  );

  persistSettings = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          actionSettingsChangeAnalytics,
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
            this.store.pipe(select(selectElementsAnimations)),
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
          const classList =
            this.overlayContainer.getContainerElement().classList;
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
        tap((language) => this.translateService.use(language))
      ),
    { dispatch: false }
  );
}
