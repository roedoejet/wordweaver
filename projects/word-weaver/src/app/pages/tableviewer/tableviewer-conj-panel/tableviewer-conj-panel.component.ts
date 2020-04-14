import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { ConjugationService } from "../../../core/core.module";
import {
  NotificationService,
  TableviewerSelectionService
} from "../../../core/core.module";
import { EChartOption } from "echarts";
import { Store, select } from "@ngrx/store";
import {
  Observable,
  BehaviorSubject,
  Subject,
  fromEvent,
  of,
  merge,
  EMPTY
} from "rxjs";
import { map, switchMap, tap, finalize, skip } from "rxjs/operators";
import { merge as _merge } from "lodash";
import { SettingsState, State } from "../../../core/settings/settings.model";
import { selectSettings } from "../../../core/settings/settings.selectors";
import {
  AffixService,
  PronounService,
  VerbService
} from "../../../core/core.module";
import { Response } from "../../../models/models";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { marker } from "@biesbjerg/ngx-translate-extract-marker";

@Component({
  selector: "ww-tableviewer-conj-panel",
  templateUrl: "./tableviewer-conj-panel.component.html",
  styleUrls: ["./tableviewer-conj-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableviewerConjPanelComponent implements OnInit {
  // Basic config
  settings$: Observable<SettingsState>;
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(200);
  tooltipPosition = "above";
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  // Non-reactive states
  loading = false;
  show_toolbar = true;
  // Reactive conjugation triggers
  showExplorer$ = new BehaviorSubject<boolean>(false);
  manualConjugation$ = new Subject<any>();
  order$ = new BehaviorSubject<boolean>(true);
  depth$ = new BehaviorSubject<number>(1);
  conjugationTrigger$: Observable<any>;
  chartResponse$: Observable<EChartOption | any>;
  response$: Observable<Response | any>;
  // Elements
  @ViewChild("explorer") explorer;
  constructor(
    private conjugationService: ConjugationService,
    private selectionService: TableviewerSelectionService,
    private http: HttpClient,
    private store: Store<State>,
    private affixService: AffixService,
    private pronounService: PronounService,
    private verbService: VerbService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.settings$ = this.store.pipe(select(selectSettings));
    this.conjugationTrigger$ = merge(
      this.manualConjugation$,
      this.showExplorer$.pipe(skip(1)),
      this.depth$.pipe(skip(1)),
      this.order$.pipe(skip(1))
    );
    this.response$ = this.conjugationTrigger$.pipe(
      switchMap(triggered => this.showExplorer$),
      switchMap(showExplorer => {
        if (!showExplorer) {
          return this.conjugationService.conjugateTable(
            this.selectionService.selection
          );
        } else {
          return EMPTY;
        }
      })
    );
    this.chartResponse$ = this.conjugationTrigger$.pipe(
      switchMap(triggered => this.showExplorer$),
      switchMap(showExplorer => {
        if (showExplorer) {
          let order = "PT";
          if (this.order$.value) {
            order = "TP";
          }
          return this.createChart(
            this.selectionService.selection,
            order,
            this.depth$.value
          );
        } else {
          return EMPTY;
        }
      })
    );
    this.selectionService.selection.subscribe(x => console.log(x));
  }

  createChartData(res, order, depth) {
    const data = [];
    const verbs: any = [];
    const chartOption: EChartOption = {
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
      const v = conjugation.root["tag"];
      const t = this.affixService.getAffOption(conjugation.affopt)["gloss"];
      const vb = this.verbService.getVerb(v);
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
        node = _merge(node, { [v]: { [t]: { [p]: val } } });
      } else {
        node = _merge(node, { [v]: { [p]: { [t]: val } } });
      }
    }

    for (const verb of Object.keys(node)) {
      verbs.push(verb);
      const nv = { name: verb, children: [] };
      for (const second of Object.keys(node[verb])) {
        const ns = { name: second, children: [] };
        for (const third of Object.keys(node[verb][second])) {
          const nt = {
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
      verbs.forEach(v => {
        chartOption.legend["data"].push(v);
      });
    }
    for (let j = 0; j < data.length; j++) {
      top += 20;
      const ser = {
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
    this.showExplorer$.next(!this.showExplorer$.value);
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
      this.notificationService.translated(
        marker("ww.tableviewer.notifications.download.success"),
        {},
        "success"
      );
    } else {
      this.notificationService.translated(
        marker("ww.tableviewer.notifications.download.error"),
        {},
        "error"
      );
    }
  }
}
