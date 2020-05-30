import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Response } from "../../../../config/config";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { SettingsState, State } from "../../../core/settings/settings.model";
import { Store, select } from "@ngrx/store";
import { selectSettings } from "../../../core/settings/settings.selectors";

export type GridOrderOptions = "root" | "pn" | "option";
export interface GridOrder {
  main: GridOrderOptions;
  row: GridOrderOptions;
  col: GridOrderOptions;
}

@Component({
  selector: "ww-conjugation-grid",
  templateUrl: "./conjugation-grid.component.html",
  styleUrls: ["./conjugation-grid.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConjugationGridComponent implements OnDestroy, OnInit {
  keys = Object.keys;
  settings$: Observable<SettingsState>;
  dataSources: MatTableDataSource<Response>[];
  uniqueCol: string[];
  uniqueMain: string[];
  displayedColumns: string[];
  unsubscribe$ = new Subject<void>();
  @Input() data$;
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private store: Store<State>, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.settings$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectSettings)
    );
    this.data$.pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
      if (data) {
        this.uniqueCol = data.uniqueCol;
        this.uniqueMain = data.uniqueMain;
        this.dataSources = data.structuredData.map(x => {
          const dataSource = new MatTableDataSource<Response>(x);
          // dataSource.paginator = this.paginator; // TODO: Paginator is broken :(
          return dataSource;
        });
        this.displayedColumns = ["placeholder", ...this.uniqueCol];
        this.cdr.detectChanges();
        // this.dataSource.paginator = this.paginator
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
