import {
  actionChangeAgent,
  actionChangeAffOption,
  actionChangePatient,
  actionChangeVerb,
  actionChangeConjugation,
  actionChangeLoading
} from "./wordmaker-selection.actions";
import { Action, createReducer, on, ActionReducer } from "@ngrx/store";
import { WordmakerState } from "./wordmaker-selection.model";

export const initialState: WordmakerState = {
  "aff-option": null,
  agent: null,
  patient: null,
  root: null,
  conjugations: null,
  step: 0,
  loading: false
};

const reducer = createReducer(
  initialState,
  // Basic updates
  on(
    actionChangeAgent,
    actionChangeAffOption,
    actionChangePatient,
    actionChangeVerb,
    actionChangeConjugation,
    actionChangeLoading,
    (state, action) => ({ ...state, ...action })
  )
);

export function wordmakerReducer(
  state: WordmakerState | undefined,
  action: Action
) {
  return reducer(state, action);
}
