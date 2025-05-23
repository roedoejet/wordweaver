import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, throwError } from "rxjs";
import { map, shareReplay, switchMap, retry, catchError } from "rxjs/operators";

import { Pronoun } from "../../../config/config";
import { selectSettingsState } from "../core.state";
import { SettingsState } from "../settings/settings.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class PronounService {
  path = environment.usePrecompressedData
    ? "pronouns.json.gz"
    : "pronouns.json";
  pronouns: Pronoun[];
  pronouns$: Observable<Pronoun[]>;
  random$: Observable<Pronoun>;
  suppressError = true;
  constructor(private http: HttpClient, private store: Store) {
    this.pronouns$ = this.store.pipe(
      select(selectSettingsState),
      switchMap((settings: SettingsState) =>
        this.http.get<Pronoun[]>(settings?.baseUrl + this.path)
      ),
      retry(2),
      shareReplay(1),
      catchError((err) => {
        console.error("Failed to load pronouns", err);
        return throwError(() => err); // let error propagate
      })
    );
    this.random$ = this.pronouns$.pipe(map((res) => this.getRandomPro(res)));
    this.pronouns$.subscribe((pns) => (this.pronouns = pns));
  }
  getPronoun(tag) {
    return this.pronouns.filter((p) => p.tag === tag)[0];
  }

  getRandomPro(options: Pronoun[]): Pronoun {
    return options[Math.floor(Math.random() * options.length)];
  }
}
