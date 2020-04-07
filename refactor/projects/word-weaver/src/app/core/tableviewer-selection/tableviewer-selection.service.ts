import { Injectable } from "@angular/core";
import { RequestParams } from "../../models/models";

@Injectable({
  providedIn: "root"
})
export class TableviewerSelectionService {
  selection: RequestParams = {
    root: [],
    "aff-option": [],
    patient: [],
    agent: []
  };
  constructor() {}

  updateVerbs(v) {
    this.selection["root"] = v;
  }

  updateAgents(a) {
    this.selection["agent"] = a;
  }

  updatePatients(p) {
    this.selection["patient"] = p;
  }

  updateAffOptions(ao) {
    this.selection["aff-option"] = ao;
  }
}
