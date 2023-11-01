import {
  HttpClient,
  HttpContext,
  HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, retry, shareReplay, switchMap } from "rxjs/operators";

import {
  ConjugationObject,
  Conjugations,
  Option,
  Pronoun,
  Verb,
} from "../../../config/config";
import { GridOrder } from "../../pages/tableviewer/conjugation-grid/conjugation-grid.component";
import { selectSettingsState } from "../core.state";
import { SUPPRESS_ERROR } from "../http-interceptors/http-error.interceptor";
import { SettingsState } from "../settings/settings.model";
import { TableviewerState } from "../tableviewer-selection/tableviewer-selection.model";
import { WordmakerState } from "../wordmaker-selection/wordmaker-selection.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ConjugationService {
  conjugations;
  conjugations$: Observable<Conjugations>;
  random$: Observable<ConjugationObject>;
  path = environment.production ? "conjugations.json.gz" : "conjugations.json";
  suppressError = true;
  constructor(private http: HttpClient, private store: Store) {
    this.conjugations$ = this.store.pipe(
      select(selectSettingsState),
      switchMap((settings: SettingsState) =>
        this.http.get<Conjugations>(settings.baseUrl + this.path, {
          context: new HttpContext().set(SUPPRESS_ERROR, this.suppressError),
        })
      ),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404 && error.url.endsWith("gz")) {
          // Try falling back to uncompressed url
          this.path = "conjugations.json";
          this.suppressError = false;
          return throwError(
            () =>
              new Error(
                "compressed file not found, falling back to uncompressed version."
              )
          );
        } else {
          return throwError(() => of(error));
        }
      }),
      retry(1),
      shareReplay(1)
    );
    this.random$ = this.conjugations$.pipe(
      map((res) => this.getRandomOption(res))
    );
  }

  getRandomOption(options: Conjugations): ConjugationObject {
    return options[Math.floor(Math.random() * options.length)];
  }

  // FIXME: Not working with TableViewer
  createRequestQueryArgs(selection) {
    const params = new URLSearchParams();
    ["option", "agent", "patient", "root"].forEach((x) => {
      if (selection[x]) {
        params.append(x, selection[x].tag);
      }
    });
    return params;
  }

  filterConjugations(
    conjugations: Conjugations,
    selection: TableviewerState | WordmakerState
  ) {
    const filterValues = { root: [], option: [], agent: [], patient: [] };
    ["option", "agent", "patient", "root"].forEach((x) => {
      if (selection[x]) {
        if (Array.isArray(selection[x])) {
          filterValues[x] = filterValues[x].concat(
            selection[x].map((y: Verb | Pronoun | Option) => y.tag)
          );
        } else {
          filterValues[x].push(selection[x].tag);
        }
      }
    });
    return conjugations.filter((x) =>
      ["option", "agent", "patient", "root"].every(
        (k) =>
          filterValues[k].length === 0 ||
          filterValues[k].indexOf(x.input[k]) > -1
      )
    );
  }

  conjugate$(selection: TableviewerState | WordmakerState) {
    return this.conjugations$.pipe(
      map((conjugations) => this.filterConjugations(conjugations, selection))
    );
  }

  returnPronounGridDisplay(agent, patient) {
    if (agent && patient) {
      return agent + " → " + patient;
    } else if (agent) {
      return agent;
    } else if (patient) {
      return patient;
    }
  }

  // Restructure data for x*y grid
  // Returns structured data along with unique values for col/row and table separators
  restructureData(conjugations: Conjugations, gridOrder: GridOrder) {
    const main = gridOrder.main;
    const row = gridOrder.row;
    const col = gridOrder.col;
    const structuredData = [];
    const restructuredConjugations = conjugations.map((x) => ({
      ...x.input,
      ...x,
      pn: this.returnPronounGridDisplay(x.input.agent, x.input.patient),
    }));
    const uniqueMain = [
      ...new Set(restructuredConjugations.map((x) => x[main])),
    ];
    const uniqueRow = [...new Set(restructuredConjugations.map((x) => x[row]))];
    const uniqueCol = [...new Set(restructuredConjugations.map((x) => x[col]))];
    uniqueMain.forEach((mainKey) => {
      const mainData = [];
      uniqueRow.forEach((rowKey) => {
        const structuredEntry = { rowKey };
        restructuredConjugations.forEach((entry) => {
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
