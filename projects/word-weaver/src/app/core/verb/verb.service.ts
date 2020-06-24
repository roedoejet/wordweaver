import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { combineLatest, Observable, of, zip } from "rxjs";
import {
  distinctUntilChanged,
  map,
  shareReplay,
  switchMap,
  take
} from "rxjs/operators";
import { Verb } from "../../../config/config";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class VerbService {
  verbs: Verb[];
  path = environment.base + environment.prefix + `verbs`;
  verbs$: Observable<Verb[]>;
  random$: Observable<Verb>;
  constructor(private http: HttpClient, private translate: TranslateService) {
    this.verbs$ = this.http.get<Verb[]>(this.path).pipe(shareReplay(1));
    this.verbs$.subscribe(verbs => (this.verbs = verbs));
    this.random$ = this.verbs$.pipe(
      map(res => {
        return this.getRandomOption(res);
      })
    );
  }

  translateVerbs$() {
    return this.verbs$.pipe(
      switchMap(verbs =>
        zip(
          of(verbs),
          combineLatest(
            verbs.map((verb: Verb) =>
              this.translate.get("ww-data.verbs." + verb.tag)
            )
          )
        )
      ),
      map(verbs =>
        verbs[0].map((verb, index) => {
          verb["translation"] = verbs[1][index];
          return verb;
        })
      ),
      take(1)
    );
  }

  getRandomOption(options: Verb[]): Verb {
    return options[Math.floor(Math.random() * options.length)];
  }

  getVerb(tag) {
    return this.verbs.filter(v => v.tag === tag)[0];
  }

  searchEntries(terms: Observable<string>) {
    return terms.pipe(
      // debounceTime(100),
      distinctUntilChanged(),
      map(val =>
        this.verbs.filter(verb => {
          if (val && val.length > 2) {
            return (
              verb.gloss.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
              verb.tag.toLowerCase().indexOf(val.toLowerCase()) > -1
            );
          } else {
            return true;
          }
        })
      )
    );
  }
}
