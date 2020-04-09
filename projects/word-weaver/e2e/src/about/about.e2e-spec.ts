import { AboutPage } from "./about.po";
import { getCurrentRouteUrl } from "../utils/utils";

describe("About Page", () => {
  let page: AboutPage;

  beforeEach(() => (page = new AboutPage()));

  it("should display main heading", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("WORDWEAVER UI");
  });

  it('should redirect to "about" route', () => {
    page.navigateTo();
    expect(getCurrentRouteUrl()).toEqual("about");
  });
});
