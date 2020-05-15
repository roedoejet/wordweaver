import { AppState } from "../core.module";
import { Highlight, Level } from "../../../config/config";
import { AvailableLanguages } from "../../../config/config";

export const NIGHT_MODE_THEME = "BLACK-THEME";

export interface SettingsState {
  language: AvailableLanguages;
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
