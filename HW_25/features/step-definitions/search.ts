import { Given, Then, When } from "@wdio/cucumber-framework";
import { skipPartiallyEmittedExpressions } from "typescript";
import { ResulPage } from "../pageobjects/result.page";
import { SearcPage } from "../pageobjects/search.page";


Given(/^I am on the search page$/, () => SearcPage.open());

When(/^I type "(.*)" into search field$/, async (value: string) => {
  await SearcPage.keywordField.type(value);
});

When(/^I click on Search button$/, async () => {
  await SearcPage.searchButton.click();
});

Then(/^Page with search results is displayed$/, async () => {
  expect(await ResulPage.resultTitle).toBeDisplayed();
});
Then(
  /^"(.*)" is mentioned in search results$/,
  async (expectedValue: string) => {
    expect(SearcPage.getLinkText).toHaveValueContaining(expectedValue);
  }
);
