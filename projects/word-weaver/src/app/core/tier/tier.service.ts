import { Observable, of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Response, Tier, TIERS } from "../../models/models";
import { TableviewerState } from "../tableviewer-selection/tableviewer-selection.model";
import { WordmakerState } from "../wordmaker-selection/wordmaker-selection.model";
import { select, Store } from "@ngrx/store";
import { actionChangeLoading } from "../tableviewer-selection/tableviewer-selection.actions";
import { selectSettingsState } from "../core.state";
import { SettingsState } from "../settings/settings.model";

@Injectable({
  providedIn: "root"
})
export class TierService {
  tiers$ = new Observable<Tier[]>();
  path = environment.base + environment.prefix + `tiers`;
  TIERS = TIERS;
  random$ = this.tiers$.pipe(map(res => this.getRandomOption(res)));
  constructor(private http: HttpClient, private store: Store) {
    this.tiers$ = this.http.get<Tier[]>(this.path);
    this.tiers$.subscribe(d => (this.TIERS = d));
  }

  getTier(index) {
    return this.TIERS.filter(a => a.position === index)[0];
  }

  getRandomOption(options: Tier[]): Tier {
    return options[Math.floor(Math.random() * options.length)];
  }

  createRequestQueryArgs(selection) {
    let params = new URLSearchParams();
    ["option", "agent", "patient", "root"].forEach(x => {
      if (selection[x]) {
        params.append(x, selection[x].tag);
      }
    });
    return params;
  }

  conjugate$(selection: TableviewerState | WordmakerState) {
    const queryArgs = this.createRequestQueryArgs(selection);
    console.log(queryArgs);
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
        console.log(tier);
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
}
