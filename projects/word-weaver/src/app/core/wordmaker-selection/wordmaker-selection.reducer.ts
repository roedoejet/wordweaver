import { Action, createReducer, on } from "@ngrx/store";
import {
  actionChangeAgent,
  actionChangeConjugations,
  actionChangeLoading,
  actionChangeOption,
  actionChangePatient,
  actionChangeStep,
  actionChangeVerb,
} from "./wordmaker-selection.actions";
import { WordmakerState } from "./wordmaker-selection.model";

export const initialState: WordmakerState = {
  option: null,
  agent: null,
  patient: null,
  root: null,
  conjugations: [],
  step: 0,
  loading: false,
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

export const wordmakerReducer = (
  state: WordmakerState | undefined,
  action: Action
) => reducer(state, action);
