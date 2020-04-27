import { ResponseMorpheme } from "../app/models/models";

export interface Highlight {
  root: boolean;
  ending: boolean;
}

// Tier name must be either the display (default) tier, or one of the toggleable levels in the settings
export type TierNames = "display" | keyof Level;

export interface Level {
  breakdown: boolean;
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

export interface Validation {
  display: {
    categories: {
      agents: boolean;
      conjugations: boolean;
      options: boolean;
      patients: boolean;
      verbs: boolean;
    };
  };
  validation: {
    selection: {
      agents: boolean;
      options: boolean;
      patients: boolean;
      verbs: boolean;
    };
  };
}
