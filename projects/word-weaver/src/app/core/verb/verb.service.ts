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
  path = environment.base + environment.dataPrefix + `verbs.json`;
  verbs$: Observable<Verb[]>;
  random$: Observable<Verb>;
  constructor(private http: HttpClient, private translate: TranslateService) {
    this.verbs$ = this.http.get<Verb[]>(this.path).pipe(shareReplay(1));
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
