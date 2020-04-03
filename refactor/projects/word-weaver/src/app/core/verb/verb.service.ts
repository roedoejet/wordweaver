import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Affix, Verb } from "../../models/models";
import { environment } from "../../../environments/environment";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class VerbService {
  verbs: Verb[];
  path = environment.base + environment.prefix + `verbs`;
  verbs$ = this.http.get<Verb[]>(this.path);
  random$ = this.verbs$.pipe(
    map(res => {
      return this.getRandomOption(res);
    })
  );
  constructor(private http: HttpClient) {
    this.verbs$.subscribe(verbs => (this.verbs = verbs));
  }

  getRandomOption(options: Verb[]): Verb {
    return options[Math.floor(Math.random() * options.length)];
  }

  getVerb(tag) {
    return this.verbs.filter(v => v.tag === tag)[0];
  }

  searchEntries(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(100),
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
