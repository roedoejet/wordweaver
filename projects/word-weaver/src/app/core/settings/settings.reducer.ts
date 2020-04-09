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
  actionSettingsChangeLevel,
  actionSettingsChangeHighlight
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
  level: {
    gloss: false,
    breakdown: false,
    "translation-breakdown": false,
    translation: true
  },
  highlight: {
    root: false,
    pronoun: true,
    aspect: false,
    post_aspectual_suffix: false,
    prepronominal_prefix: false,
    tmp_affix: false
  },
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
    (state, action) => ({ ...state, ...action })
  ),
  on(
    actionSettingsChangeAnimationsPageDisabled,
    (state, { pageAnimationsDisabled }) => ({
      ...state,
      pageAnimationsDisabled,
      pageAnimations: false
    })
  ),
  on(actionSettingsChangeHighlight, (state, action) => {
    const newNestedState = {};
    newNestedState[action.key] = action.checked;
    return {
      ...state,
      highlight: { ...state.highlight, ...newNestedState }
    };
  }),
  on(actionSettingsChangeLevel, (state, action) => {
    const newNestedState = {};
    newNestedState[action.key] = action.checked;
    return {
      ...state,
      level: { ...state.level, ...newNestedState }
    };
  })
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
