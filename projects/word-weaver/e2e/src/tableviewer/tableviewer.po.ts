import { browser, by, element } from "protractor";

export class TableViewerPage {
  navigateTo() {
    return browser.get("#/tableviewer");
  }
}
