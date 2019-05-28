import { AppPage } from './app.po';
import { MetaData } from '../src/app/global'
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe(MetaData.title, () => {
  
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display correct title'  + ' (' + MetaData.title + ')', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    expect(page.getTitleText()).toContain(MetaData.title);
  });

  it('should display welcome message with correct language' + ' (' + MetaData.language + ')', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    expect(page.getLanguageSubheaderText()).toContain(MetaData.language);
  });


});
