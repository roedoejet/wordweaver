import { createAction, props } from "@ngrx/store";

import { TableviewerTreeDepth } from "./tableviewer-selection.model";

import { AffOption, Pronoun, Response, Verb } from "../../models/models";

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

export const actionChangeAffOptions = createAction(
  "[Tableviewer] Change Selected Affix Options",
  props<{ "aff-option": AffOption[] }>()
);

export const actionToggleGridView = createAction(
  "[Tableviewer] Toggle Grid View",
  props<{ name: "gridView" }>()
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

export const actionConjugationEvent = createAction(
  "[Tableviewer] Manual Conjugation Event",
  props<{}>()
);
