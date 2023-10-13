// while config.ts holds the software configuration for the word-weaver
// conjugation application, this file, schema.ts, holds the type declarations
// for the data only, i.e., for conjugations.json, options.json, pronouns.json
// and verbs.json.

// Data Type Definitions (DTD)

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

export interface ConjugationInput {
  root: string;
  option: string;
  agent: string;
  patient: string;
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
