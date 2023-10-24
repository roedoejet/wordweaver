import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { createEffect } from "@ngrx/effects";
import { tap, filter } from "rxjs/operators";

@Injectable()
export class GoogleAnalyticsEffects {
  constructor(private router: Router) {}

  pageView = createEffect(
    () => () =>
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        tap((event: NavigationEnd) => {
          (window as any).ga("set", "page", event.urlAfterRedirects);
          (window as any).ga("send", "pageview");
        })
      ),
    { dispatch: false }
  );
}
