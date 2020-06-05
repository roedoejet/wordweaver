import { Observable, of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Response } from "../../../config/config";
import { Tier } from "../../../config/config";
import { TableviewerState } from "../tableviewer-selection/tableviewer-selection.model";
import { WordmakerState } from "../wordmaker-selection/wordmaker-selection.model";
import { select, Store } from "@ngrx/store";
import { actionChangeLoading } from "../tableviewer-selection/tableviewer-selection.actions";
import { selectSettingsState } from "../core.state";
import { SettingsState } from "../settings/settings.model";
import { GridOrder } from "../../pages/tableviewer/conjugation-grid/conjugation-grid.component";

@Injectable({
  providedIn: "root"
})
export class TierService {
  TIERS = environment.config.tiers;
  constructor(private http: HttpClient, private store: Store) {}

  getRandomOption(options: Tier[]): Tier {
    return options[Math.floor(Math.random() * options.length)];
  }

  // FIXME: Not working with TableViewer
  createRequestQueryArgs(selection) {
    const params = new URLSearchParams();
    ["option", "agent", "patient", "root"].forEach(x => {
      if (selection[x]) {
        params.append(x, selection[x].tag);
      }
    });
    return params;
  }

  conjugate$(selection: TableviewerState | WordmakerState) {
    const queryArgs = this.createRequestQueryArgs(selection);
    return this.store.pipe(
      select(selectSettingsState),
      switchMap((settings: SettingsState) =>
        this.http
          .get(settings.baseUrl + "conjugations?" + queryArgs.toString())
          .pipe(catchError(err => of(err)))
      )
    );
  }

  // Restructure data for x*y grid
  // Returns structured data along with unique values for col/row and table separators
  restructureData(conjugations: Response, gridOrder: GridOrder) {
    const main = gridOrder.main;
    const row = gridOrder.row;
    const col = gridOrder.col;
    const structuredData = [];
    const restructuredConjugations = conjugations.map(x => ({
      ...x.input,
      ...x,
      pn: x.input.agent + "." + x.input.patient
    }));
    const uniqueMain = [...new Set(restructuredConjugations.map(x => x[main]))];
    const uniqueRow = [...new Set(restructuredConjugations.map(x => x[row]))];
    const uniqueCol = [...new Set(restructuredConjugations.map(x => x[col]))];
    uniqueMain.forEach(mainKey => {
      const mainData = [];
      const mainDataRows = uniqueRow.map(rowKey => {
        const structuredEntry = { rowKey };
        restructuredConjugations.forEach(entry => {
          if (entry[main] === mainKey && entry[row] === rowKey) {
            structuredEntry[entry[col]] = entry;
          }
        });
        mainData.push(structuredEntry);
      });
      structuredData.push(mainData);
    });
    return { structuredData, uniqueMain, uniqueCol, uniqueRow };
  }
}
