import browser from "browser-detect";
import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { marker } from "@biesbjerg/ngx-translate-extract-marker";

import { environment as env } from "../../environments/environment";

import {
  authLogin,
  authLogout,
  routeAnimations,
  specialAnimations,
  LocalStorageService,
  selectIsAuthenticated,
  selectSettingsStickyHeader,
  selectSettingsLanguage,
  selectEffectiveTheme
} from "../core/core.module";
import {
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeLanguage
} from "../core/settings/settings.actions";

@Component({
  selector: "ww-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routeAnimations, specialAnimations]
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require("../../assets/logo.png");
  languages = [
    { label: "en", value: "en" },
    { label: "fr", value: "fr" }
  ];
  navigation = [
    { link: "wordmaker", label: marker("ww.menu.wordmaker") },
    { link: "tableviewer", label: marker("ww.menu.tableviewer") },
    // { link: "info", label: marker("ww.menu.info") },
    { link: "about", label: marker("ww.menu.about") }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: "settings", label: marker("ww.menu.settings") }
  ];

  isAuthenticated$: Observable<boolean>;
  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;
  constructor(
    private store: Store,
    private storageService: LocalStorageService
  ) {}

  private static isIEorEdgeOrSafari() {
    return ["ie", "edge", "safari"].includes(browser().name);
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        actionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

  onLoginClick() {
    this.store.dispatch(authLogin());
  }

  onLogoutClick() {
    this.store.dispatch(authLogout());
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(actionSettingsChangeLanguage({ language }));
  }
}
