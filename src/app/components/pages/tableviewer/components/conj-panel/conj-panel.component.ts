import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Conjugation, Settings } from '../../../../../models'
import { Observable } from 'rxjs'
import { SettingsService, ChartService, ConjugationService, SelectionService } from '../../../../../services'
import { MetaData } from '../../../../../global'
import { EChartOption } from 'echarts';

@Component({
  selector: 'conj-panel',
  templateUrl: './conj-panel.component.html',
  styleUrls: ['./conj-panel.component.scss',
    '../../tableviewer.scss']
})
export class ConjPanel implements OnInit {
  chart_response$: Observable<EChartOption>;
  chart_response: EChartOption;
  response$: any;
  @ViewChild('explorer') explorer;
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(200);
  tooltipPosition = 'above';
  settings: Settings;
  language = MetaData.language;
  showExplorer = false;
  loading = false;
  show_toolbar = true;
  order = true;
  depth = 1;
  constructor(private settingsService: SettingsService, private conjugationService: ConjugationService,
    private selectionService: SelectionService, private chartService: ChartService) {
  }

  ngOnInit() {
    this.settingsService.settings.subscribe((settings: Settings) => { this.settings = settings; });
  }

  ngOnChanges() {

  }

  conjugate() {
    this.loading = true;
    if (!this.showExplorer) {
      this.response$ = this.conjugationService.conjugateTable(this.selectionService.selection);
      console.log(this.response$);
      this.response$.subscribe(x => console.log(x));
      return this.response$;
    } else {
      let order = 'PT';
      if (this.order) {
        order = 'TP';
      }
      this.chart_response$ = this.chartService.createChart(this.selectionService.selection, order, this.depth)
      this.chart_response$.subscribe(r => this.chart_response = r);
    }
  }

  isString(val) { return typeof val === 'string'; }

  toggleExplorer() {
    this.showExplorer = !this.showExplorer;
    this.conjugate();
  }

  download() {
    console.log('test');
    const query_args = this.conjugationService.createRequestUrl(this.selectionService.selection,
      [{ 'param': 'docx', 'value': 'true' }]).toString();
    const url = this.conjugationService.path + '?' + query_args;
    window.location.href = url;
  }

}
