import {
  actionChangeAgents,
  actionChangeOptions,
  actionChangePatients,
  actionChangeVerbs,
  actionToggleTreeViewOrder,
  actionChangeTreeViewDepth,
  actionChangeViewMode,
  actionChangeConjugations,
  actionChangeLoading
} from "./tableviewer-selection.actions";
import { Action, createReducer, on, ActionReducer } from "@ngrx/store";
import { TableviewerState } from "./tableviewer-selection.model";
import { META } from "../../../config/config";

export const initialState: TableviewerState = {
  option: [],
  agent: [],
  patient: [],
  root: [],
  conjugations: [],
  view: META.tableviewer.defaultViewMode,
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
    actionChangeViewMode,
    (state, action) => ({ ...state, ...action })
  ),
  // Toggles
  on(actionToggleTreeViewOrder, (state, action) => {
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
