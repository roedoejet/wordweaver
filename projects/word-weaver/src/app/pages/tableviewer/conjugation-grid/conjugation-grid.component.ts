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
  // groundTruthData = [
  //   {
  //     position: 1,
  //     value: "kathsó:ris",
  //     pn: "1-sg",
  //     option: "habpres",
  //     root: "kathsó:ris",
  //     translation: "I eat soup"
  //   },
  //   {
  //     position: 1,
  //     value: "sathsó:ris",
  //     pn: "2-sg",
  //     option: "habpres",
  //     root: "kathsó:ris",
  //     translation: "You eat soup"
  //   },
  //   {
  //     position: 1,
  //     value: "wa'kathsó:ri'",
  //     pn: "1-sg",
  //     option: "defpast",
  //     root: "kathsó:ris",
  //     translation: "I ate soup"
  //   },
  //   {
  //     position: 1,
  //     value: "wahsathsó:ri'",
  //     pn: "2-sg",
  //     option: "defpast",
  //     root: "kathsó:ris",
  //     translation: "You ate soup"
  //   }
  // ];
  dataSource$: Observable<MatTableDataSource<Response>>;
  // dataSource$ = new BehaviorSubject<MatTableDataSource<any>>(
  //   this.dataSource
  // ).pipe(tap(() => this.restructureData()));
  tableOrd: TableOrder = "root";
  col: TableOrder = "option";
  row: TableOrder = "pn";
  // uniqueMain = [...new Set(this.dataSource.data.map(x => x[this.tableOrd]))];
  uniqueCol: string[];
  // uniqueRow = [...new Set(this.dataSource.data.map(x => x[this.row]))];
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
        const dataSource = new MatTableDataSource<Response>(
          this.tierService.restructureData(
            selection.conjugations,
            this.tableOrd,
            this.col,
            this.row
          )[0]
        ); // restructure data to grid format
        this.uniqueCol = [
          ...new Set(selection.conjugations.map(x => x.input[this.col]))
        ];
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

  // restructureData() {
  //   const structuredData = [];
  //   this.uniqueMain.forEach(main => {
  //     const mainData = [];
  //     const mainDataRows = this.uniqueRow.map(rowKey => {
  //       const structuredEntry = { rowKey };
  //       this.groundTruthData.forEach(entry => {
  //         if (entry[this.row] === rowKey) {
  //           structuredEntry[entry[this.col]] = entry["value"];
  //           structuredEntry[entry[this.col] + "-translation"] =
  //             entry["translation"]; // This is where tiers should go. This should be abstracted where the tier key is used to create an adhoc key in the entry to specify it to the column
  //         }
  //       });
  //       mainData.push(structuredEntry);
  //     });
  //     structuredData.push(mainData);
  //   });
  //   console.log(structuredData[0]);
  //   this.dataSource.data = structuredData[0];
  // }
}
