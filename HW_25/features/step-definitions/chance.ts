import { Given, Then, When } from "@wdio/cucumber-framework";
import { ChancPage } from "../pageobjects/chance.page";

Given(/^I am on the chance page$/, () => ChancPage.open());
When(/^I open genre dropdown$/,async()=>{
    await ChancPage.genreDropdown.click()
})
When(/^I click on checkbox$/,async()=>{
    await ChancPage.checkBox.click()
    await ChancPage.genreDropdown.click()
})
When(/^I click on random film button$/,async()=>{
    await ChancPage.randomButton.click()
    
})
Then(/^Random movie is displayed$/,async()=>{
    
    await expect(ChancPage.randomMovie.waitForExists()).toBeDisplayed();
})
