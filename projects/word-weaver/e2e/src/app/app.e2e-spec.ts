import { AppPage } from "./app.po";

import { getCurrentRouteUrl } from "../utils/utils";

describe("App", () => {
  let page: AppPage;

  beforeEach(() => (page = new AppPage()));

  it('should redirect to "wordmaker" route', () => {
    page.navigateTo();
    expect(getCurrentRouteUrl()).toEqual("wordmaker");
  });

  it("should display current year in the footer", () => {
    page.navigateTo();
    expect(page.getCurrentYear()).toEqual(new Date().getFullYear().toString());
  });

  it('should have "About", "Table Viewer", "Word Maker" menus', () => {
    page.navigateTo();
    page
      .getAllMenus()
      .then(menus =>
        expect(menus).toEqual(["Word Maker", "Table Viewer", "About"])
      );
  });
});
