import { Store, select } from "@ngrx/store";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";

import {
  routeAnimations,
  selectIsAuthenticated
} from "../../../core/core.module";

import { State } from "../examples.state";

@Component({
  selector: "ww-examples",
  templateUrl: "./examples.component.html",
  styleUrls: ["./examples.component.scss"],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: "todos", label: "ww.examples.menu.todos" },
    { link: "stock-market", label: "ww.examples.menu.stocks" },
    { link: "theming", label: "ww.examples.menu.theming" },
    { link: "crud", label: "ww.examples.menu.crud" },
    {
      link: "simple-state-management",
      label: "ww.examples.menu.simple-state-management"
    },
    { link: "form", label: "ww.examples.menu.form" },
    { link: "notifications", label: "ww.examples.menu.notifications" },
    { link: "elements", label: "ww.examples.menu.elements" },
    { link: "authenticated", label: "ww.examples.menu.auth", auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
