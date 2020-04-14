import { AffOption, Pronoun, Verb } from "../../models/models";
import { AppState } from "../core.module";

export interface TableviewerState {
  "aff-option": AffOption[];
  agent: Pronoun[];
  patient: Pronoun[];
  root: Verb[];
}

export interface State extends AppState {
  tableviewer: TableviewerState;
}
