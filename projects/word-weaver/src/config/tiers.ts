import { Tier, TierOptions } from "../app/models/models";

const _defaultOptions: TierOptions = { language: "L1", showName: false };

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
