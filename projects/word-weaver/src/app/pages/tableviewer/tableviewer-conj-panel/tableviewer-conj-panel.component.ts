import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ConjugationService } from "../../../core/core.module";
import { NotificationService } from "../../../core/core.module";
import { EChartOption } from "echarts";
import { Store, select } from "@ngrx/store";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { map, tap } from "rxjs/operators";
import { merge as _merge } from "lodash";
import {
  actionConjugationEvent,
  actionChangeTreeViewDepth,
  actionToggleTreeViewOrder,
  actionToggleGridView
} from "../../../core/tableviewer-selection/tableviewer-selection.actions";
import { SettingsState, State } from "../../../core/settings/settings.model";
import { TableviewerState } from "../../../core/tableviewer-selection/tableviewer-selection.model";
import { selectTableviewer } from "../../../core/tableviewer-selection/tableviewer-selection.selectors";
import { selectSettings } from "../../../core/settings/settings.selectors";
import {
  AffixService,
  PronounService,
  VerbService
} from "../../../core/core.module";
import { Response, Tier, TIERS } from "../../../models/models";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { marker } from "@biesbjerg/ngx-translate-extract-marker";

@Component({
  selector: "ww-tableviewer-conj-panel",
  templateUrl: "./tableviewer-conj-panel.component.html",
  styleUrls: ["./tableviewer-conj-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableviewerConjPanelComponent implements OnInit {
  // Basic config
  settings$: Observable<SettingsState>;
  selection$: Observable<TableviewerState>;
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(200);
  tooltipPosition = "above";
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  // Non-reactive states
  loading = false;
  show_toolbar = true;
  // Reactive conjugation triggers
  showExplorer$ = new BehaviorSubject<boolean>(false);
  manualConjugation$ = new Subject<any>();
  order$ = new BehaviorSubject<boolean>(true);
  depth$ = new BehaviorSubject<number>(1);
  conjugationTrigger$: Observable<any>;
  chartResponse$: Observable<EChartOption | any>;
  gridData$: Observable<any>;
  // Elements
  @ViewChild("explorer") explorer;
  constructor(
    private store: Store<State>,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    // populate with store's selection
    this.settings$ = this.store.pipe(select(selectSettings));
    this.selection$ = this.store.pipe(select(selectTableviewer));

    this.gridData$ = this.selection$.pipe(
      map(selection => {
        if (selection.gridView && selection.conjugations.length > 0) {
          return this.createTiers(selection.conjugations);
        } else {
          return false;
        }
      })
    );
  }

  // Return span of either value or separator with supplied classes
  createSpan(value: string | string[] | number, classes: string[]) {
    let joinedClasses = "";
    if (classes) {
      joinedClasses = classes.join(" ");
    }
    if (typeof value === "string") {
      return `<span class='${joinedClasses}'>${value}</span>`;
    }
  }

  // Create Tiers based on API
  createTiers(conjugations: Response, tiers: Tier[] = TIERS) {
    return conjugations.map(conjugation => {
      const tieredConjugation = [];
      tiers.forEach(tier => {
        tieredConjugation.push({
          name: tier.name,
          options: tier.options,
          html: conjugation.output
            // filter empty
            .filter(x => x[tier.key])
            // sort by position
            .sort(function(a, b) {
              return a.position - b.position;
            })
            // create spans
            .map(x => this.createSpan(x[tier.key], x["type"]))
            // join 'em
            .join(this.createSpan(tier.separator, ["separator"]))
        });
      });
      return tieredConjugation;
    });
  }

  onChangeTreeDepth(event) {
    this.store.dispatch(
      actionChangeTreeViewDepth({ treeDepth: event.target.selectedIndex })
    );
  }

  onToggleTreeOrder() {
    this.store.dispatch(
      actionToggleTreeViewOrder({ name: "standardTreeOrder" })
    );
  }

  onToggleGridView() {
    this.store.dispatch(actionToggleGridView({ name: "gridView" }));
  }

  onManualConjugation(event) {
    this.store.dispatch(actionConjugationEvent(event));
  }

  // TODO: This is currently used for determining whether gridData is an error. This is fragile, and errors should be handled differently.
  isString(val) {
    return typeof val === "string";
  }

  // TODO: ngrx
  download() {
    this.selection$
      .pipe(
        tap(selection => console.log(selection))
        // Make args
        // map(selection => this.conjugationService.createRequestUrl(selection).toString()),
        // // Get Request
        // switchMap(httpargs => {
        //   const url = this.conjugationService.path + '?' + httpargs;
        //   return this.http.get(url).pipe(
        //     catchError((err) => { this.updateToast(false, err.status); return of(err) })
        //   )
        // }),
        // tap(url => { window.location.href = url + '&docx=true'; this.updateToast(true) })
      )
      .subscribe();
    // const query_args = this.conjugationService
    //   .createRequestUrl(this.selectionService.selection)
    //   .toString();
    // const query_args_docx = this.conjugationService
    //   .createRequestUrl(this.selectionService.selection, [
    //     { param: "docx", value: "true" }
    //   ])
    //   .toString();
    // const url = this.conjugationService.path + "?" + query_args;
    // const docx_url = this.conjugationService.path + "?" + query_args_docx;
    // this.http.get(url).subscribe(
    //   data => {
    //     console.log(data);
    //     window.location.href = docx_url;
    //     this.updateToast(data);
    //   },
    //   error => {
    //     console.log(error);
    //     this.updateToast(false, error.status);
    //   }
    // );
  }

  updateToast(success?, code = 200) {
    if (success) {
      this.notificationService.translated(
        marker("ww.tableviewer.notifications.download.success"),
        {},
        "success"
      );
    } else {
      this.notificationService.translated(
        marker("ww.tableviewer.notifications.download.error"),
        {},
        "error"
      );
    }
  }
}
