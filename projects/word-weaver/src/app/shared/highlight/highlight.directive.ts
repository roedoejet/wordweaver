import { Directive, ElementRef, HostBinding, Input } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Store, select } from "@ngrx/store";
import { SettingsState, State } from "../../core/settings/settings.model";
import { takeUntil } from "rxjs/operators";
import { selectSettings } from "../../core/settings/settings.selectors";

@Directive({
  selector: "[wwHighlight]"
})
export class HighlightDirective {
  settings$: Observable<SettingsState>;
  unsubscribe$ = new Subject<void>();
  @HostBinding("class") classAttribute: string;
  constructor(private store: Store<State>) {
    this.settings$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectSettings)
    );
    this.settings$.subscribe(x => {
      this.classAttribute = Object.keys(x.highlight)
        .filter(key => x.highlight[key])
        .map(key => `highlight-${key}`)
        .join(" ");
    });
  }
}
