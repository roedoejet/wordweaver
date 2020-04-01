// Core
import { Component, HostListener, ViewChild, OnInit } from "@angular/core";

// Imports
import { ConjPanel } from "./components/conj-panel/conj-panel.component";

@Component({
  selector: "page-tableviewer",
  templateUrl: "tableviewer.html",
  styleUrls: ["./tableviewer.scss"]
})
export class TableviewerPage implements OnInit {
  @ViewChild("conjPanel") conjPanel: ConjPanel;
  cols: number;
  rows: number;
  conjrowspan: number;
  conjcolspan: number;
  halfrowspan: number;
  fullrowspan: number;
  breakpoint = 1100;
  useTestAPI = false;
  @HostListener("document:keypress", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.conjPanel.conjugate();
    }
  }
  constructor() {}

  ngOnInit() {
    this.cols = window.innerWidth <= this.breakpoint ? 3 : 12;
    this.rows = window.innerWidth <= this.breakpoint ? 1 : 2;
    this.conjcolspan = window.innerWidth <= this.breakpoint ? 3 : 6;
    this.conjrowspan = window.innerWidth <= this.breakpoint ? 1 : 2;
    this.halfrowspan = window.innerWidth <= this.breakpoint ? 1 : 1;
    this.fullrowspan = window.innerWidth <= this.breakpoint ? 1 : 2;
  }

  onResize(event) {
    this.cols = event.target.innerWidth <= this.breakpoint ? 3 : 12;
    this.rows = window.innerWidth <= this.breakpoint ? 1 : 2;
    this.conjcolspan = window.innerWidth <= this.breakpoint ? 3 : 6;
    this.conjrowspan = window.innerWidth <= this.breakpoint ? 1 : 2;
    this.halfrowspan = window.innerWidth <= this.breakpoint ? 1 : 1;
    this.fullrowspan = window.innerWidth <= this.breakpoint ? 1 : 2;
  }

  conjugate() {
    this.conjPanel.conjugate();
  }
}
