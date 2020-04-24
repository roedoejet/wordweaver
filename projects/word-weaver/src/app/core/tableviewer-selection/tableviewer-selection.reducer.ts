import {
  actionChangeAgents,
  actionChangeOptions,
  actionChangePatients,
  actionChangeVerbs,
  actionToggleTreeViewOrder,
  actionChangeTreeViewDepth,
  actionToggleGridView,
  actionChangeConjugations,
  actionChangeLoading
} from "./tableviewer-selection.actions";
import { Action, createReducer, on, ActionReducer } from "@ngrx/store";
import { TableviewerState } from "./tableviewer-selection.model";

export const initialState: TableviewerState = {
  option: [],
  agent: [],
  patient: [],
  root: [],
  conjugations: [],
  gridView: true,
  treeDepth: 1,
  standardTreeOrder: true,
  loading: false
};

const reducer = createReducer(
  initialState,
  // Basic updates
  on(
    actionChangeAgents,
    actionChangeOptions,
    actionChangePatients,
    actionChangeVerbs,
    actionChangeTreeViewDepth,
    actionChangeConjugations,
    actionChangeLoading,
    (state, action) => ({ ...state, ...action })
  ),
  // Toggles
  on(actionToggleTreeViewOrder, actionToggleGridView, (state, action) => {
    const toggledState = {};
    toggledState[action.name] = !state[action.name];
    return { ...state, ...toggledState };
  })
);

export function tableviewerReducer(
  state: TableviewerState | undefined,
  action: Action
) {
  return reducer(state, action);
}
