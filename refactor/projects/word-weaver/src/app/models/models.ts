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

export interface RequestParams {
  root: string[];
  "aff-option": string[];
  agent: string[];
  patient: string[];
  optional?: OptionalParam[];
}

export interface ResponseObject {
  position: number;
  value: string;
  tag?: string;
  type?: string;
  agent?: string;
  patient?: string;
}

export interface ResponseValue {
  affixes: ResponseObject;
  pronoun: ResponseObject;
  root: ResponseObject;
  affopt: string;
}

export interface Response {
  values: ResponseValue[];
  tag?: object;
  marker?: string;
  plain_text?: string;
  translation?: string;
}

export interface Conjugation extends Object {
  affixes: Affix[];
  aff_option: AffOption;
  agent: Pronoun | null;
  patient: Pronoun | null;
  verb: Verb;
}
