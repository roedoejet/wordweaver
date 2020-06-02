import {
  actionChangeAgents,
  actionChangeOptions,
  actionChangePatients,
  actionChangeVerbs,
  actionToggleTreeViewOrder,
  actionChangeGridOrder,
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
  loading: false,
  gridOrder: META.tableviewer.gridViewDefaultOrder
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
    // actionChangeGridOrder,
    (state, action) => ({ ...state, ...action })
  ),
  // Toggles
  on(actionToggleTreeViewOrder, (state, action) => {
    const toggledState = {};
    toggledState[action.name] = !state[action.name];
    return { ...state, ...toggledState };
  }),
  // Partials
  on(actionChangeGridOrder, (state, action) => {
    const partialState = { ...state[action.name], ...action.partial };
    const actionState = {};
    actionState[action.name] = partialState;
    return { ...state, ...actionState };
  })
);

export function tableviewerReducer(
  state: TableviewerState | undefined,
  action: Action
) {
  return reducer(state, action);
}
