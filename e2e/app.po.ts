import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.id('navbarBrand')).getText();
  }

  getLanguageSubheaderText() {
    return element(by.id('navbar-subheader')).getText();
  }
}
