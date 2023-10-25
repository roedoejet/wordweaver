import { createAction, props } from "@ngrx/store";
import { Option, Pronoun, Conjugations, Verb } from "../../../config/config";
import { Step } from "./wordmaker-selection.model";

export const actionChangeConjugations = createAction(
  "[Wordmaker] Change Conjugations",
  props<{ conjugations: Conjugations }>()
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

export const actionChangeOption = createAction(
  "[Wordmaker] Change Selected Affix Option",
  props<{ option: Option }>()
);

export const actionConjugationEvent = createAction(
  "[Wordmaker] Manual Conjugation Event",
  props<{ eventType: any }>()
);

export const actionChangeLoading = createAction(
  "[Wordmaker] Toggle Loading",
  props<{ loading: boolean }>()
);

export const actionChangeStep = createAction(
  "[Wordmaker] Change Step",
  props<{ step: Step }>()
);
