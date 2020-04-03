import { SettingsState, NIGHT_MODE_THEME } from "./settings.model";
import {
  actionSettingsChangeAnimationsElements,
  actionSettingsChangeAnimationsPage,
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeHour,
  actionSettingsChangeLanguage,
  actionSettingsChangeStickyHeader,
  actionSettingsChangeTestApi,
  actionSettingsChangeTheme,
  actionSettingsChangeGlossLevel,
  actionSettingsChangeBreakdownLevel,
  actionSettingsChangeBreakdownTranslationLevel,
  actionSettingsChangeTranslationLevel,
  actionSettingsChangeAspectHighlight,
  actionSettingsChangePostAspectualSuffixHighlight,
  actionSettingsChangePrepronominalPrefixHighlight,
  actionSettingsChangePronounHighlight,
  actionSettingsChangeRootHighlight,
  actionSettingsChangeTmpAffixHighlight
} from "./settings.actions";
import { Action, createReducer, on } from "@ngrx/store";

export const initialState: SettingsState = {
  language: "en",
  theme: "DEFAULT-THEME",
  autoNightMode: false,
  nightTheme: NIGHT_MODE_THEME,
  stickyHeader: true,
  pageAnimations: true,
  pageAnimationsDisabled: false,
  elementsAnimations: true,
  testApi: false,
  glossLevel: false,
  breakdownLevel: false,
  translationBreakdownLevel: false,
  translationLevel: true,
  rootHighlight: false,
  pronounHighlight: true,
  aspectHighlight: false,
  postAspectualSuffix: false,
  prepronominalPrefix: false,
  tmpAffix: false,
  hour: 0
};

const reducer = createReducer(
  initialState,
  on(
    actionSettingsChangeLanguage,
    actionSettingsChangeTheme,
    actionSettingsChangeAutoNightMode,
    actionSettingsChangeTestApi,
    actionSettingsChangeStickyHeader,
    actionSettingsChangeAnimationsPage,
    actionSettingsChangeAnimationsElements,
    actionSettingsChangeHour,
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
    (state, action) => ({ ...state, ...action })
  ),
  on(
    actionSettingsChangeAnimationsPageDisabled,
    (state, { pageAnimationsDisabled }) => ({
      ...state,
      pageAnimationsDisabled,
      pageAnimations: false
    })
  )
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
