import { WordMakerPage } from "./wordmaker.po";
import { getCurrentRouteUrl } from "../utils/utils";
import { browser, ExpectedConditions as EC } from "protractor";

describe("Word Maker Page", () => {
  let page: WordMakerPage;

  beforeEach(() => (page = new WordMakerPage()));

  it('should redirect to "wordmaker" route', () => {
    page.navigateTo();
    expect(getCurrentRouteUrl()).toEqual("wordmaker");
  });

  it("should route to stepper on click", () => {
    page.navigateTo();
    page.getConjugateButton().click();
    expect(getCurrentRouteUrl()).toEqual("stepper");
  });
});
