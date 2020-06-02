import {
  Component,
  AfterViewInit,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Renderer2
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { NotificationService } from "../../../core/core.module";
import { EChartOption } from "echarts";
import { Store, select } from "@ngrx/store";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { map, take, takeUntil, tap } from "rxjs/operators";
import { merge as _merge } from "lodash";
import {
  actionConjugationEvent,
  actionChangeTreeViewDepth,
  actionToggleTreeViewOrder,
  actionChangeGridOrder
} from "../../../core/tableviewer-selection/tableviewer-selection.actions";
import { SettingsState, State } from "../../../core/settings/settings.model";
import { TableviewerState } from "../../../core/tableviewer-selection/tableviewer-selection.model";
import { selectTableviewerState } from "../../../core/core.state";
import { selectSettings } from "../../../core/settings/settings.selectors";
import { TierService } from "../../../core/core.module";
import { TIERS, TableviewerViewModes, META } from "../../../../config/config";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { marker } from "@biesbjerg/ngx-translate-extract-marker";
import { actionSettingsChangeThemeColors } from "../../../core/settings/settings.actions";

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DownloadDialogComponent } from "../../../shared/download-dialog/download-dialog.component";
import { TableViewerDialogComponent } from "../../../shared/tableviewer-dialog/tableviewer-dialog.component";

@Component({
  selector: "ww-tableviewer-conj-panel",
  templateUrl: "./tableviewer-conj-panel.component.html",
  styleUrls: ["./tableviewer-conj-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableviewerConjPanelComponent
  implements AfterViewInit, OnDestroy, OnInit {
  // Basic config
  settings$: Observable<SettingsState>;
  selection$: Observable<TableviewerState>;
  showDelay = new FormControl(600);
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
  listData$: Observable<any>;
  unsubscribe$ = new Subject<void>();
  // Elements
  @ViewChild("header") header;
  @ViewChild("conjugate") conjugateBtn;
  constructor(
    private store: Store<State>,
    private notificationService: NotificationService,
    private tierService: TierService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // populate with store's selection
    this.settings$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectSettings)
    );
    this.selection$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectTableviewerState)
    );

    this.gridData$ = this.selection$.pipe(
      takeUntil(this.unsubscribe$),
      map(selection => {
        if (selection.view === "grid" && selection.conjugations.length > 0) {
          return this.tierService.restructureData(
            selection.conjugations,
            selection.gridOrder
          );
        } else {
          return false;
        }
      })
    );
    this.listData$ = this.selection$.pipe(
      takeUntil(this.unsubscribe$),
      map(selection => {
        if (selection.view === "list" && selection.conjugations.length > 0) {
          return this.tierService.createTiers(selection.conjugations);
        } else {
          return false;
        }
      })
    );
  }

  ngAfterViewInit() {
    // Extremely hacky way of getting ngx-echarts to style graph nodes and edges properly with themes.
    // This should be changed once ngx-echarts is updated to handle this internally.
    const primary = getComputedStyle(
      this.header.nativeElement
    ).getPropertyValue("color");
    const accent = getComputedStyle(
      this.conjugateBtn._elementRef.nativeElement
    ).getPropertyValue("background-color");
    this.store.dispatch(actionSettingsChangeThemeColors({ primary, accent }));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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

  onToggleGridOrder() {
    this.selection$
      .pipe(
        take(1),
        tap(selection => {
          this.store.dispatch(
            actionChangeGridOrder({
              name: "gridOrder",
              partial: {
                col: selection.gridOrder.row,
                row: selection.gridOrder.col
              }
            })
          );
        })
      )
      .subscribe();
  }

  onManualConjugation(event) {
    this.store.dispatch(actionConjugationEvent(event));
  }

  showSettings() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = "30vw";
    this.dialog.open(TableViewerDialogComponent, dialogConfig);
  }

  download() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = "30vw";
    this.dialog.open(DownloadDialogComponent, dialogConfig);
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
