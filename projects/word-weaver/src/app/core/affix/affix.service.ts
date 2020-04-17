import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { AffOption, Affix } from "../../models/models";

@Injectable({
  providedIn: "root"
})
export class AffixService {
  allAffixCombos = new Observable<AffOption[]>();
  path = environment.base + environment.prefix + `options`;
  affix_path = environment.base + environment.prefix + `affixes`;
  affixes;
  affixoptions;
  affoptions$ = this.http.get<AffOption[]>(this.path);
  random$ = this.affoptions$.pipe(map(res => this.getRandomOption(res)));
  constructor(private http: HttpClient) {
    this.http.get<Affix[]>(this.affix_path).subscribe(d => (this.affixes = d));
    this.affoptions$.subscribe(o => (this.affixoptions = o));
  }

  getAffix(tag) {
    return this.affixes.filter(a => a.tag === tag)[0];
  }

  getAffOption(tag) {
    return this.affixoptions.filter(a => a.tag === tag)[0];
  }

  getRandomOption(options: AffOption[]): AffOption {
    return options[Math.floor(Math.random() * options.length)];
  }
}
