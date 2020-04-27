export interface Option {
  classes: string[];
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

export type Conjugation = ResponseMorpheme[];

export interface ResponseObject {
  input: ConjugationInput;
  output: Conjugation;
}

export type Response = ResponseObject[];
