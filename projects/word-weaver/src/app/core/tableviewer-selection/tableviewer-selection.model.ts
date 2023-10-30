import {
  Option,
  Pronoun,
  Conjugations,
  TableviewerViewModes,
  Verb,
} from "../../../config/config";
import { GridOrder } from "../../pages/tableviewer/conjugation-grid/conjugation-grid.component";
import { AppState } from "../core.module";

export interface TableviewerState {
  option: Option[];
  agent: Pronoun[];
  patient: Pronoun[];
  root: Verb[];
  view: TableviewerViewModes;
  treeDepth: TableviewerTreeDepth;
  standardTreeOrder: boolean;
  conjugations: Conjugations;
  loading: boolean;
  gridOrder: GridOrder;
}

export interface State extends AppState {
  tableviewer: TableviewerState;
}

export type TableviewerTreeDepth = 0 | 1 | 2 | 3;
