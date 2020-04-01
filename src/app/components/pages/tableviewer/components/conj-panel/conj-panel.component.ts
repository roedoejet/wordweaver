import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Conjugation, Settings } from "../../../../../models";
import { Observable } from "rxjs";
import {
  SettingsService,
  ChartService,
  ConjugationService,
  SelectionService
} from "../../../../../services";
import { MetaData } from "../../../../../global";
import { EChartOption } from "echarts";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "conj-panel",
  templateUrl: "./conj-panel.component.html",
  styleUrls: ["./conj-panel.component.scss", "../../tableviewer.scss"]
})
export class ConjPanel implements OnInit {
  chart_response$: Observable<EChartOption>;
  chart_response: EChartOption;
  response$: any;
  @ViewChild("explorer") explorer;
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(200);
  tooltipPosition = "above";
  settings: Settings;
  language = MetaData.language;
  showExplorer = false;
  loading = false;
  show_toolbar = true;
  order = true;
  depth = 1;
  successMessage = MetaData.congratulations;
  constructor(
    private settingsService: SettingsService,
    private conjugationService: ConjugationService,
    private selectionService: SelectionService,
    private chartService: ChartService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.settingsService.settings.subscribe((settings: Settings) => {
      this.settings = settings;
    });
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
      this.chart_response$ = this.chartService.createChart(
        this.selectionService.selection,
        order,
        this.depth
      );
      this.chart_response$.subscribe(r => (this.chart_response = r));
    }
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
      this.toastr.success("File succesfully downloadd", this.successMessage);
    } else {
      this.toastr.error(
        "This file couldn't be downloaded. Please make sure your conjugation is valid.",
        "Whoops!"
      );
    }
  }
}
