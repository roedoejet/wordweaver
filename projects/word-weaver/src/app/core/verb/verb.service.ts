import {
  HttpClient,
  HttpContext,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, retry, shareReplay, switchMap } from "rxjs/operators";

import { Verb } from "../../../config/config";
import { selectSettingsState } from "../core.state";
import { SUPPRESS_ERROR } from "../http-interceptors/http-error.interceptor";
import { SettingsState } from "../settings/settings.model";

@Injectable({
  providedIn: "root"
})
export class VerbService {
  verbs: Verb[];
  path = "verbs.json.gz";
  verbs$: Observable<Verb[]>;
  random$: Observable<Verb>;
  suppressError = true;
  constructor(private http: HttpClient, private store: Store) {
    this.verbs$ = this.store.pipe(
      select(selectSettingsState),
      switchMap((settings: SettingsState) =>
        this.http.get<Verb[]>(settings.baseUrl + this.path, {
          context: new HttpContext().set(SUPPRESS_ERROR, this.suppressError)
        })
      ),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404 && error.url.endsWith("gz")) {
          // Try falling back to uncompressed url
          this.path = "verbs.json";
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
    this.verbs$.subscribe((verbs) => (this.verbs = verbs));
    this.random$ = this.verbs$.pipe(
      map((res) => {
        return this.getRandomOption(res);
      })
    );
  }

  getRandomOption(options: Verb[]): Verb {
    return options[Math.floor(Math.random() * options.length)];
  }

  getVerb(tag) {
    return this.verbs.filter((v) => v.tag === tag)[0];
  }
}
