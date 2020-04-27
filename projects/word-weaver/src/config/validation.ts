import { Validation } from "../app/models/models";

export const VALIDATION: Validation = {
  display: {
    categories: {
      verbs: true,
      options: true,
      agents: true,
      conjugations: true,
      patients: false
    }
  },
  validation: {
    selection: {
      agents: true,
      options: true,
      patients: false,
      verbs: true
    }
  }
};
