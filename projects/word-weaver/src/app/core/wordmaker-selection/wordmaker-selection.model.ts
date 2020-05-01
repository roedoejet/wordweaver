import { Option, Pronoun, Verb, Response } from "../../../config/config";
import { AppState } from "../core.module";

export type Step = 0 | 1 | 2 | 3;

export interface WordmakerState {
  option: Option;
  agent: Pronoun;
  patient: Pronoun;
  root: Verb;
  step: Step;
  conjugations: Response;
  loading: boolean;
}

export interface State extends AppState {
  wordmaker: WordmakerState;
}
