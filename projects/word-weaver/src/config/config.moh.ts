import { Highlight, Level, Tier, TierOptions, Validation } from "./models";

const _defaultOptions: TierOptions = { language: "L1", showName: false };

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
    key: "value",
    position: 0,
    separator: "",
    options: _defaultOptions
  },
  {
    name: "breakdown",
    key: "value",
    position: 1,
    separator: "-",
    options: _defaultOptions
  }
];

export const VALIDATION: Validation = {
  display: {
    categories: {
      verbs: true,
      options: true,
      agents: true,
      conjugations: true,
      patients: true
    }
  },
  validation: {
    selection: {
      agents: true,
      options: true,
      patients: true,
      verbs: true
    }
  }
};
