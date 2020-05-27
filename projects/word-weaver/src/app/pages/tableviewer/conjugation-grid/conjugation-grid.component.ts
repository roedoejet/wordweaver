import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject } from "rxjs";
import { map, tap } from "rxjs/operators";

type TableOrder = "root" | "pn" | "option";

@Component({
  selector: "ww-conjugation-grid",
  templateUrl: "./conjugation-grid.component.html",
  styleUrls: ["./conjugation-grid.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConjugationGridComponent implements OnInit {
  groundTruthData = [
    {
      position: 1,
      value: "kathsó:ris",
      pn: "1-sg",
      option: "habpres",
      root: "kathsó:ris",
      translation: "I eat soup"
    },
    {
      position: 1,
      value: "sathsó:ris",
      pn: "2-sg",
      option: "habpres",
      root: "kathsó:ris",
      translation: "You eat soup"
    },
    {
      position: 1,
      value: "wa'kathsó:ri'",
      pn: "1-sg",
      option: "defpast",
      root: "kathsó:ris",
      translation: "I ate soup"
    },
    {
      position: 1,
      value: "wahsathsó:ri'",
      pn: "2-sg",
      option: "defpast",
      root: "kathsó:ris",
      translation: "You ate soup"
    }
  ];
  dataSource = new MatTableDataSource(this.groundTruthData);
  dataSource$ = new BehaviorSubject<MatTableDataSource<any>>(
    this.dataSource
  ).pipe(tap(() => this.restructureData()));
  tableOrd: TableOrder = "root";
  col: TableOrder = "option";
  row: TableOrder = "pn";
  uniqueMain = [...new Set(this.dataSource.data.map(x => x[this.tableOrd]))];
  uniqueCol = [...new Set(this.dataSource.data.map(x => x[this.col]))];
  uniqueRow = [...new Set(this.dataSource.data.map(x => x[this.row]))];
  displayedColumns = ["placeholder", ...this.uniqueCol];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  restructureData() {
    const structuredData = [];
    this.uniqueMain.forEach(main => {
      const mainData = [];
      const mainDataRows = this.uniqueRow.map(rowKey => {
        const structuredEntry = { rowKey };
        this.groundTruthData.forEach(entry => {
          if (entry[this.row] === rowKey) {
            structuredEntry[entry[this.col]] = entry["value"];
            structuredEntry[entry[this.col] + "-translation"] =
              entry["translation"]; // This is where tiers should go. This should be abstracted where the tier key is used to create an adhoc key in the entry to specify it to the column
          }
        });
        mainData.push(structuredEntry);
      });
      structuredData.push(mainData);
    });
    console.log(structuredData[0]);
    this.dataSource.data = structuredData[0];
  }
}
