import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

// Imports
// import { TableviewerConjPanelComponent } from '../tableviewer-conj-panel/tableviewer-conj-panel.component';

@Component({
  selector: "ww-tableviewer",
  templateUrl: "./tableviewer.component.html",
  styleUrls: ["./tableviewer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableviewerComponent implements OnInit {
  @ViewChild("conjPanel") conjPanel;
  cols: number;
  rows: number;
  conjrowspan: number;
  conjcolspan: number;
  quarterrowspan: number;
  halfrowspan: number;
  fullrowspan: number;
  breakpoint = 1100;
  useTestAPI = false;
  // @HostListener('document:keyup', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   if (event.keyCode === 13) {
  //     this.conjPanel.conjugate();
  //   }
  // }
  param1: string;
  param2: string;
  constructor(private route: ActivatedRoute) {
    //   this.route.queryParams.subscribe(params => {
    //     console.log(params)
    //     this.param1 = params['param1'];
    //     this.param2 = params['param2'];
    // });
  }

  ngOnInit() {
    this.cols = window.innerWidth <= this.breakpoint ? 3 : 12;
    this.rows = window.innerWidth <= this.breakpoint ? 1 : 5;
    this.conjcolspan = window.innerWidth <= this.breakpoint ? 3 : 9;
    this.conjrowspan = window.innerWidth <= this.breakpoint ? 3 : 5;
  }

  onResize(event) {
    this.cols = event.target.innerWidth <= this.breakpoint ? 3 : 12;
    this.rows = window.innerWidth <= this.breakpoint ? 1 : 5;
    this.conjcolspan = window.innerWidth <= this.breakpoint ? 3 : 9;
    this.conjrowspan = window.innerWidth <= this.breakpoint ? 3 : 5;
  }

  conjugate() {
    this.conjPanel.conjugate();
  }
}
