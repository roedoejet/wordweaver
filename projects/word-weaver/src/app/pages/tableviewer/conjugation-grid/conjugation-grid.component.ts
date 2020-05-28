import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject, Subject, Observable } from "rxjs";
import { map, tap, takeUntil } from "rxjs/operators";
import { Response } from "../../../../config/config";
import { Store, select } from "@ngrx/store";
import { selectTableviewer } from "../../../core/tableviewer-selection/tableviewer-selection.selectors";
import { TierService } from "../../../core/core.module";
import { TableviewerState } from "../../../core/tableviewer-selection/tableviewer-selection.model";

type TableOrder = "root" | "pn" | "option";

@Component({
  selector: "ww-conjugation-grid",
  templateUrl: "./conjugation-grid.component.html",
  styleUrls: ["./conjugation-grid.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConjugationGridComponent implements OnDestroy, OnInit {
  dataSource$: Observable<MatTableDataSource<Response>>;
  tableOrd: TableOrder = "root";
  col: TableOrder = "option";
  row: TableOrder = "pn";
  uniqueCol: string[];
  displayedColumns: string[];
  selection$: Observable<TableviewerState>;
  unsubscribe$ = new Subject<void>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private store: Store, private tierService: TierService) {}

  ngOnInit(): void {
    this.selection$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectTableviewer)
    );
    this.dataSource$ = this.selection$.pipe(
      map(selection => {
        const restructuredData = this.tierService.restructureData(
          selection.conjugations,
          this.tableOrd,
          this.col,
          this.row
        );
        const dataSource = new MatTableDataSource<Response>(
          restructuredData.structuredData[0]
        ); // restructure data to grid format
        this.uniqueCol = restructuredData.uniqueCol;
        this.displayedColumns = ["placeholder", ...this.uniqueCol];
        dataSource.paginator = this.paginator; // add paginator
        return dataSource;
      })
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
