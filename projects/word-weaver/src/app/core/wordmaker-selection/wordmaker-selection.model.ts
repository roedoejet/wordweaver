import { Option, Pronoun, Conjugations, Verb } from "../../../config/config";
import { AppState } from "../core.module";

export type Step = 0 | 1 | 2 | 3;

export interface WordmakerState {
  option: Option;
  agent: Pronoun;
  patient: Pronoun;
  root: Verb;
  step: Step;
  conjugations: Conjugations;
  loading: boolean;
}

export interface State extends AppState {
  wordmaker: WordmakerState;
}
