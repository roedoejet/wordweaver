import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  AffixService,
  ConjugationService,
  ChartService
} from "../../../../../services";
import { AffOption, Conjugation } from "../../../../../models";
import { Observable } from "rxjs";
import { distinctUntilChanged, map, switchMap } from "rxjs/operators";
import { EChartOption } from "echarts";

@Component({
  selector: "wordmaker-temp-panel",
  templateUrl: "./wordmaker-temp-panel.component.html",
  styleUrls: ["./wordmaker-temp-panel.component.scss"]
})
export class WordmakerTempPanel implements OnInit {
  temps$: Observable<any>;
  @Output() selectedTemp = new EventEmitter<AffOption>();
  @Output() goBackTrigger = new EventEmitter();
  @Input() wordmaker;
  when: EChartOption;
  constructor(
    private affixService: AffixService,
    private conjugationService: ConjugationService,
    private chartService: ChartService
  ) {
    this.chartService
      .returnChoiceAllData("aff-options", undefined, 1)
      .subscribe(r => {
        this.when = r;
      });
  }

  ngOnInit() {
    const verb_tag = [this.wordmaker.selectedVerb["tag"]];
    const selected_ag = [];
    const selected_pat = [];
    if ("agent" in this.wordmaker.selectedPers) {
      selected_ag.push(this.wordmaker.selectedPers["agent"].tag);
    }
    if ("patient" in this.wordmaker.selectedPers) {
      selected_pat.push(this.wordmaker.selectedPers["patient"].tag);
    }
    this.temps$ = this.conjugationService.conjugate({
      root: verb_tag,
      agent: selected_ag,
      patient: selected_pat,
      "aff-option": []
    });
  }

  goBack() {
    this.goBackTrigger.emit();
  }

  onChartClick(ev) {
    const term = ev["data"]["name"];
    this.returnAffoptFromGloss$(term).subscribe(t => {
      console.log(t);
      this.chartService
        .returnChoiceAllData("aff-options", [{ name: t["gloss"] }], 1)
        .subscribe(r => (this.when = r));
      this.selectedTemp.emit(t);
    });
  }

  onChipClick(tag) {
    this.returnAffoptFromTag$(tag).subscribe(t => {
      console.log(t);
      this.chartService
        .returnChoiceAllData("aff-options", [{ name: t["gloss"] }], 1)
        .subscribe(r => (this.when = r));
      this.selectedTemp.emit(t);
    });
  }

  returnAffoptFromTag$(tag) {
    return this.affixService.affoptions$.pipe(
      map(affopts => {
        const picked_ao = affopts.filter(ao => ao["tag"] === tag)[0];
        console.log(picked_ao);
        return picked_ao;
      })
    );
  }

  returnAffoptFromGloss$(gloss) {
    return this.affixService.affoptions$.pipe(
      map(affopts => {
        const picked_ao = affopts.filter(ao => ao["gloss"] === gloss)[0];
        console.log(picked_ao);
        return picked_ao;
      })
    );
  }
}
