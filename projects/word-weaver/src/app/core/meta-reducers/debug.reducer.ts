import { ActionReducer } from "@ngrx/store";

import { AppState } from "../core.state";

export const debug =
  (reducer: ActionReducer<AppState>): ActionReducer<AppState> =>
  (state, action) => {
    const newState = reducer(state, action);
    console.log(`[DEBUG] action: ${action.type}`, {
      payload: (action as any).payload,
      oldState: state,
      newState,
    });
    return newState;
  };
