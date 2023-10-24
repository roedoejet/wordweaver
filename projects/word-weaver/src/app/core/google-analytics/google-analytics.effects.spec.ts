import * as assert from "assert";
import { NavigationEnd } from "@angular/router";
import { getEffectsMetadata } from "@ngrx/effects";
import { TestScheduler } from "rxjs/testing";

import { GoogleAnalyticsEffects } from "./google-analytics.effects";

const scheduler = new TestScheduler((actual, expected) =>
  assert.deepStrictEqual(actual, expected)
);

describe("GoogleAnalyticsEffects", () => {
  let router: any;
  const ga = (window as any).ga;

  beforeEach(() => {
    router = {
      routerState: {
        snapshot: {}
      },
      events: {
        // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
        pipe() {}
      }
    };

    (window as any).ga = jasmine.createSpy("ga");
  });

  afterAll(() => {
    (window as any).ga = ga;
  });

  it("should not dispatch action", () => {
    const effect = new GoogleAnalyticsEffects(router);
    const metadata = getEffectsMetadata(effect);

    expect(metadata.pageView.dispatch).toEqual(false);
  });

  it("should call google analytics", () => {
    scheduler.run((helpers) => {
      const { cold } = helpers;

      const routerEvent = new NavigationEnd(1, "", "");
      router.events = cold("a", { a: routerEvent });
      const effect = new GoogleAnalyticsEffects(router);

      effect.pageView().subscribe(() => {
        expect((window as any).ga).toHaveBeenCalled();
        expect((window as any).ga).toHaveBeenCalledWith(
          "set",
          "page",
          routerEvent.urlAfterRedirects
        );
        expect((window as any).ga).toHaveBeenCalledWith("send", "pageview");
      });
    });
  });
});
