import {
  AvailableLanguages,
  Highlight,
  Level,
  ThemeName,
} from "../../../config/config";
import { AppState } from "../core.module";

export const NIGHT_MODE_THEME: ThemeName = "DARK-THEME";

export interface SettingsState {
  analytics: boolean;
  language: AvailableLanguages;
  theme: ThemeName;
  autoNightMode: boolean;
  nightTheme: ThemeName;
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
