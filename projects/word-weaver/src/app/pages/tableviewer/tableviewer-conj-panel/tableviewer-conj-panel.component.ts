import { Clipboard } from "@angular/cdk/clipboard";
import { LocationStrategy } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { marker } from "@biesbjerg/ngx-translate-extract-marker";
import { select, Store } from "@ngrx/store";
import { EChartsOption } from "echarts";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { map, take, takeUntil } from "rxjs/operators";
import {
  ConjugationService,
  NotificationService,
  ROUTE_ANIMATIONS_ELEMENTS
} from "../../../core/core.module";
import { actionSettingsChangeThemeColors } from "../../../core/settings/settings.actions";
import { SettingsState, State } from "../../../core/settings/settings.model";
// import { selectTableviewerGridState } from '../../../core/tableviewer-selection/tableviewer-selection.selectors';
import { selectSettings } from "../../../core/settings/settings.selectors";
import {
  actionChangeGridOrder,
  actionChangeTreeViewDepth,
  actionConjugationEvent,
  actionToggleTreeViewOrder
} from "../../../core/tableviewer-selection/tableviewer-selection.actions";
import { createRequestQueryArgs } from "../../../core/tableviewer-selection/tableviewer-selection.effects";
import { TableviewerState } from "../../../core/tableviewer-selection/tableviewer-selection.model";
import {
  selectTableviewer,
  selectTableviewerGridSlice,
  selectTableviewerListSlice,
  selectTableViewerLoading,
  selectTableviewerTreeSlice
} from "../../../core/tableviewer-selection/tableviewer-selection.selectors";
import { DownloadDialogComponent } from "../../../shared/download-dialog/download-dialog.component";
import { TableViewerDialogComponent } from "../../../shared/tableviewer-dialog/tableviewer-dialog.component";
import { GridOrderOptions } from "../conjugation-grid/conjugation-grid.component";
import { environment } from "../../../../environments/environment";

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
  gridDataState$: Observable<Partial<TableviewerState>>;
  listDataState$: Observable<Partial<TableviewerState>>;
  treeDataState$: Observable<Partial<TableviewerState>>;
  showDelay = new FormControl(600);
  hideDelay = new FormControl(200);
  tooltipPosition = "above";
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  // Non-reactive states
  loading$: Observable<boolean>;
  show_toolbar = true;
  // Reactive conjugation triggers
  showExplorer$ = new BehaviorSubject<boolean>(false);
  manualConjugation$ = new Subject<any>();
  order$ = new BehaviorSubject<boolean>(true);
  depth$ = new BehaviorSubject<number>(1);
  conjugationTrigger$: Observable<any>;
  chartResponse$: Observable<EChartsOption | any>;
  gridData$: Observable<any>;
  listData$: Observable<any>;
  treeData$: Observable<any>;
  unsubscribe$ = new Subject<void>();
  serverless = environment.serverless;
  // Elements
  @ViewChild("header") header;
  @ViewChild("conjugate") conjugateBtn;
  constructor(
    private store: Store<State>,
    private notificationService: NotificationService,
    private conjugationService: ConjugationService,
    private dialog: MatDialog,
    private clipboard: Clipboard,
    private locationStrategy: LocationStrategy
  ) {}

  ngOnInit(): void {
    // populate with store's selection
    this.settings$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectSettings)
    );
    this.selection$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectTableviewer)
    );
    this.listDataState$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectTableviewerListSlice)
    );
    this.gridDataState$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectTableviewerGridSlice)
    );
    this.treeDataState$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectTableviewerTreeSlice)
    );
    this.loading$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectTableViewerLoading)
    );

    this.gridData$ = this.gridDataState$.pipe(
      takeUntil(this.unsubscribe$),
      map(gridState => {
        if (gridState.view === "grid" && gridState.conjugations.length > 0) {
          return this.conjugationService.restructureData(
            gridState.conjugations,
            gridState.gridOrder
          );
        } else {
          return false;
        }
      })
    );

    this.listData$ = this.listDataState$.pipe(
      takeUntil(this.unsubscribe$),
      map(listState => {
        if (listState.view === "list" && listState.conjugations.length > 0) {
          return listState.conjugations;
        } else {
          return false;
        }
      })
    );

    this.treeData$ = this.treeDataState$.pipe(
      takeUntil(this.unsubscribe$),
      map(treeState => {
        const conjugationsLength = treeState.conjugations.length;
        if (treeState.view === "tree" && conjugationsLength > 0) {
          if (conjugationsLength > 50) {
            this.notificationService.translated(
              marker(
                "ww.pages.tableviewer.notifications.treeviewer-length.error"
              ),
              { value: conjugationsLength },
              "error"
            );
          }
          return treeState;
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
    console.log(event);
    this.store.dispatch(actionChangeTreeViewDepth({ treeDepth: event.value }));
  }

  onToggleTreeOrder() {
    this.store.dispatch(
      actionToggleTreeViewOrder({ name: "standardTreeOrder" })
    );
  }

  onSwapGridOrder(row: GridOrderOptions, col: GridOrderOptions) {
    this.gridData$.pipe(take(1)).subscribe(gridData => {
      if (gridData.uniqueRow.length > 80) {
        this.notificationService.translated(
          marker("ww.pages.tableviewer.notifications.gridOrder.limit-error"),
          { value: gridData.uniqueRow.length },
          "error"
        );
      } else {
        this.store.dispatch(
          actionChangeGridOrder({
            name: "gridOrder",
            partial: {
              col: row,
              row: col
            }
          })
        );
      }
    });
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

  copyLink() {
    this.selection$.pipe(take(1)).subscribe(selection => {
      const params = createRequestQueryArgs(selection);
      // Add other relevant params
      params.append("view", selection["view"]);
      params.append("depth", selection["treeDepth"].toString());
      params.append(
        "grid-order",
        [
          selection["gridOrder"]["main"],
          selection["gridOrder"]["row"],
          selection["gridOrder"]["col"]
        ].join(",")
      );
      const result = this.clipboard.copy(
        window["location"]["href"].split("?")[0] + "?" + params.toString()
      );
      if (result) {
        this.notificationService.translated(
          marker("ww.pages.tableviewer.notifications.copy.success"),
          {},
          "success"
        );
      } else {
        this.notificationService.translated(
          marker("ww.pages.tableviewer.notifications.copy.error"),
          {},
          "error"
        );
      }
    });
  }

  updateToast(success?, code = 200) {
    if (success) {
      this.notificationService.translated(
        marker("ww.pages.tableviewer.notifications.download.success"),
        {},
        "success"
      );
    } else {
      this.notificationService.translated(
        marker("ww.pages.tableviewer.notifications.download.error"),
        {},
        "error"
      );
    }
  }
}
