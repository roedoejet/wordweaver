import { createSelector } from "@ngrx/store";

import { TableviewerState } from "./tableviewer-selection.model";
import { selectTableviewerState } from "../core.state";

export const selectTableviewer = createSelector(
  selectTableviewerState,
  (state: TableviewerState) => state
);
