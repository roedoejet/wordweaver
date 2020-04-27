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
  actionSettingsChangeHighlight,
  actionSettingsChangeBaseUrl,
  actionSettingsChangeThemeColors
} from "./settings.actions";
import { Action, createReducer, on } from "@ngrx/store";
import { environment } from "../../../environments/environment";

export const initialState: SettingsState = {
  language: "en",
  theme: "DEFAULT-THEME",
  autoNightMode: false,
  nightTheme: NIGHT_MODE_THEME,
  stickyHeader: true,
  pageAnimations: true,
  pageAnimationsDisabled: false,
  elementsAnimations: true,
  baseUrl: environment.base + environment.prefix,
  testApi: false,
  colors: {
    primary: "rgb(255, 255, 255)",
    accent: "rgb(255, 255, 255)"
  },
  level: environment.config.level,
  highlight: environment.config.highlight,
  hour: new Date().getHours()
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
    actionSettingsChangeBaseUrl,
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
  on(actionSettingsChangeThemeColors, (state, action) => {
    return {
      ...state,
      colors: {
        ...state.colors,
        ...{ primary: action.primary, accent: action.accent }
      }
    };
  }),
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
