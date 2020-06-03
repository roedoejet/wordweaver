import { createSelector } from "@ngrx/store";

import { WordmakerState } from "./wordmaker-selection.model";
import { selectWordmakerState } from "../core.state";

// Raw Feature Selectors

export const selectWordmaker = createSelector(
  selectWordmakerState,
  (state: WordmakerState) => state
);

export const selectWordmakerOption = createSelector(
  selectWordmakerState,
  (state: WordmakerState) => state.option
);

export const selectWordmakerAgent = createSelector(
  selectWordmakerState,
  (state: WordmakerState) => state.agent
);

export const selectWordmakerPatient = createSelector(
  selectWordmakerState,
  (state: WordmakerState) => state.patient
);

export const selectWordmakerRoot = createSelector(
  selectWordmakerState,
  (state: WordmakerState) => state.root
);

export const selectWordmakerStep = createSelector(
  selectWordmakerState,
  (state: WordmakerState) => state.step
);

export const selectWordmakerConjugations = createSelector(
  selectWordmakerState,
  (state: WordmakerState) => state.conjugations
);

export const selectWordmakerLoading = createSelector(
  selectWordmakerState,
  (state: WordmakerState) => state.loading
);

// Composed Selectors

export const selectWordmakerPronouns = createSelector(
  selectWordmakerAgent,
  selectWordmakerPatient,
  (agent, patient) => ({ agent, patient })
);
