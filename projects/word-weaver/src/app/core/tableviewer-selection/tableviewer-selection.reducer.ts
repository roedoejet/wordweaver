import { Action, createReducer, on } from "@ngrx/store";
import { initialTableViewerSettings } from "../../../config/config";
import {
  actionChangeAgents,
  actionChangeConjugations,
  actionChangeGridOrder,
  actionChangeLoading,
  actionChangeOptions,
  actionChangePatients,
  actionChangeTreeViewDepth,
  actionChangeVerbs,
  actionChangeVerbSearchTerm,
  actionChangeViewMode,
  actionToggleTreeViewOrder
} from "./tableviewer-selection.actions";
import { TableviewerState } from "./tableviewer-selection.model";

export const initialBaseState: TableviewerState = {
  option: [],
  agent: [],
  patient: [],
  root: [],
  conjugations: [],
  view: "list",
  treeDepth: 1,
  standardTreeOrder: true,
  loading: false,
  gridOrder: {
    col: "option",
    row: "pn",
    main: "root"
  }
};

export const initialState: TableviewerState = {
  ...initialBaseState,
  ...initialTableViewerSettings
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
    actionChangeVerbSearchTerm,
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
