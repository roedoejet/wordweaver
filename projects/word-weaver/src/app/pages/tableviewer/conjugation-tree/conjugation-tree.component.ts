import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { EChartOption, EChartsSeriesType } from "echarts";
import {
  Conjugation,
  Response,
  AvailableLanguages
} from "../../../../config/config";
import { Tier } from "../../../../config/config";
import { Store, select } from "@ngrx/store";
import { selectTableviewer } from "../../../core/tableviewer-selection/tableviewer-selection.selectors";
import { Observable, Subject, of, combineLatest } from "rxjs";
import {
  map,
  switchMap,
  tap,
  distinctUntilChanged,
  takeUntil
} from "rxjs/operators";
import { TableviewerState } from "../../../core/tableviewer-selection/tableviewer-selection.model";
import {
  OptionService,
  ConjugationService,
  selectSettingsLanguage,
  VerbService,
  PronounService
} from "../../../core/core.module";
import { merge as _merge } from "lodash";
import { selectThemeColors } from "../../../core/settings/settings.selectors";

@Component({
  selector: "ww-conjugation-tree",
  templateUrl: "./conjugation-tree.component.html",
  styleUrls: ["./conjugation-tree.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConjugationTreeComponent implements OnDestroy, OnInit {
  options$: Observable<EChartOption | boolean>;
  defaultChartOption: EChartOption;
  defaultSeries: any;
  selection$: Observable<TableviewerState>;
  unsubscribe$ = new Subject<void>();
  @Input() data$: Observable<Partial<TableviewerState>>;
  constructor(
    private store: Store,
    private optionService: OptionService,
    private pronounService: PronounService,
    private conjugationService: ConjugationService,
    private verbService: VerbService
  ) {}

  ngOnInit(): void {
    this.defaultChartOption = {
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
    this.defaultSeries = {
      type: "tree",
      name: "",
      data: [],
      top: "0%",
      left: "12%",
      bottom: "25%",
      right: "20%",
      symbolSize: 7,
      initialTreeDepth: 0,
      lineStyle: {
        color: "#fff"
      },
      label: {
        normal: {
          position: "bottom",
          verticalAlign: "middle",
          align: "middle",
          color: "#fff"
        }
      },
      itemStyle: {
        borderColor: "#fff"
      },
      leaves: {
        label: {
          normal: {
            position: "top",
            verticalAlign: "middle",
            align: "middle"
          }
        },
        itemStyle: {
          borderColor: "#fff"
        }
      },
      expandAndCollapse: true,
      roam: true,
      animationDuration: 550,
      animationDurationUpdate: 750
    };
    this.options$ = this.data$.pipe(
      takeUntil(this.unsubscribe$),
      switchMap(selection => {
        if (selection && selection.conjugations.length > 0) {
          return combineLatest([
            this.store.pipe(
              takeUntil(this.unsubscribe$),
              select(selectSettingsLanguage)
            ),
            this.store.pipe(
              takeUntil(this.unsubscribe$),
              select(selectThemeColors)
            )
          ]).pipe(
            map(([lang, color]) =>
              this.createChartData(selection, lang, {
                primary: this.rgbToHex(color.primary),
                accent: this.rgbToHex(color.accent)
              })
            )
          );
        } else {
          return of(false);
        }
      })
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  rgbToHex = function(rgb) {
    const pattern = /\d+/g;
    const matches = rgb.match(pattern).slice(0, 3);
    const hex = "#";
    const hexMatches = matches.map(match => {
      match = Number(match);
      let matchHex = Number(match).toString(16);
      if (matchHex.length < 2) {
        matchHex = "0" + matchHex;
      }
      return matchHex;
    });
    return hex + hexMatches.join("");
  };

  createChartData(
    tvState: Partial<TableviewerState>,
    lang: AvailableLanguages,
    color
  ) {
    const chartOption = Object.assign({}, this.defaultChartOption);
    // Initialize series each time
    chartOption.series = [];
    const conjugations = tvState.conjugations;
    const order = tvState.standardTreeOrder;
    const depth = tvState.treeDepth;
    const data = [];
    const rootNodes = [];
    let node;
    // Populate and merge object node
    conjugations.forEach(conjugation => {
      const v = this.verbService.getVerb(conjugation.input.root)[lang];
      const t = this.optionService.getOption(conjugation.input["option"])[lang][
        "tag"
      ];
      let p = "";
      if ("agent" in conjugation.input) {
        p = this.pronounService.getPronoun(conjugation.input.agent)[lang][
          "agent"
        ];
        if ("patient" in conjugation.input) {
          p += this.pronounService.getPronoun(conjugation.input.patient)[lang][
            "patient"
          ];
        }
      } else if ("patient" in conjugation.input) {
        p = this.pronounService.getPronoun(conjugation.input["patient"])[lang][
          "agent"
        ];
      }
      const val = this.returnTierValue(conjugation.output);
      if (order) {
        node = _merge(node, { [v]: { [t]: { [p]: val } } });
      } else {
        node = _merge(node, { [v]: { [p]: { [t]: val } } });
      }
    });

    // Recursively format to echart Data
    Object.keys(node).forEach(firstTier => {
      rootNodes.push(firstTier);
      const firstNode = { name: firstTier, children: [] };
      Object.keys(node[firstTier]).forEach(secondTier => {
        const secondNode = { name: secondTier, children: [] };
        Object.keys(node[firstTier][secondTier]).forEach(thirdTier => {
          const thirdNode = {
            name: thirdTier,
            children: [{ name: node[firstTier][secondTier][thirdTier] }]
          };
          secondNode["children"].push(thirdNode);
        });
        firstNode["children"].push(secondNode);
      });
      data.push(firstNode);
    });
    let top = 0;
    let initialTreeDepth = 0;
    if (rootNodes.length < 2) {
      initialTreeDepth = depth;
    } else {
      rootNodes.forEach(v => {
        chartOption.legend["data"].push(v);
      });
    }
    for (let j = 0; j < data.length; j++) {
      top += 20;
      const ser = Object.assign({}, this.defaultSeries);
      ser.name = data[j]["name"];
      ser.data = [data[j]];
      ser.top = top.toString() + "%";
      ser.lineStyle.color = color.primary;
      ser.label.normal.color = color.primary;
      ser.leaves.itemStyle.borderColor = color.accent;
      ser.itemStyle.borderColor = color.accent;
      ser.initialTreeDepth = initialTreeDepth;
      chartOption.series.push(ser);
    }
    return chartOption;
  }

  returnTierValue(
    conjugation: Conjugation,
    tier: Tier = this.conjugationService.TIERS[0]
  ) {
    return (
      conjugation
        // filter empty
        .filter(x => x[tier.key])
        // sort by position
        .sort(function(a, b) {
          return a.position - b.position;
        })
        // create strings
        .map(x => x[tier.key])
        // join 'em
        .join(tier.separator)
    );
  }
}
