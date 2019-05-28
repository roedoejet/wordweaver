import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import 'echarts/lib/chart/treemap'
import { ChartService } from '../../../services'
import { MetaData } from '../../../global'

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
  styleUrls: [
    './info.scss']
})
export class InfoPage implements OnInit {
  response;
  res;
  title = MetaData.title
  language = MetaData.language
  instruction = true;
  constructor(public router: Router, private chartService: ChartService) {

  }

  ngOnInit() {
    this.response = this.chartService.returnAllData()
    // this.response.subscribe(r =>{ this.res = r; console.log(r)})
  }

  exit(){
    this.instruction = false;
  }


}