import { Given, Then, When } from "@wdio/cucumber-framework";
import { FilList } from "../pageobjects/film-list.page";

Given(/^I am on the main page$/, () => FilList.open());
When(/^I click on films tab$/, async () => {
  await FilList.filmTab.click();
});
Then(/^24 film variants are displayed$/, async () => {
  await FilList.listOfFilms.waitForExists();
  const result = await $$(".styles_root__c9qje").length;
  await expect(result).toBe(24);
});
