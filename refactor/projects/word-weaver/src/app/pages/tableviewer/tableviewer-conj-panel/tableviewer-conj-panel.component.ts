import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { ConjugationService } from "../../../core/core.module";
import { TableviewerSelectionService } from "../../../core/core.module";
import { EChartOption } from "echarts";
import { ToastrService } from "ngx-toastr";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { merge, uniq } from "lodash";
import { SettingsState, State } from "../../../core/settings/settings.model";
import { selectSettings } from "../../../core/settings/settings.selectors";
import {
  AffixService,
  PronounService,
  VerbService
} from "../../../core/core.module";

@Component({
  selector: "ww-tableviewer-conj-panel",
  templateUrl: "./tableviewer-conj-panel.component.html",
  styleUrls: ["./tableviewer-conj-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableviewerConjPanelComponent implements OnInit {
  settings$: Observable<SettingsState>;
  chart_response$: Observable<EChartOption>;
  chart_response: EChartOption;
  response$: any;
  @ViewChild("explorer") explorer;
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(200);
  tooltipPosition = "above";
  showExplorer = false;
  loading = false;
  show_toolbar = true;
  order = true;
  depth = 1;
  constructor(
    private conjugationService: ConjugationService,
    private selectionService: TableviewerSelectionService,
    private http: HttpClient,
    private toastr: ToastrService,
    private store: Store<State>,
    private affixService: AffixService,
    private pronounService: PronounService,
    private verbService: VerbService
  ) {}

  ngOnInit(): void {
    this.settings$ = this.store.pipe(select(selectSettings));
  }

  conjugate() {
    this.loading = true;
    if (!this.showExplorer) {
      this.response$ = this.conjugationService.conjugateTable(
        this.selectionService.selection
      );
      console.log(this.response$);
      this.response$.subscribe(x => console.log(x));
      return this.response$;
    } else {
      let order = "PT";
      if (this.order) {
        order = "TP";
      }
      this.chart_response$ = this.createChart(
        this.selectionService.selection,
        order,
        this.depth
      );
      this.chart_response$.subscribe(r => (this.chart_response = r));
    }
  }

  createChartData(res, order, depth) {
    let data = [];
    let verbs: any = [];
    let chartOption: EChartOption = {
      tooltip: {
        show: false,
        trigger: "item",
        triggerOn: "mousemove"
      },
      toolbox: {
        feature: {
          saveAsImage: { title: "save", show: false }
        }
      },
      legend: {
        top: "2%",
        left: "3%",
        orient: "vertical",
        data: [],
        borderColor: "#c23531"
      },
      series: []
    };
    let node;
    for (let conjugation of res) {
      conjugation = conjugation.values;
      let v = conjugation.root["tag"];
      let t = this.affixService.getAffOption(conjugation.affopt)["gloss"];
      let vb = this.verbService.getVerb(v);
      let p;
      if (vb["thematic_relation"] === "red") {
        p = this.pronounService.getPronoun(conjugation.pronoun["agent"])[
          "gloss"
        ];
      } else if (vb["thematic_relation"] === "blue") {
        p = this.pronounService.getPronoun(conjugation.pronoun["patient"])[
          "gloss"
        ];
      } else {
        p =
          this.pronounService.getPronoun(conjugation.pronoun["agent"])[
            "gloss"
          ] +
          " > " +
          this.pronounService.getPronoun(conjugation.pronoun["patient"])[
            "obj_gloss"
          ];
      }
      const val = this.returnValue(conjugation);

      if (order === "TP") {
        node = merge(node, { [v]: { [t]: { [p]: val } } });
      } else {
        node = merge(node, { [v]: { [p]: { [t]: val } } });
      }
    }

    for (const verb of Object.keys(node)) {
      verbs.push(verb);
      let nv = { name: verb, children: [] };
      for (const second of Object.keys(node[verb])) {
        const ns = { name: second, children: [] };
        for (const third of Object.keys(node[verb][second])) {
          let nt = {
            name: third,
            children: [{ name: node[verb][second][third] }]
          };
          ns["children"].push(nt);
        }
        nv["children"].push(ns);
      }
      data.push(nv);
    }

    let top = 0;
    let initialTreeDepth = 0;
    if (verbs.length < 2) {
      initialTreeDepth = depth;
    } else {
      // verbs.forEach(v => {
      //   chartOption.legend['data'].push({
      //     name: v,
      //     icon: 'rectangle'
      //   });
      // });
    }
    for (var j = 0; j < data.length; j++) {
      top += 20;
      let ser = {
        type: "tree",
        name: data[j]["name"],
        data: [data[j]],
        top: top.toString() + "%",
        left: "12%",
        bottom: "25%",
        right: "20%",
        symbolSize: 7,
        initialTreeDepth: initialTreeDepth,
        label: {
          normal: {
            position: "bottom",
            verticalAlign: "middle",
            align: "middle"
          }
        },
        leaves: {
          label: {
            normal: {
              position: "top",
              verticalAlign: "middle",
              align: "middle"
            }
          }
        },
        expandAndCollapse: true,
        roam: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      };
      chartOption.series.push(ser);
    }
    return chartOption;
  }

  returnValue(conjugation) {
    let morphemes = [conjugation.root, conjugation.pronoun].concat(
      conjugation.affixes
    );
    morphemes = morphemes.sort(function(a, b) {
      return a.position - b.position;
    });
    return morphemes.map(m => m.value).join("");
  }

  createChart(tableargs, order, depth) {
    return this.conjugationService
      .conjugate(tableargs)
      .pipe(map(res => this.createChartData(res, order, depth)));
  }

  isString(val) {
    return typeof val === "string";
  }

  toggleExplorer() {
    this.showExplorer = !this.showExplorer;
    this.conjugate();
  }

  download() {
    const query_args = this.conjugationService
      .createRequestUrl(this.selectionService.selection)
      .toString();
    const query_args_docx = this.conjugationService
      .createRequestUrl(this.selectionService.selection, [
        { param: "docx", value: "true" }
      ])
      .toString();
    const url = this.conjugationService.path + "?" + query_args;
    const docx_url = this.conjugationService.path + "?" + query_args_docx;
    this.http.get(url).subscribe(
      data => {
        console.log(data);
        window.location.href = docx_url;
        this.updateToast(data);
      },
      error => {
        console.log(error);
        this.updateToast(false, error.status);
      }
    );
  }

  updateToast(success?, code = 200) {
    if (success) {
      this.toastr.success("File succesfully downloaded");
    } else {
      this.toastr.error(
        "This file couldn't be downloaded. Please make sure your conjugation is valid.",
        "Whoops!"
      );
    }
  }
}
