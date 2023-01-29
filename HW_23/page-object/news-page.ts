import { Page, Locator } from "@playwright/test";

export class NewsPage {
  readonly url = "https://3dnews.ru/news";
  readonly page: Page;
  readonly tabItem: Locator;
  readonly nfSelect: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tabItem = page.locator(
      '[class="NF_filterItem_Wrapper filterItem_important"]'
    );
    this.nfSelect = page.locator(
      '[class="NF_filterItem_Wrapper filterItem_important NF_select"]'
    );
  }

  async goto() {
    await this.page.goto("https://3dnews.ru/news");
  }
  async selectTab() {
    await this.tabItem.click();
  }
  async isDisplayed() {
    await this.nfSelect.isVisible();
  }
}
