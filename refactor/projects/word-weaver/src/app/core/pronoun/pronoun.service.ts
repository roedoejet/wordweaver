import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map } from "rxjs/operators";
import { Pronoun } from "../../models/models";

@Injectable({
  providedIn: "root"
})
export class PronounService {
  path = environment.base + environment.prefix + `pronouns`;
  pronouns: Pronoun[];
  pronouns$ = this.http.get<Pronoun[]>(this.path);
  random$ = this.pronouns$.pipe(map(res => this.getRandomPro(res)));
  constructor(private http: HttpClient) {
    this.pronouns$.subscribe(pns => (this.pronouns = pns));
  }
  getPronoun(tag) {
    return this.pronouns.filter(p => p.tag === tag)[0];
  }

  getRandomPro(options: Pronoun[]): Pronoun {
    return options[Math.floor(Math.random() * options.length)];
  }
}
