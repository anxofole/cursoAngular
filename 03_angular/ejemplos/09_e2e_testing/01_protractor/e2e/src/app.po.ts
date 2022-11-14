import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  clickButton(): Promise<void> {
    return element(by.css('app-root button')).click() as Promise<void>;
  }

  getCounterText(): Promise<string> {
    return element(by.css('app-root .counter')).getText() as Promise<string>;
  }
}
