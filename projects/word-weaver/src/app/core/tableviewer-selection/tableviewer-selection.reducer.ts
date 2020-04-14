import {
  actionChangeAgents,
  actionChangeAffOptions,
  actionChangePatients,
  actionChangeVerbs
} from "./tableviewer-selection.actions";
import { Action, createReducer, on, ActionReducer } from "@ngrx/store";
import { TableviewerState } from "./tableviewer-selection.model";

export const initialState: TableviewerState = {
  "aff-option": [],
  agent: [],
  patient: [],
  root: []
};

const reducer = createReducer(
  initialState,
  on(
    actionChangeAgents,
    actionChangeAffOptions,
    actionChangePatients,
    actionChangeVerbs,
    (state, action) => ({ ...state, ...action })
  )
);

export function tableviewerReducer(
  state: TableviewerState | undefined,
  action: Action
) {
  return reducer(state, action);
}
