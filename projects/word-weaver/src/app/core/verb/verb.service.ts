import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, throwError } from "rxjs";
import { map, shareReplay, switchMap, retry, catchError } from "rxjs/operators";

import { Verb } from "../../../config/config";
import { selectSettingsState } from "../core.state";
import { SettingsState } from "../settings/settings.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class VerbService {
  verbs: Verb[];
  path = environment.usePrecompressedData ? "verbs.json.gz" : "verbs.json";
  verbs$: Observable<Verb[]>;
  random$: Observable<Verb>;
  suppressError = true;
  constructor(private http: HttpClient, private store: Store) {
    this.verbs$ = this.store.pipe(
      select(selectSettingsState),
      switchMap((settings: SettingsState) =>
        this.http.get<Verb[]>(settings?.baseUrl + this.path)
      ),
      retry(2),
      shareReplay(1),
      catchError((err) => {
        console.error("Failed to load verbs", err);
        return throwError(() => err); // let error propagate
      })
    );
    this.verbs$.subscribe((verbs) => (this.verbs = verbs));
    this.random$ = this.verbs$.pipe(map((res) => this.getRandomOption(res)));
  }

  getRandomOption(options: Verb[]): Verb {
    return options[Math.floor(Math.random() * options.length)];
  }

  getVerb(tag) {
    return this.verbs.filter((v) => v.tag === tag)[0];
  }
}
