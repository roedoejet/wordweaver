import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Option } from "../../../config/config";

@Injectable({
  providedIn: "root"
})
export class OptionService {
  path = environment.base + environment.prefix + `options`;
  options;
  options$: Observable<Option[]>;
  random$: Observable<Option>;
  constructor(private http: HttpClient) {
    this.options$ = this.http.get<Option[]>(this.path).pipe(shareReplay(1));
    this.random$ = this.options$.pipe(map(res => this.getRandomOption(res)));
    this.options$.subscribe(o => (this.options = o));
  }

  getOption(tag) {
    return this.options.filter(a => a.tag === tag)[0];
  }

  getRandomOption(options: Option[]): Option {
    return options[Math.floor(Math.random() * options.length)];
  }
}
