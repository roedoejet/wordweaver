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
  path = environment.base + environment.prefix + "options";
  options;
  options$: Observable<Option[]>;
  optionsByType$: Observable<object[]>;
  random$: Observable<Option>;
  constructor(private http: HttpClient) {
    this.options$ = this.http.get<Option[]>(this.path).pipe(shareReplay(1));
    this.optionsByType$ = this.options$.pipe(
      map(options => {
        const optionTypes = [...new Set(options.map(x => x.type))];
        const optionsByType = [];
        optionTypes
          .filter(x => x)
          .forEach(x =>
            optionsByType.push({
              type: x,
              options: options.filter(y => y.type === x)
            })
          );
        return optionsByType;
      })
    );
    this.random$ = this.options$.pipe(map(res => this.getRandomOption(res)));
    this.options$.subscribe(o => (this.options = o));
  }

  optionsUseType$(): Observable<boolean> {
    return this.options$.pipe(
      map(options => options.some(option => option.type))
    );
  }

  getOption(tag) {
    return this.options.filter(a => a.tag === tag)[0];
  }

  getRandomOption(options: Option[]): Option {
    return options[Math.floor(Math.random() * options.length)];
  }
}
