import { createAction, props } from "@ngrx/store";

import { AffOption, Pronoun, Response, Verb } from "../../models/models";

export const actionChangeConjugation = createAction(
  "[Wordmaker] Change Conjugation",
  props<{ conjugation: Response }>()
);

export const actionChangeVerb = createAction(
  "[Wordmaker] Change Selected Verb",
  props<{ root: Verb }>()
);

export const actionChangeAgent = createAction(
  "[Wordmaker] Change Selected Agent",
  props<{ agent: Pronoun }>()
);

export const actionChangePatient = createAction(
  "[Wordmaker] Change Selected Patient",
  props<{ patient: Pronoun }>()
);

export const actionChangeAffOption = createAction(
  "[Wordmaker] Change Selected Affix Option",
  props<{ option: AffOption }>()
);

export const actionConjugationEvent = createAction(
  "[Wordmaker] Manual Conjugation Event",
  props<{}>()
);

export const actionChangeLoading = createAction(
  "[Wordmaker] Toggle Loading",
  props<{ loading: boolean }>()
);
