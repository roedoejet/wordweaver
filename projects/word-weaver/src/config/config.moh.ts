import { SettingsState } from "../app/core/settings/settings.model";
import { GridOrder } from "../app/pages/tableviewer/conjugation-grid/conjugation-grid.component";

export interface Option {
  classes: string[];
  gloss: string;
  tag: string;
  type?: string;
}

export interface Pronoun {
  gender: "M" | "F" | "FZ" | "N" | "";
  gloss: string;
  inclusivity: "incl" | "excl" | "";
  number: "SG" | "DL" | "PL";
  role: "agent" | "patient" | "";
  obj_gloss: string;
  person: "1" | "2" | "3";
  value: string;
  position?: Number;
  tag: string;
}

export interface Verb {
  gloss: string;
  display: string;
  thematic_relation: "red" | "blue" | "purple";
  tag: string;
  classes: string[];
}

export interface OptionalParam {
  param: string;
  value: string;
}

export interface ConjugationInput {
  root: string;
  option: string;
  agent: string;
  patient: string;
}

export interface RequestParams {
  root: string[];
  option: string[];
  agent: string[];
  patient: string[];
  optional?: OptionalParam[];
}

export interface ResponseMorpheme {
  position: number;
  value: string;
  gloss: string;
  english: string;
  type: string[];
}

export type Conjugation = ResponseMorpheme[];

export interface ResponseObject {
  input: ConjugationInput;
  output: Conjugation;
}

export type Response = ResponseObject[];

export interface Highlight {
  aspect: boolean;
  "post-aspectual": boolean;
  pronouns: boolean;
  required: boolean;
  temp: boolean;
  verb: boolean;
}

// Tier name must be either the display (default) tier, or one of the toggleable levels in the settings
export type TierNames = "display" | keyof Level;

export interface Level {
  breakdown: boolean;
  gloss: boolean;
  translation: boolean;
}

export interface Tier {
  name: TierNames;
  separator: string;
  key: keyof ResponseMorpheme;
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

const _defaultOptions: TierOptions = { language: "L1", showName: false };

export const HIGHLIGHTS: Highlight = {
  aspect: false,
  "post-aspectual": false,
  pronouns: true,
  required: false,
  temp: false,
  verb: true
};

export const LEVELS: Level = {
  breakdown: true,
  gloss: true,
  translation: true
};

export const TIERS: Tier[] = [
  {
    name: "display",
    separator: "",
    position: 0,
    key: "value",
    options: {
      language: "L1",
      showName: false
    }
  },
  {
    name: "breakdown",
    separator: "-",
    position: 1,
    key: "value",
    options: {
      language: "L1",
      showName: false
    }
  },
  {
    name: "gloss",
    separator: "-",
    position: 2,
    key: "gloss",
    options: {
      language: "L1",
      showName: false
    }
  },
  {
    name: "translation",
    separator: "",
    position: 4,
    key: "english",
    options: {
      language: "L2",
      showName: false
    }
  }
];

export const VALIDATION: Validation = {
  display: {
    categories: {
      verbs: true,
      options: true,
      agents: [
        {
          logic: null,
          operator: "in",
          method: "selection",
          method_key: "root",
          item_key: "thematic_relation",
          value: ["red", "purple"]
        }
      ],
      conjugations: true,
      patients: [
        {
          logic: null,
          operator: "in",
          method: "selection",
          method_key: "root",
          item_key: "thematic_relation",
          value: ["blue", "purple"]
        }
      ]
    }
  },
  validation: {
    selection: {
      agents: [
        {
          logic: "or",
          conditions: [
            {
              logic: "and",
              conditions: [
                {
                  logic: null,
                  operator: "eq",
                  method: "selection",
                  method_key: "root",
                  item_key: "thematic_relation",
                  value: "red"
                },
                {
                  logic: null,
                  operator: "truthy",
                  method: "selection",
                  method_key: "agent",
                  item_key: null,
                  value: null
                }
              ]
            },
            {
              logic: "and",
              conditions: [
                {
                  logic: null,
                  operator: "eq",
                  method: "selection",
                  method_key: "root",
                  item_key: "thematic_relation",
                  value: "purple"
                },
                {
                  logic: null,
                  operator: "truthy",
                  method: "selection",
                  method_key: "patient",
                  item_key: null,
                  value: null
                }
              ]
            }
          ]
        }
      ],
      options: true,
      patients: [
        {
          logic: "or",
          conditions: [
            {
              logic: "and",
              conditions: [
                {
                  logic: null,
                  operator: "eq",
                  method: "selection",
                  method_key: "root",
                  item_key: "thematic_relation",
                  value: "blue"
                },
                {
                  logic: null,
                  operator: "truthy",
                  method: "selection",
                  method_key: "patient",
                  item_key: null,
                  value: null
                }
              ]
            },
            {
              logic: "and",
              conditions: [
                {
                  logic: null,
                  operator: "eq",
                  method: "selection",
                  method_key: "root",
                  item_key: "thematic_relation",
                  value: "purple"
                },
                {
                  logic: null,
                  operator: "truthy",
                  method: "selection",
                  method_key: "agent",
                  item_key: null,
                  value: null
                }
              ]
            }
          ]
        }
      ],
      verbs: true
    }
  }
};

export interface Link {
  display: boolean;
  url: string;
}

export interface Language {
  label: string;
  value: string;
}

export type TableviewerViewModes = "list" | "grid" | "tree";

export interface Meta {
  languages: Language[];
  wordmakerTempView: "default" | TierNames;
  tableviewer: {
    viewModes: TableviewerViewModes[];
    defaultViewMode: TableviewerViewModes;
    gridViewDefaultOrder: GridOrder;
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

export type AvailableLanguages = "en" | "fr" | "moh";

export const META: Meta = {
  languages: [
    { label: "en", value: "en" },
    { label: "fr", value: "fr" },
    { label: "ka", value: "moh" }
  ],
  wordmakerTempView: "translation",
  tableviewer: {
    viewModes: ["list", "grid", "tree"],
    defaultViewMode: "grid",
    gridViewDefaultOrder: {
      col: "option",
      row: "pn",
      main: "root"
    }
  },
  logo: "assets/wwlogo.png",
  copyright: {
    name: "Onkwawenna Kentyohkwa",
    url: "https://onkwawenna.info"
  },
  links: {
    github: {
      display: true,
      url: "https://www.github.com/roedoejet/wordweaver-UI"
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
      display: true,
      url: "https://www.youtube.com/channel/UCuRlpf5bo0pxlQKy9Pnn9oA"
    }
  }
};

export const initialSettings: Partial<SettingsState> = {
  language: "en",
  theme: "PURPLE-LIGHT-THEME",
  autoNightMode: true
};
