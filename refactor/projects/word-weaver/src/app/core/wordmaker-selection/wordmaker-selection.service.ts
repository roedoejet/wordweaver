import { Injectable } from "@angular/core";
import { AffOption, Pronoun, RequestParams, Verb } from "../../models/models";
import { BehaviorSubject } from "rxjs";

interface WordMakerSelection {
  root: Verb;
  "aff-option": AffOption;
  patient: Pronoun;
  agent: Pronoun;
}

@Injectable({
  providedIn: "root"
})
export class WordmakerSelectionService {
  selection: {
    root: Verb;
    "aff-option": AffOption;
    patient: Pronoun;
    agent: Pronoun;
  } = { root: null, "aff-option": null, patient: null, agent: null };
  selection$ = new BehaviorSubject(this.selection);
  constructor() {}

  updateVerb(v) {
    this.selection["root"] = v;
    this.selection$.next(this.selection);
  }

  updateAgent(a) {
    this.selection["agent"] = a;
    this.selection$.next(this.selection);
  }

  updatePatient(p) {
    this.selection["patient"] = p;
    this.selection$.next(this.selection);
  }

  updateAffOption(ao) {
    this.selection["aff-option"] = ao;
    this.selection$.next(this.selection);
  }
}
