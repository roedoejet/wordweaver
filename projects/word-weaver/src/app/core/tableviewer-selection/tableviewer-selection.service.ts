import { Injectable } from "@angular/core";
import { RequestParams } from "../../models/models";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TableviewerSelectionService {
  selection: BehaviorSubject<RequestParams> = new BehaviorSubject({
    root: [],
    "aff-option": [],
    patient: [],
    agent: []
  });
  constructor() {}

  updateVerbs(v) {
    this.selection.next({ ...this.selection.value, ...{ root: v } });
  }

  updateAgents(a) {
    this.selection.next({ ...this.selection.value, ...{ agent: a } });
  }

  updatePatients(p) {
    this.selection.next({ ...this.selection.value, ...{ patient: p } });
  }

  updateAffOptions(ao) {
    this.selection.next({ ...this.selection.value, ...{ "aff-option": ao } });
  }
}
