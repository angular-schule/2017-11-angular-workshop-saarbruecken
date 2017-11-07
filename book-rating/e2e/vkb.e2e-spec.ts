import { VKBPage } from './vkb.po';
import { protractor, browser, $, $$, element, by } from 'protractor';

describe('VKB', () => {

  beforeAll(() => browser.waitForAngularEnabled(false));

  /*
  // Screenshot machen
  const fs = require('fs');
  function writeScreenShot(data, filename) {
    const stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
  }

  browser.takeScreenshot().then(png => writeScreenShot(png, 'impressum.png'));
  */

  it('should have an "Impressum" link on the start page', () => {
    browser.get('https://www.vkb.de');

    // const body = element(by.css('body'));
    const body = $('body');
    expect(body.getText()).toContain('Impressum');
  });

  it('should show results for advisor search', () => {
    const page = new VKBPage();
    page.navigateTo();
    const resultsPage = page.searchAdvisor('66111');
    const results = resultsPage.getAdvisorResults();

    expect(results.count()).toBe(30);
    expect(results.first().getText()).toContain('Sparkasse Südwestpfalz');
  });

  afterAll(() => browser.waitForAngularEnabled(true));
});
