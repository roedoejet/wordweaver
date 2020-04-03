import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";

import {
  actionSettingsChangeAnimationsElements,
  actionSettingsChangeAnimationsPage,
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeLanguage,
  actionSettingsChangeGlossLevel,
  actionSettingsChangeBreakdownLevel,
  actionSettingsChangeBreakdownTranslationLevel,
  actionSettingsChangeTranslationLevel,
  actionSettingsChangeAspectHighlight,
  actionSettingsChangePostAspectualSuffixHighlight,
  actionSettingsChangePrepronominalPrefixHighlight,
  actionSettingsChangePronounHighlight,
  actionSettingsChangeRootHighlight,
  actionSettingsChangeTmpAffixHighlight,
  actionSettingsChangeTestApi,
  actionSettingsChangeTheme,
  actionSettingsChangeStickyHeader
} from "../../../core/settings/settings.actions";
import { SettingsState, State } from "../../../core/settings/settings.model";
import { selectSettings } from "../../../core/settings/settings.selectors";

@Component({
  selector: "ww-settings",
  templateUrl: "./settings-container.component.html",
  styleUrls: ["./settings-container.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsContainerComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  settings$: Observable<SettingsState>;

  themes = [
    { value: "DEFAULT-THEME", label: "blue" },
    { value: "LIGHT-THEME", label: "light" },
    { value: "NATURE-THEME", label: "nature" },
    { value: "BLACK-THEME", label: "dark" }
  ];

  languages = [
    { value: "en", label: "en" },
    { value: "fr", label: "fr" }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.settings$ = this.store.pipe(select(selectSettings));
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(actionSettingsChangeLanguage({ language }));
  }

  onGlossLevelSelect({ checked: glossLevel }) {
    this.store.dispatch(actionSettingsChangeGlossLevel({ glossLevel }));
  }

  onBreakdownLevelSelect({ checked: breakdownLevel }) {
    this.store.dispatch(actionSettingsChangeBreakdownLevel({ breakdownLevel }));
  }

  onBreakdownTranslationLevelSelect({ checked: breakdownTranslationLevel }) {
    this.store.dispatch(
      actionSettingsChangeBreakdownTranslationLevel({
        breakdownTranslationLevel
      })
    );
  }

  onTranslationLevelSelect({ checked: translationLevel }) {
    this.store.dispatch(
      actionSettingsChangeTranslationLevel({ translationLevel })
    );
  }

  onRootHighlightSelect({ checked: rootHighlight }) {
    this.store.dispatch(actionSettingsChangeRootHighlight({ rootHighlight }));
  }

  onPronounHighlightSelect({ checked: pronounHighlight }) {
    this.store.dispatch(
      actionSettingsChangePronounHighlight({ pronounHighlight })
    );
  }

  onAspectHighlightSelect({ checked: aspectHighlight }) {
    this.store.dispatch(
      actionSettingsChangeAspectHighlight({ aspectHighlight })
    );
  }

  onPrepronominalPrefixHighlightHighlightSelect({
    checked: prepronominalPrefixHighlight
  }) {
    this.store.dispatch(
      actionSettingsChangePrepronominalPrefixHighlight({
        prepronominalPrefixHighlight
      })
    );
  }

  onTmpAffixHighlightSelect({ checked: tmpAffixHighlight }) {
    this.store.dispatch(
      actionSettingsChangeTmpAffixHighlight({ tmpAffixHighlight })
    );
  }

  onPostAspectualSuffixHighlightSelect({
    checked: postAspectualSuffixHighlight
  }) {
    this.store.dispatch(
      actionSettingsChangePostAspectualSuffixHighlight({
        postAspectualSuffixHighlight
      })
    );
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
}
