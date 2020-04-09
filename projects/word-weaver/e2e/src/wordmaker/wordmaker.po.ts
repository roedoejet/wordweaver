import { browser, by, element } from "protractor";

export class WordMakerPage {
  navigateTo() {
    return browser.get("/wordmaker");
  }

  getConjugateButton() {
    return element(by.css("#start"));
  }
}
