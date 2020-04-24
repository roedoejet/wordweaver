import {
  actionChangeAgent,
  actionChangeOption,
  actionChangePatient,
  actionChangeVerb,
  actionChangeConjugations,
  actionChangeLoading,
  actionChangeStep
} from "./wordmaker-selection.actions";
import { Action, createReducer, on, ActionReducer } from "@ngrx/store";
import { WordmakerState } from "./wordmaker-selection.model";

export const initialState: WordmakerState = {
  option: null,
  agent: null,
  patient: null,
  root: null,
  conjugations: [],
  step: 0,
  loading: false
};

const reducer = createReducer(
  initialState,
  // Basic updates
  on(
    actionChangeAgent,
    actionChangeOption,
    actionChangePatient,
    actionChangeVerb,
    actionChangeConjugations,
    actionChangeLoading,
    actionChangeStep,
    (state, action) => ({ ...state, ...action })
  )
);

export function wordmakerReducer(
  state: WordmakerState | undefined,
  action: Action
) {
  return reducer(state, action);
}
