import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  AffixService,
  ConjugationService,
  ChartService
} from "../../../../../services";
import { AffOption } from "../../../../../models";
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
    this.temps$
      .pipe(
        switchMap(ts => {
          return this.affixService.affoptions$.pipe(
            map(affopts => {
              const picked_ao = affopts.filter(ao => ao["gloss"] === term)[0];
              return ts.filter(t => t.values["affopt"] === picked_ao["tag"])[0];
            })
          );
        })
      )
      .subscribe(t => {
        this.select(t);
      });
  }

  // onChartClick(ev) {
  //   let term = ev['data']['name']
  //   // If not final, change pool of verbs
  //   if (ev['data']['children']) {
  //     let clicked_verb_glosses = ev['data']['children'].map(x => x['name'])
  //     this.cached_clicked_verbs$ = this.cached_clicked_verbs$.pipe(
  //       map(cached_clicked_verbs => {
  //         // if verbs exist in pool already, remove them
  //         if (cached_clicked_verbs.some(v => clicked_verb_glosses.indexOf(v) > -1)) {
  //           return cached_clicked_verbs.filter(v => clicked_verb_glosses.indexOf(v) < 0)
  //           // otherwise add them
  //         } else {
  //           return cached_clicked_verbs.concat(clicked_verb_glosses)
  //         }
  //       })
  //     )
  //   } else {
  //     this.verbService.verbs$.subscribe(verbs => verbs.filter(v => {
  //       if (v.gloss === term) {
  //         this.select(v)
  //       }
  //     }))
  //   }
  //   this.cached_clicked_verbs$.pipe(
  //     switchMap(glosses => this.verbService.verbs$.pipe(
  //       map(verbs => verbs.filter(v => glosses.indexOf(v['gloss']) > -1))
  //     ))
  //   ).subscribe(x => this.verbs$.next(x))
  // }

  select(temp) {
    this.chartService
      .returnChoiceAllData("aff-options", [{ name: temp["translation"] }], 1)
      .subscribe(r => (this.when = r));
    this.selectedTemp.emit(temp.values);
  }
}
