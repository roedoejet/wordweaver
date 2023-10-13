import { marker } from "@biesbjerg/ngx-translate-extract-marker";
import { SettingsState } from "../app/core/settings/settings.model";
import { TableviewerState } from "../app/core/tableviewer-selection/tableviewer-selection.model";
import { Contributor } from "../app/pages/about/about/about.component";

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

export type ConjugationMorpheme = [
  position: number,
  value: string,
  gloss: string,
  english: string,
  type: string[]
];

export enum ConjugationMorphemeNameIndex {
  position = 0,
  value = 1,
  gloss = 2,
  english = 3,
  type = 4
}

export type Conjugation = ConjugationMorpheme[];

export interface ConjugationObject {
  input: ConjugationInput;
  output: Conjugation;
}

export type Conjugations = ConjugationObject[];

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

const _defaultOptions: TierOptions = { language: "L1", showName: false };

export const CONFIG_NAME: string = "moh";

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
    key: ConjugationMorphemeNameIndex.value,
    options: {
      language: "L1",
      showName: false
    }
  },
  {
    name: "breakdown",
    separator: "-",
    position: 1,
    key: ConjugationMorphemeNameIndex.value,
    options: {
      language: "L1",
      showName: false
    }
  },
  {
    name: "gloss",
    separator: "-",
    position: 2,
    key: ConjugationMorphemeNameIndex.gloss,
    options: {
      language: "L1",
      showName: false
    }
  },
  {
    name: "translation",
    separator: "",
    position: 4,
    key: ConjugationMorphemeNameIndex.english,
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

export type AvailableLanguages = "en" | "fr" | "moh";

export const META: Meta = {
  contributors: [
    {
      name: "Owennatekha Brian Maracle",
      title: "Founder, Onkwawenna Kentyohkwa",
      text: "Brian Maracle (Owennatekha, Turtle Clan, Mohawk) is the founder of, head of, and teacher at, the Onkwawenna Kentyohkwa Kanyen'kéha immersion school on the Six Nations Reserve near Brantford, Ontario. Brian has been a language activist for nearly 25 years and has developed, published materials and taught adults and children. He is a passionate advocate for the preservation of Kanyen'kéha.",
      img: "assets/bm.png"
    },
    {
      name: "Ryan DeCaire",
      title: "",
      text: "Ryan DeCaire is Kanien'kehá:ka (Mohawk) and was born and raised in Wáhta Mohawk Territory, Ontario. He is an Assistant Professor in the Department of Linguistics and Centre for Indigenous Studies at the University of Toronto, a Phd Student in the Hawaiian and Indigenous Language and Culture Revitalization Program at the University of Hawaii at Hilo, as well as an immersion instructor and curriculum developer at Onkwawén:na Kentyóhkwa. In addition to his work in adult immersion teaching, Ryan is also focussed on Kanien’kéha documentation and Iroquoian morphology.",
      img: "assets/rd.png"
    },
    {
      name: "Anna Kazantseva",
      title: "Lead Researcher (NRC)",
      text: "Anna is a Computational Linguist passionate about applying natural language processing techniques to reclamation of the Indigenous languages in Canada. Her past work was on text processing of stories and novels, but currently her main interest is Iroquoian languages.",
      img: "assets/ak.png"
    },
    {
      name: "Aidan Pine",
      title: "Lead Developer (NRC)",
      text: "Aidan is an application development specialist on the NRC's Indigenous Language Technology project. Aidan is interested in language revitalization because of its inherently multidisplinary nature and because of the social justice component at the centre of the work. Aidan is humbled and excited to be working with such an accomplished and dynamic team and hopes to continue improving the Kawennón:nis for years to come.",
      img: "assets/ap.png"
    }
  ],
  languages: [
    { label: "en", value: "en" },
    { label: "ka", value: "moh" }
  ],
  wordmaker: {
    tempView: "translation"
  },
  tableviewer: {
    viewModes: ["list", "grid", "tree"]
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
  theme: "PURPLE-THEME--LIGHT",
  autoNightMode: true
};

export const initialTableViewerSettings: Partial<TableviewerState> = {
  view: "list",
  gridOrder: {
    col: "option",
    row: "pn",
    main: "root"
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
  { value: "DEFAULT-THEME", label: marker("ww.pages.settings.themes.default") },
  { value: "LIGHT-THEME", label: marker("ww.pages.settings.themes.light") },
  { value: "DARK-THEME", label: marker("ww.pages.settings.themes.dark") },
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
