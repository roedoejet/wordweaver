import { AppState } from "../core.module";

export const NIGHT_MODE_THEME = "BLACK-THEME";

export type Language = "en" | "fr";

export interface Level {
  gloss: boolean;
  breakdown: boolean;
  "translation-breakdown": boolean;
  translation: boolean;
}

export interface Highlight {
  root: boolean;
  pronoun: boolean;
  aspect: boolean;
  prepronominal_prefix: boolean;
  tmp_affix: boolean;
  post_aspectual_suffix: boolean;
}

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
  level: Level;
  highlight: Highlight;
  hour: number;
  baseUrl: string;
  colors: {
    primary: string;
    accent: string;
  };
}

export interface State extends AppState {
  settings: SettingsState;
}
