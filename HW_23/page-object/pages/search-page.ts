import { Page, Locator } from "@playwright/test";

export class SearchPage {
  readonly url = "https://3dnews.ru/search";
  readonly page: Page;
  readonly searchTextField: Locator;
  readonly searchElements: Locator;
  readonly selector: Page;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchTextField = page.locator('[id="search-text-full"]');
    this.submitButton = page.locator('[data-action="submit"]');
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async typeAndEnter(text: string) {
    await this.searchTextField.fill("huawei");
    await this.submitButton.click();
  }
  async elementIsDisplayed(selector: string) {
    await this.page.waitForSelector(selector);
  }
}
