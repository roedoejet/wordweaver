import {
  HttpClient,
  HttpContext,
  HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, retry, shareReplay, switchMap } from "rxjs/operators";

import { Option } from "../../../config/config";
import { selectSettingsState } from "../core.state";
import { SUPPRESS_ERROR } from "../http-interceptors/http-error.interceptor";
import { SettingsState } from "../settings/settings.model";

@Injectable({
  providedIn: "root",
})
export class OptionService {
  path = "options.json.gz";
  options;
  options$: Observable<Option[]>;
  optionsByType$: Observable<object[]>;
  random$: Observable<Option>;
  suppressError = true;
  constructor(private http: HttpClient, private store: Store) {
    this.options$ = this.store.pipe(
      select(selectSettingsState),
      switchMap((settings: SettingsState) =>
        this.http.get<Option[]>(settings.baseUrl + this.path, {
          context: new HttpContext().set(SUPPRESS_ERROR, this.suppressError),
        })
      ),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404 && error.url.endsWith("gz")) {
          // Try falling back to uncompressed url
          this.path = "options.json";
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
    this.optionsByType$ = this.options$.pipe(
      map((options) => {
        const optionTypes = [...new Set(options.map((x) => x.type))];
        const optionsByType = [];
        optionTypes
          .filter((x) => x)
          .forEach((x) =>
            optionsByType.push({
              type: x,
              options: options.filter((y) => y.type === x),
            })
          );
        return optionsByType;
      })
    );
    this.random$ = this.options$.pipe(map((res) => this.getRandomOption(res)));
    this.options$.subscribe((o) => (this.options = o));
  }

  optionsUseType$(): Observable<boolean> {
    return this.options$.pipe(
      map((options) => options.some((option) => option.type))
    );
  }

  getOption(tag) {
    return this.options.filter((a) => a.tag === tag)[0];
  }

  getRandomOption(options: Option[]): Option {
    return options[Math.floor(Math.random() * options.length)];
  }
}
