import { createSelector } from "@ngrx/store";
import { selectTableviewerState } from "../core.state";
import { TableviewerState } from "./tableviewer-selection.model";

// Raw Feature Selectors

export const selectTableviewer = createSelector(
  selectTableviewerState,
  (state: TableviewerState) => state
);

export const selectTableViewerConjugations = createSelector(
  selectTableviewerState,
  (state: TableviewerState) => state.conjugations
);

export const selectTableViewerGridOrder = createSelector(
  selectTableviewerState,
  (state: TableviewerState) => state.gridOrder
);

export const selectTableViewerView = createSelector(
  selectTableviewerState,
  (state: TableviewerState) => state.view
);

export const selectTableViewerAgent = createSelector(
  selectTableviewerState,
  (state: TableviewerState) => state.agent
);

export const selectTableViewerOption = createSelector(
  selectTableviewerState,
  (state: TableviewerState) => state.option
);

export const selectTableViewerRoot = createSelector(
  selectTableviewerState,
  (state: TableviewerState) => state.root
);

export const selectTableViewerPatient = createSelector(
  selectTableviewerState,
  (state: TableviewerState) => state.patient
);

export const selectTableViewerTreeDepth = createSelector(
  selectTableviewerState,
  (state: TableviewerState) => state.treeDepth
);

export const selectTableViewerTreeOrder = createSelector(
  selectTableviewerState,
  (state: TableviewerState) => state.standardTreeOrder
);

export const selectTableViewerLoading = createSelector(
  selectTableviewerState,
  (state: TableviewerState) => state.loading
);

// Composed Selectors

export const selectTableviewerGridSlice = createSelector(
  selectTableViewerConjugations,
  selectTableViewerGridOrder,
  selectTableViewerView,
  (conjugations, gridOrder, view) => ({ conjugations, gridOrder, view })
);

export const selectTableviewerListSlice = createSelector(
  selectTableViewerConjugations,
  selectTableViewerView,
  (conjugations, view) => ({ conjugations, view })
);

export const selectTableviewerTreeSlice = createSelector(
  selectTableViewerConjugations,
  selectTableViewerView,
  selectTableViewerTreeDepth,
  selectTableViewerTreeOrder,
  (conjugations, view, treeDepth, standardTreeOrder) => ({
    conjugations,
    view,
    treeDepth,
    standardTreeOrder
  })
);

export const selectTableviewerPronouns = createSelector(
  selectTableViewerAgent,
  selectTableViewerPatient,
  (agent, patient) => ({ agent, patient })
);
