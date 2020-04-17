import { Level } from "../core/settings/settings.model";

export interface Affix {
  gloss: string;
  morphemes: { value: string; position: Number }[];
  tag: string;
  type:
    | "aspect"
    | "prepronominal_prefix"
    | "derivational_suffix"
    | "post_aspectual_suffix"
    | "tmp_affix";
}

export interface AffOption {
  affixes: Affix[];
  gloss: string;
  tag: string;
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
  required_affixes: Affix[];
  display: string;
  tag: string;
  thematic_relation: string;
  position?: Number;
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

// Tier name must be either the display (default) tier, or one of the toggleable levels in the settings
export type TierNames = "display" | keyof Level;

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
  },
  {
    name: "gloss",
    key: "gloss",
    position: 2,
    separator: "-",
    options: _defaultOptions
  },
  {
    name: "translation",
    key: "english",
    position: 3,
    separator: "",
    options: { language: "L2", showName: false }
  }
];

export type Conjugation = ResponseMorpheme[];

export interface ResponseObject {
  input: ConjugationInput;
  output: Conjugation;
}

export type Response = ResponseObject[];
