import { createAction, props } from "@ngrx/store";

import { AffOption, Pronoun, Verb } from "../../models/models";

export const actionChangeVerbs = createAction(
  "[Tableviewer] Change selected verbs ",
  props<{ root: Verb[] }>()
);

export const actionChangeAgents = createAction(
  "[Tableviewer] Change selected agents ",
  props<{ agent: Pronoun[] }>()
);

export const actionChangePatients = createAction(
  "[Tableviewer] Change selected patients ",
  props<{ patient: Pronoun[] }>()
);

export const actionChangeAffOptions = createAction(
  "[Tableviewer] Change selected affix options ",
  props<{ "aff-option": AffOption[] }>()
);
