import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('when load page, should show initial counter', () => {
    page.navigateTo();
    expect(page.getCounterText()).toEqual('0');
  });

  it('when click add button twice, should show updated counter', () => {
    page.navigateTo();
    page.clickButton();
    page.clickButton();

    expect(page.getCounterText()).toEqual('2');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
