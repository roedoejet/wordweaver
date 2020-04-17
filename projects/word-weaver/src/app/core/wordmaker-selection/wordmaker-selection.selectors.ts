import { createSelector } from "@ngrx/store";

import { WordmakerState } from "./wordmaker-selection.model";
import { selectWordmakerState } from "../core.state";

export const selectWordmaker = createSelector(
  selectWordmakerState,
  (state: WordmakerState) => state
);
