import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Pronoun } from "../../../config/config";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class PronounService {
  path = environment.base + environment.prefix + `pronouns`;
  pronouns: Pronoun[];
  pronouns$: Observable<Pronoun[]>;
  random$: Observable<Pronoun>;
  constructor(private http: HttpClient) {
    this.pronouns$ = this.http.get<Pronoun[]>(this.path).pipe(shareReplay(1));
    this.random$ = this.pronouns$.pipe(map(res => this.getRandomPro(res)));
    this.pronouns$.subscribe(pns => (this.pronouns = pns));
  }
  getPronoun(tag) {
    return this.pronouns.filter(p => p.tag === tag)[0];
  }

  getRandomPro(options: Pronoun[]): Pronoun {
    return options[Math.floor(Math.random() * options.length)];
  }
}
