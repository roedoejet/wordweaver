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

type TableOrder = "root" | "pn" | "option";

@Injectable({
  providedIn: "root"
})
export class TierService {
  path = environment.base + environment.prefix + `tiers`;
  TIERS = environment.config.tiers;
  constructor(private http: HttpClient, private store: Store) {}

  getTier(index) {
    return this.TIERS.filter(a => a.position === index)[0];
  }

  getRandomOption(options: Tier[]): Tier {
    return options[Math.floor(Math.random() * options.length)];
  }

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

  // Return span of either value or separator with supplied classes
  createSpan(value: string | string[] | number, classes: string[]) {
    let joinedClasses = "";
    if (classes) {
      joinedClasses = classes.join(" ");
    }
    if (typeof value === "string") {
      return `<span class='${joinedClasses}'>${value}</span>`;
    }
  }

  // Create Tiers based on API
  createTiers(conjugations: Response, tiers: Tier[] = this.TIERS) {
    return conjugations.map(conjugation => {
      const tieredConjugation = [];
      tiers.forEach(tier => {
        tieredConjugation.push({
          name: tier.name,
          options: tier.options,
          html: conjugation.output
            // filter empty
            .filter(x => x[tier.key])
            // sort by position
            .sort(function(a, b) {
              return a.position - b.position;
            })
            // create spans
            .map(x => this.createSpan(x[tier.key], x["type"]))
            // join 'em
            .join(this.createSpan(tier.separator, ["separator"]))
        });
      });
      return tieredConjugation;
    });
  }

  // Restructure data for x*y grid
  // Returns structured data along with unique values for col/row and table separators
  restructureData(
    conjugations: Response,
    main: TableOrder,
    col: TableOrder,
    row: TableOrder
  ) {
    const structuredData = [];
    const tieredConjugations = this.createTiers(conjugations).map(
      conjugation => {
        const tierObj = {};
        for (const tier of conjugation) {
          tierObj[tier["name"]] = tier["html"];
        }
        return tierObj;
      }
    );
    const restructuredConjugations = conjugations.map((x, i) => ({
      ...x.input,
      ...tieredConjugations[i],
      pn: x.input.agent + "." + x.input.patient
    }));
    const uniqueMain = [...new Set(restructuredConjugations.map(x => x[main]))];
    const uniqueRow = [...new Set(restructuredConjugations.map(x => x[row]))];
    const uniqueCol = [...new Set(restructuredConjugations.map(x => x[col]))];
    uniqueMain.forEach(() => {
      const mainData = [];
      const mainDataRows = uniqueRow.map(rowKey => {
        const structuredEntry = { rowKey };
        restructuredConjugations.forEach(entry => {
          if (entry[row] === rowKey) {
            for (const tier of this.TIERS) {
              if (tier.name === "display") {
                structuredEntry[entry[col]] = entry["display"];
              } else {
                structuredEntry[entry[col] + "-" + tier.name] =
                  entry[tier.name];
              }
            }
          }
        });
        mainData.push(structuredEntry);
      });
      structuredData.push(mainData);
    });
    return { structuredData, uniqueMain, uniqueCol, uniqueRow };
  }
}
