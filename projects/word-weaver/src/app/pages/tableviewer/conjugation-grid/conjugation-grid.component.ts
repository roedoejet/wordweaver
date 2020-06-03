import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
  QueryList,
  ViewChildren
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Response, TIERS, Tier } from "../../../../config/config";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { takeUntil, distinctUntilChanged, map } from "rxjs/operators";
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
  displayTier = TIERS[0];
  tiers$: Observable<Tier[]>;
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
    this.tiers$ = this.settings$.pipe(
      takeUntil(this.unsubscribe$),
      map(settings => TIERS.filter(tier => settings.level[tier.name]))
    );
    this.data$
      .pipe(takeUntil(this.unsubscribe$), distinctUntilChanged())
      .subscribe(data => {
        if (data) {
          this.uniqueCol = data.uniqueCol;
          this.uniqueMain = data.uniqueMain;
          this.dataSources = data.structuredData.map(() => {
            const dataSource = new MatTableDataSource<Response>();
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
          this.dataSources[i].data = x;
        });
      }
      // this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
