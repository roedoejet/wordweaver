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

export interface Option {
  classes: Affix[];
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
  display: string;
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

export type Conjugation = ResponseMorpheme[];

export interface ResponseObject {
  input: ConjugationInput;
  output: Conjugation;
}

export type Response = ResponseObject[];

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
