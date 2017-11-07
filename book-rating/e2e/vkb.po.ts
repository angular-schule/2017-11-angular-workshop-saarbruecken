import { VKBResultsPage } from './vkb-results.po';
import { browser, $ } from 'protractor';

export class VKBPage {
  navigateTo() {
    return browser.get('https://www.vkb.de');
  }

  searchAdvisor(search: string): VKBResultsPage {
    const searchContainer = $('form.advisor-search-container');
    searchContainer.$('input#nav_ul_berater').sendKeys(search);

    searchContainer.$('button').click();
    return new VKBResultsPage();
  }
}
