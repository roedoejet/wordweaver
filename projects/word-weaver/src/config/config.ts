import { marker } from "@biesbjerg/ngx-translate-extract-marker";
import { SettingsState } from "../app/core/settings/settings.model";
import { TableviewerState } from "../app/core/tableviewer-selection/tableviewer-selection.model";
import { Contributor } from "../app/pages/about/about/about.component";

// DTD: Basic data file decriptions: see schema.ts

import {
  Option,
  Pronoun,
  Verb,
  ConjugationInput,
  ConjugationMorphemeNameIndex
} from "./schema";

export {
  Option,
  Pronoun,
  Verb,
  Conjugation,
  ConjugationObject,
  ConjugationMorphemeNameIndex,
  Conjugations
} from "./schema";

// DTD: Advanced

export interface Highlight {
  root: boolean;
  ending: boolean;
}

export interface Level {
  breakdown: boolean;
}

export type AvailableLanguages = "en" | "fr";

export interface OptionalParam {
  param: string;
  value: string;
}

export interface RequestParams {
  root: string[];
  option: string[];
  agent: string[];
  patient: string[];
  optional?: OptionalParam[];
}

// Tier name must be either the display (default) tier, or one of the toggleable levels in the settings
export type TierNames = "display" | keyof Level;

export interface Tier {
  name: TierNames;
  separator: string;
  key: ConjugationMorphemeNameIndex;
  position: number;
  options: TierOptions;
}

export interface TierOptions {
  language: "L1" | "L2";
  showName?: boolean;
}

export interface Condition {
  logic: null | "or" | "and";
  operator?: "eq" | "in" | "truthy";
  method?: "selection";
  method_key?: keyof ConjugationInput;
  item_key?: keyof Option | keyof Pronoun | keyof Verb | null;
  value?: string | string[] | null;
  conditions?: Condition[];
}

export interface Validation {
  display: {
    categories: {
      agents: boolean | Condition[];
      conjugations: boolean | Condition[];
      options: boolean | Condition[];
      patients: boolean | Condition[];
      verbs: boolean | Condition[];
    };
  };
  validation: {
    selection: {
      agents: boolean | Condition[];
      options: boolean | Condition[];
      patients: boolean | Condition[];
      verbs: boolean | Condition[];
    };
  };
}

export interface Link {
  display: boolean;
  url: string;
}

export interface Language {
  label: string;
  value: string;
}

export interface Meta {
  contributors: Contributor[];
  languages: Language[];
  wordmaker: {
    tempView: "default" | TierNames;
  };
  tableviewer: {
    viewModes: TableviewerViewModes[];
  };
  logo: string;
  links: {
    github: Link;
    medium: Link;
    facebook: Link;
    youtube: Link;
  };
  copyright: {
    name: string;
    url: string;
  };
}

export type TableviewerViewModes = "list" | "grid" | "tree";

export const _defaultOptions: TierOptions = { language: "L1", showName: false };

// Instance Configuration (IC)

// IC: Basic

export const CONFIG_NAME: string = "dflt";

export const HIGHLIGHTS: Highlight = {
  root: true,
  ending: true
};

export const LEVELS: Level = {
  breakdown: true
};

export const TIERS: Tier[] = [
  {
    name: "display",
    key: ConjugationMorphemeNameIndex.value,
    position: 0,
    separator: "",
    options: _defaultOptions
  },
  {
    name: "breakdown",
    key: ConjugationMorphemeNameIndex.value,
    position: 1,
    separator: "-",
    options: _defaultOptions
  }
];

export const META: Meta = {
  contributors: [
    {
      name: "Aidan Pine",
      title: "Lead Developer",
      text: "Aidan is an application development specialist on the NRC's Indigenous Language Technology project. Aidan is interested in language revitalization because of its inherently multidisplinary nature and because of the social justice component at the centre of the work. Aidan is humbled and excited to be working with such an accomplished and dynamic team and hopes to continue improving the WordWeaver for years to come.",
      img: false
    }
  ],
  languages: [
    { label: "en", value: "en" },
    { label: "fr", value: "fr" }
  ],
  wordmaker: {
    tempView: "default"
  },
  tableviewer: {
    viewModes: ["list", "grid", "tree"]
  },
  logo: "assets/wwlogo.png",
  copyright: {
    name: "National Research Council Canada",
    url: "https://nrc.canada.ca/en/node/1378"
  },
  links: {
    github: {
      display: true,
      url: "https://www.github.com/roedoejet/wordweaver"
    },
    medium: {
      display: false,
      url: ""
    },
    facebook: {
      display: false,
      url: ""
    },
    youtube: {
      display: false,
      url: ""
    }
  }
};

export const initialSettings: Partial<SettingsState> = {
  language: "en",
  theme: "DEFAULT-THEME",
  autoNightMode: false
};

export const initialTableViewerSettings: Partial<TableviewerState> = {
  view: "grid",
  gridOrder: {
    col: "option",
    row: "pn",
    main: "root"
  }
};

// IC: Advanced

export const VALIDATION: Validation = {
  display: {
    categories: {
      verbs: true,
      options: true,
      agents: true,
      conjugations: true,
      patients: false
    }
  },
  validation: {
    selection: {
      agents: true,
      options: true,
      patients: false,
      verbs: true
    }
  }
};

export type ThemeName =
  | "DEFAULT-THEME"
  | "LIGHT-THEME"
  | "DARK-THEME"
  | "PURPLE-THEME--LIGHT"
  | "PURPLE-THEME--DARK"
  | "PURPLE-BLUE-THEME--LIGHT"
  | "PURPLE-BLUE-THEME--DARK"
  | "PURPLE-GOLD-THEME--LIGHT"
  | "PURPLE-GOLD-THEME--DARK";

export interface Theme {
  value: ThemeName;
  label: string;
}

export const THEMES: Theme[] = [
  {
    value: "DEFAULT-THEME",
    label: marker("ww.pages.settings.themes.default")
  },
  {
    value: "LIGHT-THEME",
    label: marker("ww.pages.settings.themes.light")
  },
  {
    value: "DARK-THEME",
    label: marker("ww.pages.settings.themes.dark")
  },
  {
    value: "PURPLE-THEME--LIGHT",
    label: marker("ww.pages.settings.themes.purple-light")
  },
  {
    value: "PURPLE-THEME--DARK",
    label: marker("ww.pages.settings.themes.purple-dark")
  },
  {
    value: "PURPLE-BLUE-THEME--LIGHT",
    label: marker("ww.pages.settings.themes.purple-blue-light")
  },
  {
    value: "PURPLE-BLUE-THEME--DARK",
    label: marker("ww.pages.settings.themes.purple-blue-dark")
  },
  {
    value: "PURPLE-GOLD-THEME--LIGHT",
    label: marker("ww.pages.settings.themes.purple-gold-light")
  },
  {
    value: "PURPLE-GOLD-THEME--DARK",
    label: marker("ww.pages.settings.themes.purple-gold-dark")
  }
];
