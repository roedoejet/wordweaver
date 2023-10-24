import {
  HttpClient,
  HttpContext,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, retry, shareReplay, switchMap } from "rxjs/operators";

import { Pronoun } from "../../../config/config";
import { selectSettingsState } from "../core.state";
import { SUPPRESS_ERROR } from "../http-interceptors/http-error.interceptor";
import { SettingsState } from "../settings/settings.model";

@Injectable({
  providedIn: "root"
})
export class PronounService {
  path = "pronouns.json.gz";
  pronouns: Pronoun[];
  pronouns$: Observable<Pronoun[]>;
  random$: Observable<Pronoun>;
  suppressError = true;
  constructor(private http: HttpClient, private store: Store) {
    this.pronouns$ = this.store.pipe(
      select(selectSettingsState),
      switchMap((settings: SettingsState) =>
        this.http.get<Pronoun[]>(settings.baseUrl + this.path, {
          context: new HttpContext().set(SUPPRESS_ERROR, this.suppressError)
        })
      ),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404 && error.url.endsWith("gz")) {
          // Try falling back to uncompressed url
          this.path = "pronouns.json";
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
