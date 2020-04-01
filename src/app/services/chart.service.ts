import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";

import { MatSnackBar } from "@angular/material";
import { ErrorSnackComponent } from "../components/shared/error/error.snack";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { merge, uniq } from "lodash";
import { EChartOption, init } from "echarts";
import { VerbService } from "./verb.service";
import { PronounService } from "./pronoun.service";
import { AffixService } from "./affix.service";
import { ConjugationService } from "./conjugation.service";

@Injectable()
export class ChartService {
  path = environment.base + environment.prefix + `conjugations`;
  constructor(
    private conjugationService: ConjugationService,
    private http: HttpClient,
    public snackBar: MatSnackBar,
    private verbService: VerbService,
    private pronounService: PronounService,
    private affixService: AffixService
  ) {}

  returnAllData() {
    return this.http
      .get(environment.base + "/static/web/assets/data.json")
      .pipe(
        map(data => {
          data = data;
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
            series: [
              {
                type: "tree",
                // label: {
                //     color: "#fff"
                // },
                name: "Kawennon:nis",
                data: data,
                layout: "radial",
                top: "20%",
                // left: '0',
                bottom: "40%",
                // right: '0',
                symbolSize: 7,
                initialTreeDepth: 0,
                expandAndCollapse: true,
                roam: true,
                animationDuration: 550,
                animationDurationUpdate: 750
              }
            ]
          };
          return chartOption;
        })
      );
  }

  returnBasicDataFrom(list_of_data) {
    if (list_of_data.length > 50) {
      const initialLetters = uniq(list_of_data.map(x => x["gloss"][0]));
      list_of_data = initialLetters.map(l => {
        return {
          name: l,
          children: list_of_data
            .filter(x => x["gloss"][0] === l)
            .map(x => {
              return {
                name: x["gloss"]
              };
            })
        };
      });
    } else {
      list_of_data = list_of_data.map(x => {
        return {
          name: x["gloss"]
        };
      });
    }
    return list_of_data;
  }

  returnAllProCombinations() {
    return this.pronounService.pronouns$.pipe(
      map(pns => {
        const all_pns = [];
        pns.forEach(ag_pn => {
          const ag_node = { name: ag_pn["gloss"], children: [] };
          pns.forEach(pat_pn => {
            // prevent same person
            if (ag_pn.person !== pat_pn.person) {
              // prevent inclusive + second person
              if (
                !(ag_pn.person === "2" && pat_pn.inclusivity === "incl") &&
                !(ag_pn.inclusivity === "incl" && pat_pn.person === "2")
              ) {
                ag_node["children"].push({ name: pat_pn["obj_gloss"] });
              }
            }
          });
          all_pns.push(ag_node);
        });

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
          series: [
            {
              type: "tree",
              // label: {
              //     color: "#fff"
              // },
              name: name,
              data: [{ name: "Who", children: all_pns }],
              layout: "radial",
              orient: "LR",
              top: "30%",
              // left: '0',
              bottom: "40%",
              // right: '0',
              symbolSize: 7,
              initialTreeDepth: 1,
              expandAndCollapse: true,
              roam: true,
              animationDuration: 550,
              animationDurationUpdate: 750
            }
          ]
        };
        return chartOption;
      })
    );
  }

  returnChoiceAllData(datatype, selected: any = false, depth: number = 0) {
    return this.http.get(environment.base + environment.prefix + datatype).pipe(
      map((data: Object[]) => {
        // prevent too many nodes
        if (selected) {
          data = selected;
        } else {
          data = this.returnBasicDataFrom(data);
        }
        let name = "";
        if (datatype === "verbs") {
          name = "What";
        } else if (datatype === "pronouns") {
          name = "Who";
        } else if (datatype === "aff-options") {
          name = "When";
        }

        data = [{ name: name, children: data }];

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
          series: [
            {
              type: "tree",
              label: {
                fontSize: 14
              },
              name: name,
              data: data,
              layout: "radial",
              orient: "LR",
              top: "30%",
              // left: '0',
              bottom: "40%",
              // right: '0',
              symbolSize: 10,
              initialTreeDepth: depth,
              expandAndCollapse: true,
              roam: true,
              animationDuration: 550,
              animationDurationUpdate: 750
            }
          ]
        };
        return chartOption;
      })
    );
  }

  returnValue(conj) {
    let morphemes = [conj.root, conj.pronoun].concat(conj.affixes);
    morphemes = morphemes.sort(function(a, b) {
      return a.position - b.position;
    });
    return morphemes.map(m => m.value).join("");
  }

  createChartData(res, order, depth) {
    let data = [];
    let verbs = [];
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
    for (let conj of res) {
      conj = conj.values;
      let v = conj.root["tag"];
      let t = this.affixService.getAffOption(conj.affopt)["gloss"];
      let vb = this.verbService.getVerb(v);
      let p;
      if (vb["thematic_relation"] === "red") {
        p = this.pronounService.getPronoun(conj.pronoun["agent"])["gloss"];
      } else if (vb["thematic_relation"] === "blue") {
        p = this.pronounService.getPronoun(conj.pronoun["patient"])["gloss"];
      } else {
        p =
          this.pronounService.getPronoun(conj.pronoun["agent"])["gloss"] +
          " > " +
          this.pronounService.getPronoun(conj.pronoun["patient"])["obj_gloss"];
      }
      const val = this.returnValue(conj);

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
      verbs.forEach(v => {
        chartOption.legend["data"].push({
          name: v,
          icon: "rectangle"
        });
      });
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

  createChart(tableargs, order, depth) {
    return this.conjugationService
      .conjugate(tableargs)
      .pipe(map(res => this.createChartData(res, order, depth)));
  }
}
