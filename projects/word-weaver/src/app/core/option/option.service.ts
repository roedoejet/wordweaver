import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Option } from "../../models/models";

@Injectable({
  providedIn: "root"
})
export class OptionService {
  path = environment.base + environment.prefix + `options`;
  options;
  options$ = this.http.get<Option[]>(this.path);
  random$ = this.options$.pipe(map(res => this.getRandomOption(res)));
  constructor(private http: HttpClient) {
    this.options$.subscribe(o => (this.options = o));
  }

  getOption(tag) {
    return this.options.filter(a => a.tag === tag)[0];
  }

  getRandomOption(options: Option[]): Option {
    return options[Math.floor(Math.random() * options.length)];
  }
}
