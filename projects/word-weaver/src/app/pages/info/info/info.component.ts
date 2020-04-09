import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import "echarts/lib/chart/treemap";
import { EChartOption, init } from "echarts";
import { map } from "rxjs/operators";

@Component({
  selector: "ww-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent implements OnInit {
  response;
  instruction = true;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.response = this.returnAllData();
  }

  returnAllData() {
    return this.http
      .get(environment.base + "/static/web/assets/data.json")
      .pipe(
        map((data: any) => {
          data = data;
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
            series: [
              {
                type: "tree",
                // label: {
                //     color: '#fff'
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

  exit() {
    this.instruction = false;
  }
}
