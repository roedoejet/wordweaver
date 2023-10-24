import { AuthState } from "./auth.models";
import { authLogin, authLogout } from "./auth.actions";
import { createReducer, on, Action } from "@ngrx/store";

export const initialState: AuthState = {
  isAuthenticated: false
};

const reducer = createReducer(
  initialState,
  on(authLogin, (state) => ({ ...state, isAuthenticated: true })),
  on(authLogout, (state) => ({ ...state, isAuthenticated: false }))
);

export const authReducer = (
  state: AuthState | undefined,
  action: Action
): AuthState => reducer(state, action);
