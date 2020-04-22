import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { EChartOption, EChartsSeriesType } from "echarts";
import { Conjugation, Response, Tier, TIERS } from "../../../models/models";
import { Store, select } from "@ngrx/store";
import { selectTableviewer } from "../../../core/tableviewer-selection/tableviewer-selection.selectors";
import { Observable } from "rxjs";
import { map, switchMap, tap, distinctUntilChanged } from "rxjs/operators";
import { TableviewerState } from "../../../core/tableviewer-selection/tableviewer-selection.model";
import { AffixService } from "../../../core/affix/affix.service";
import { merge as _merge } from "lodash";

@Component({
  selector: "ww-conjugation-tree",
  templateUrl: "./conjugation-tree.component.html",
  styleUrls: ["./conjugation-tree.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConjugationTreeComponent implements OnInit {
  options$: Observable<EChartOption>;
  defaultChartOption: EChartOption;
  defaultSeries: any;
  selection$: Observable<TableviewerState>;
  @Input() color$: Observable<any>;
  constructor(private store: Store, private affixService: AffixService) {}

  ngOnInit(): void {
    this.selection$ = this.store.pipe(select(selectTableviewer));
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
    this.options$ = this.selection$.pipe(
      switchMap(selection => {
        if (selection.conjugations.length > 0) {
          return this.color$.pipe(
            map(color =>
              this.createChartData(selection, {
                primary: this.rgbToHex(color.primary),
                accent: this.rgbToHex(color.accent)
              })
            ),
            distinctUntilChanged()
          );
        }
      })
    );
  }

  rgbToHex = function(rgb) {
    const pattern = /\d+/g;
    const matches = rgb.match(pattern).slice(0, 3);
    const hex = "#";
    const hexMatches = matches.map(match => {
      match = parseInt(match);
      let matchHex = Number(match).toString(16);
      if (matchHex.length < 2) {
        matchHex = "0" + matchHex;
      }
      return matchHex;
    });
    return hex + hexMatches.join("");
  };

  createChartData(tvState: TableviewerState, color) {
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
      const v = conjugation.input.root;
      const t = this.affixService.getAffOption(conjugation.input["option"])[
        "gloss"
      ];
      const p = conjugation.output
        .filter(x => x.type && x.type.indexOf("pronoun") > -1)
        .map(x => x.gloss)
        .join();
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

  returnTierValue(conjugation: Conjugation, tier: Tier = TIERS[0]) {
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
