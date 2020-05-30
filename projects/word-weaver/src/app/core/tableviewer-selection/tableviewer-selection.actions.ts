import { createAction, props } from "@ngrx/store";

import { TableviewerTreeDepth } from "./tableviewer-selection.model";

import {
  Option,
  Pronoun,
  Response,
  Verb,
  TableviewerViewModes
} from "../../../config/config";
import {
  GridOrderOptions,
  GridOrder
} from "../../pages/tableviewer/conjugation-grid/conjugation-grid.component";

export const actionChangeConjugations = createAction(
  "[Tableviewer] Change Conjugations",
  props<{ conjugations: Response }>()
);

export const actionChangeVerbs = createAction(
  "[Tableviewer] Change Selected Verbs",
  props<{ root: Verb[] }>()
);

export const actionChangeAgents = createAction(
  "[Tableviewer] Change Selected Agents",
  props<{ agent: Pronoun[] }>()
);

export const actionChangePatients = createAction(
  "[Tableviewer] Change Selected Patients",
  props<{ patient: Pronoun[] }>()
);

export const actionChangeOptions = createAction(
  "[Tableviewer] Change Selected Affix Options",
  props<{ option: Option[] }>()
);

export const actionChangeViewMode = createAction(
  "[Tableviewer] Toggle View Mode",
  props<{ view: TableviewerViewModes }>()
);

export const actionChangeLoading = createAction(
  "[Tableviewer] Toggle Loading",
  props<{ loading: boolean }>()
);

export const actionChangeTreeViewDepth = createAction(
  "[Tableviewer] Change Tree View Depth",
  props<{ treeDepth: TableviewerTreeDepth }>()
);

export const actionToggleTreeViewOrder = createAction(
  "[Tableviewer] Toggle Tree View Order",
  props<{ name: "standardTreeOrder" }>()
);

export const actionChangeGridOrder = createAction(
  "[Tableviewer] Change Grid View Rows and Columns",
  props<{ name: "gridOrder"; partial: Partial<GridOrder> }>()
);

export const actionConjugationEvent = createAction(
  "[Tableviewer] Manual Conjugation Event",
  props<{}>()
);
