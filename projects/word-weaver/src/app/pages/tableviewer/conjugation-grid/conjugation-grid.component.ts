import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
  QueryList,
  ViewChildren
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
export class ConjugationGridComponent
  implements AfterViewInit, OnDestroy, OnInit {
  keys = Object.keys;
  settings$: Observable<SettingsState>;
  dataSources: MatTableDataSource<Response>[];
  uniqueCol: string[];
  uniqueMain: string[];
  displayedColumns: string[];
  unsubscribe$ = new Subject<void>();
  @Input() data$;
  @ViewChildren(MatPaginator) paginators: QueryList<MatPaginator>;
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
        this.dataSources = data.structuredData.map((x, i) => {
          const dataSource = new MatTableDataSource<Response>(x);
          return dataSource;
        });
        this.displayedColumns = ["placeholder", ...this.uniqueCol];
        this.cdr.detectChanges();
      }
    });
  }

  ngAfterViewInit(): void {
    this.data$.pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
      if (data) {
        data.structuredData.forEach((x, i) => {
          this.dataSources[i].paginator = this.paginators.toArray()[i]; // Currently not working for n>1
        });
        this.cdr.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
