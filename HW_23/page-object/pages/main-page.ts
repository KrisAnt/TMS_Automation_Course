import { Page, Locator } from "@playwright/test";

export class MainPage {
  readonly url = "https://3dnews.ru/";
  readonly page: Page;
  readonly sideTitle: Locator;
  readonly sectionTitle: Locator;
  readonly darkModeButton: Locator;
  readonly darkModeClass: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sideTitle = page.locator('[title="видеокарты"]');
    this.sectionTitle = page.locator("[class='bcfirst']");
    this.darkModeButton = page.locator("[class='toggle_darkmode']");
    this.darkModeClass = page.locator("[class='dark_mode']");
  }

  async goto() {
    await this.page.goto(this.url);
  }
  async clickOnSideBarTitle() {
    await this.sideTitle.click();
  }

  async getSideTitleText(): Promise<string> {
    return await this.sideTitle.textContent();
  }
  async getSectionTitleText(): Promise<string> {
    return await this.sectionTitle.textContent();
  }
  async clikOn() {
    await this.darkModeButton.click();
  }
  async elementIsDisplayed() {
    await this.darkModeClass.isVisible();
  }
}
