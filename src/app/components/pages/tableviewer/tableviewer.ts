// Core
import { Component, HostListener, ViewChild } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

// Imports
import { ChartService, ConjugationService, SelectionService } from '../../../services';
import { Observable } from 'rxjs';
import { ConjPanel } from './components/conj-panel/conj-panel.component'
import { Conjugation } from '../../../models'
@Component({
  selector: 'page-tableviewer',
  templateUrl: 'tableviewer.html',
  styleUrls: [
    './tableviewer.scss']
})
export class TableviewerPage {
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode == 13) {
      this.conjPanel.conjugate()
    }
  }
  @ViewChild('conjPanel') conjPanel: ConjPanel;
  cols: number;
  rows: number;
  conjrowspan: number;
  conjcolspan: number;
  halfrowspan: number;
  fullrowspan: number;
  breakpoint: number = 1100;
  useTestAPI: boolean = false;
  constructor() {
  }

  ngOnInit() {
    this.cols = (window.innerWidth <= this.breakpoint) ? 3 : 12
    this.rows = (window.innerWidth <= this.breakpoint) ? 1 : 2
    this.conjcolspan = (window.innerWidth <= this.breakpoint) ? 3 : 6
    this.conjrowspan = (window.innerWidth <= this.breakpoint) ? 1 : 2
    this.halfrowspan = (window.innerWidth <= this.breakpoint) ? 1 : 1
    this.fullrowspan = (window.innerWidth <= this.breakpoint) ? 1 : 2
  }

  onResize(event) {
    this.cols = (event.target.innerWidth <= this.breakpoint) ? 3 : 12;
    this.rows = (window.innerWidth <= this.breakpoint) ? 1 : 2
    this.conjcolspan = (window.innerWidth <= this.breakpoint) ? 3 : 6
    this.conjrowspan = (window.innerWidth <= this.breakpoint) ? 1 : 2
    this.halfrowspan = (window.innerWidth <= this.breakpoint) ? 1 : 1
    this.fullrowspan = (window.innerWidth <= this.breakpoint) ? 1 : 2
  }

  conjugate(){
    this.conjPanel.conjugate();
  }

}