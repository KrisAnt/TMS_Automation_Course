import { BrowserService } from "./framework/helpers/browser-service";
import { DriverService } from "./framework/helpers/driver-service";
import { PageFactory } from "./page-object/page-factory/page-factory";
import { Page } from "./page-object/page-factory/pages";

describe("Page objects", () => {
  beforeEach(async () => {
    BrowserService.init();
    await BrowserService.goTo("https://www.onliner.by/");
  });
  afterEach(async () => {
    await BrowserService.close();
  });

  it("Prime filter is present on the page", async () => {
    const catalogPage = PageFactory.getPage(Page.catalog);
    await catalogPage.menuTab.click();
    await DriverService.waitForAnimation(2000);
    await catalogPage.filterItem.click();
    await DriverService.waitForAnimation(1000);
    expect(catalogPage.primeFilter.elementIsDisplayed).toBeTruthy();
  });

  it("Good is present in cart", async () => {
    await BrowserService.goTo("https://catalog.onliner.by/");
    await DriverService.waitForAnimation(1000);
    const catalogPage = PageFactory.getPage(Page.catalog);
    await catalogPage.electronicItem.click();
    await DriverService.waitForAnimation(1000);
    const catalogMenuPage = PageFactory.getPage(Page.catalogMenu);
    await catalogMenuPage.videoGamesItem.click();
    await DriverService.waitForAnimation(1000);
    await catalogMenuPage.consoleItem.click();
    await DriverService.waitForAnimation(3000);
    const consoleGamesPage = PageFactory.getPage(Page.consoleGames);
    await consoleGamesPage.consoleGood.click();
    await DriverService.waitForAnimation(2000);
    await consoleGamesPage.intoCart.click();
    await DriverService.waitForAnimation(2000);
    await BrowserService.goTo("https://www.onliner.by/");
    const cartPage = PageFactory.getPage(Page.cart);
    await cartPage.itemCart.click();
    await DriverService.waitForAnimation(1000);
    expect(cartPage.cartOfferList.elementIsDisplayed).toBeTruthy();
  });

  it("Only 2k apartments are displayed", async () => {
    await BrowserService.goTo("https://r.onliner.by/pk/");
    await DriverService.waitForAnimation(1000);
    const apartmentPage = PageFactory.getPage(Page.apartment);
    await apartmentPage.apartmentType.click();
    await DriverService.waitForAnimation(1000);
    await apartmentPage.roomNumber.click();
    await DriverService.waitForAnimation(2000);
    expect(apartmentPage.room2El).toBeTruthy();
  });

  it("Logo redirects user to the main page", async () => {
    const cleverPage = PageFactory.getPage(Page.clever);
    await cleverPage.cleverItem.click();
    await DriverService.waitForAnimation(3000);
    let tabs = await DriverService.driver.getAllWindowHandles();
    await BrowserService.switchToTab().window(tabs[1]);
    await cleverPage.logoElement.click();
    await DriverService.waitForAnimation(3000);
    tabs = await DriverService.driver.getAllWindowHandles();
    await BrowserService.switchToTab().window(tabs[2]);
    const result = await DriverService.driver.getCurrentUrl();
    await DriverService.waitForAnimation(1000);
    expect(result).toBe("https://www.onliner.by/");
  });

  it("Add an announcement button is present", async () => {
    await BrowserService.goTo("https://ab.onliner.by/");
    await DriverService.waitForAnimation(1000);
    const automarketPage = PageFactory.getPage(Page.automarket);
    const actual = await automarketPage.menuTab.elementIsDisplayed();
    expect(actual).toBeTruthy();
  });
});
