import { $$ } from 'protractor';

export class VKBResultsPage {
  getAdvisorResults() {
    return $$('div.beratersuche .accordion .accordion-header');
  }
}
