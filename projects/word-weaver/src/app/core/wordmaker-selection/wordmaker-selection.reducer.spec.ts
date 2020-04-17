import { initialState, wordmakerReducer } from "./wordmaker-selection.reducer";

import {
  actionChangeAffOption,
  actionChangeAgent,
  actionChangePatient,
  actionChangeVerb
} from "./wordmaker-selection.actions";

describe("WordmkerReducer", () => {
  it("should return default state", () => {
    const action = {} as any;
    const state = wordmakerReducer(undefined, action);
    expect(state).toBe(initialState);
  });
});
