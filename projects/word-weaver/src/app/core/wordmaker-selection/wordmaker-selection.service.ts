import { Injectable } from "@angular/core";
import { Option, Pronoun, RequestParams, Verb } from "../../../config/config";
import { BehaviorSubject } from "rxjs";

interface WordMakerSelection {
  root: Verb;
  option: Option;
  patient: Pronoun;
  agent: Pronoun;
}

@Injectable({
  providedIn: "root"
})
export class WordmakerSelectionService {
  selection: {
    root: Verb;
    option: Option;
    patient: Pronoun;
    agent: Pronoun;
  } = { root: null, option: null, patient: null, agent: null };
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

  updateOption(ao) {
    this.selection["option"] = ao;
    this.selection$.next(this.selection);
  }
}
