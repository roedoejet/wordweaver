import { AffOption, Pronoun, Verb, Response } from "../../models/models";
import { AppState } from "../core.module";

export type Step = 0 | 1 | 2 | 3;

export interface WordmakerState {
  option: AffOption;
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
