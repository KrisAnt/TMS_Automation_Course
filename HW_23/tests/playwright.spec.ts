import { test, expect } from "@playwright/test";
import { NewsPage } from "../page-object/news-page";
import { MainPage } from "../page-object/pages/main-page";
import { SearchPage } from "../page-object/pages/search-page";

test.describe("Playwright tests", () => {
  test("The title of side menu corresponds to the section title ", async ({
    page,
  }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await mainPage.clickOnSideBarTitle();
    const expected = await mainPage.getSideTitleText();
    const actual = await mainPage.getSectionTitleText();
    expect(expected == actual).toBeTruthy();
  });
  test("Check mark is displayed when the tab is selected", async ({ page }) => {
    const newsPage = new NewsPage(page);
    await newsPage.goto();
    await newsPage.selectTab();
    expect(newsPage.isDisplayed()).toBeTruthy();
  });
  test("Search results display 20 elements", async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.goto();
    await searchPage.typeAndEnter("huawei");
    await searchPage.elementIsDisplayed('[class="search-result-item"]');
    expect(
      await page.$$eval("[class='search-result-item']", els => els.length)
    ).toBe(20);
  });
  test("Search results contain search word", async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.goto();
    await searchPage.typeAndEnter("huawei");
    await searchPage.elementIsDisplayed('[class="search-result-item"]');
    expect(
      await page.$$eval("[class='search_word']", e => e.includes("huawei"))
    );
  });
  test("Dark mode is on/off", async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await mainPage.clikOn();
    expect(mainPage.elementIsDisplayed()).toBeTruthy();
  });
});
