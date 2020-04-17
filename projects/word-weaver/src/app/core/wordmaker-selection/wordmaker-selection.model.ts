import { AffOption, Pronoun, Verb, Response } from "../../models/models";
import { AppState } from "../core.module";

export interface WordmakerState {
  "aff-option": AffOption;
  agent: Pronoun;
  patient: Pronoun;
  root: Verb;
  step: 0 | 1 | 2 | 3;
  conjugations: Response;
  loading: boolean;
}

export interface State extends AppState {
  wordmaker: WordmakerState;
}
