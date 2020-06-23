import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, Subject, fromEvent } from "rxjs";
import { META } from "../../../../config/config";

import { marker } from "@biesbjerg/ngx-translate-extract-marker";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";

import {
  actionSettingsChangeAnimationsElements,
  actionSettingsChangeAnimationsPage,
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeLanguage,
  actionSettingsChangeLevel,
  actionSettingsChangeHighlight,
  actionSettingsChangeTestApi,
  actionSettingsChangeTheme,
  actionSettingsChangeStickyHeader
} from "../../../core/settings/settings.actions";
import { SettingsState, State } from "../../../core/settings/settings.model";
import { selectSettings } from "../../../core/settings/settings.selectors";
import { takeUntil, map, take } from "rxjs/operators";

@Component({
  selector: "ww-settings",
  templateUrl: "./settings-container.component.html",
  styleUrls: ["./settings-container.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsContainerComponent implements OnDestroy, OnInit {
  objectkeys = Object.keys;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  settings$: Observable<SettingsState>;
  deferredPrompt$: Observable<any>;
  themes = [
    { value: "DEFAULT-THEME", label: marker("ww.settings.themes.blue") },
    { value: "LIGHT-THEME", label: marker("ww.settings.themes.light") },
    { value: "DARK-THEME", label: marker("ww.settings.themes.dark") },
    {
      value: "PURPLE-THEME--LIGHT",
      label: marker("ww.settings.themes.purple-light")
    },
    {
      value: "PURPLE-THEME--DARK",
      label: marker("ww.settings.themes.purple-dark")
    },
    {
      value: "PURPLE-BLUE-THEME--LIGHT",
      label: marker("ww.settings.themes.purple-blue-light")
    },
    {
      value: "PURPLE-BLUE-THEME--DARK",
      label: marker("ww.settings.themes.purple-blue-dark")
    },
    {
      value: "PURPLE-GOLD-THEME--LIGHT",
      label: marker("ww.settings.themes.purple-gold-light")
    },
    {
      value: "PURPLE-GOLD-THEME--DARK",
      label: marker("ww.settings.themes.purple-gold-dark")
    }
  ];

  languages = META.languages.map(x => {
    return {
      value: x.value,
      label: marker(`ww.settings.general.language.${x.value}`)
    };
  });
  showInstall = false;
  unsubscribe$ = new Subject<void>();
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.settings$ = this.store.pipe(select(selectSettings));
    this.deferredPrompt$ = fromEvent(window, "beforeinstallprompt").pipe(
      takeUntil(this.unsubscribe$),
      map(e => {
        e.preventDefault();
        this.showInstall = true;
        return e;
      })
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(actionSettingsChangeLanguage({ language }));
  }

  onLevelSelect({ checked }, key: string) {
    this.store.dispatch(actionSettingsChangeLevel({ checked, key }));
  }

  onHighlightSelect({ checked }, key: string) {
    this.store.dispatch(actionSettingsChangeHighlight({ checked, key }));
  }

  onTestApiToggle({ checked: testApi }) {
    this.store.dispatch(actionSettingsChangeTestApi({ testApi }));
  }

  onThemeSelect({ value: theme }) {
    this.store.dispatch(actionSettingsChangeTheme({ theme }));
  }

  onAutoNightModeToggle({ checked: autoNightMode }) {
    this.store.dispatch(actionSettingsChangeAutoNightMode({ autoNightMode }));
  }

  onStickyHeaderToggle({ checked: stickyHeader }) {
    this.store.dispatch(actionSettingsChangeStickyHeader({ stickyHeader }));
  }

  onPageAnimationsToggle({ checked: pageAnimations }) {
    this.store.dispatch(actionSettingsChangeAnimationsPage({ pageAnimations }));
  }

  onElementsAnimationsToggle({ checked: elementsAnimations }) {
    this.store.dispatch(
      actionSettingsChangeAnimationsElements({ elementsAnimations })
    );
  }

  a2hs() {
    this.deferredPrompt$.pipe(take(1)).subscribe(e => {
      e.prompt();
      e.userChoice.then(result => {
        if (result.outcome === "accepted") {
          this.showInstall = false;
        }
      });
    });
  }
}
