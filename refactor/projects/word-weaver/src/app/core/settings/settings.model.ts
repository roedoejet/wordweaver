import { AppState } from "../core.module";

export const NIGHT_MODE_THEME = "BLACK-THEME";

export type Language = "en" | "fr";

// TODO: convert store to objects
// export interface Level {
//   'gloss': boolean,
//   'breakdown': boolean,
//   'translation-breakdown': boolean,
//   'translation': boolean,
// }

// export interface Highlight {
//   'root': boolean,
//   'pronoun': boolean,
//   'aspect': boolean,
//   'prepronominal_prefix': boolean,
//   'tmp_affix': boolean,
//   'post_aspectual_suffix': boolean
// }

export interface SettingsState {
  language: Language;
  theme: string;
  autoNightMode: boolean;
  nightTheme: string;
  stickyHeader: boolean;
  pageAnimations: boolean;
  pageAnimationsDisabled: boolean;
  elementsAnimations: boolean;
  testApi: boolean;
  glossLevel: boolean;
  breakdownLevel: boolean;
  translationBreakdownLevel: boolean;
  translationLevel: boolean;
  rootHighlight: boolean;
  pronounHighlight: boolean;
  aspectHighlight: boolean;
  prepronominalPrefix: boolean;
  tmpAffix: boolean;
  postAspectualSuffix: boolean;
  hour: number;
}

export interface State extends AppState {
  settings: SettingsState;
}
