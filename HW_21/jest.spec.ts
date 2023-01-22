import {
  Browser,
  Builder,
  By,
  Condition,
  Options,
  until,
  WebDriver,
} from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";
import { path } from "chromedriver";

describe("Selenium UI tests", () => {
  let driver: WebDriver;
  beforeEach(async () => {
    const service = new chrome.ServiceBuilder(path);
    driver = await new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeService(service)
      .build();

    await driver.manage().window().maximize();
    await waitAnimation(2000);
    await driver.get("https://www.onliner.by/");
  });

  afterEach(async () => {
    driver.quit();
  });

  it("Prime filter is present on the page", async () => {
    const menuTab = await driver.findElement(
      By.xpath(
        "//*[contains(@class, 'project-navigation__sign')][contains(text(), 'Наушники и гарнитуры')]"
      )
    );
    menuTab.click();
    await waitAnimation(2000);
    const filterCard = await driver.findElement(
      By.css(
        "[class='schema-filter__bonus-item schema-filter__bonus-item_primary']"
      )
    );
    filterCard.click();
    await waitAnimation(1000);
    const filterElement = await driver.findElement(By.css("[title=Príme]"));
    expect(filterElement.isDisplayed()).toBeTruthy();
  });

  it("Good is present in cart", async () => {
    const menuItem = await driver.findElement(
      By.xpath(
        "//*[contains(@class, 'b-main-navigation')][contains(text(), 'Каталог')]"
      )
    );
    menuItem.click();
    await waitAnimation();

    const navCatalog = await driver.findElement(
      By.className("catalog-navigation-classifier")
    );

    const electronicItem = await navCatalog.findElement(
      By.css("[data-id='1']")
    );

    electronicItem.click();
    await waitAnimation();

    const videoGamesItem = await driver.findElement(
      By.xpath(
        "//*[contains(@class, 'catalog-navigation-list__aside-title')][contains(text(), 'Видеоигры')]"
      )
    );
    videoGamesItem.click();
    await waitAnimation();
    const consoleItem = await driver.findElement(
      By.css("[href='https://catalog.onliner.by/console']")
    );
    consoleItem.click();
    await waitAnimation(3000);

    const good = await driver.findElement(
      By.xpath("(//*[@class='schema-product__image'])[1]")
    );
    good.click();
    await waitAnimation(2000);
    const intoCart = await driver.findElement(
      By.xpath(
        "(//*[contains(@class,'product-aside__offers-item product-aside__offers-item_primary')]//a)[4]"
      )
    );
    intoCart.click();
    await waitAnimation(2000);
    await driver.get("https://www.onliner.by/");
    const itemCart = await driver.findElement(
      By.css("[class='auth-bar__item auth-bar__item--cart']")
    );
    itemCart.click();
    await waitAnimation(3000);
    const cartOfferList = await driver.findElement(
      By.css("[class='cart-form__offers-list']")
    );
    expect(cartOfferList.isDisplayed()).toBeTruthy();
  });

  it("Only 2k apartments are displayed", async () => {
    const menuTab = await driver.findElement(
      By.xpath(
        "//*[contains(@class, 'b-main-navigation')][contains(text(), 'Дома и квартиры')]"
      )
    );
    menuTab.click();
    await waitAnimation(2000);
    const apartmentType = await driver.findElement(
      By.css("[href='https://r.onliner.by/ak/']")
    );
    apartmentType.click();
    await waitAnimation(1000);
    const roomNumber = await driver.findElement(
      By.xpath(
        "//*[contains(@class, 'filter__item-inner')][contains(text(), '2')]"
      )
    );
    roomNumber.click();
    await waitAnimation(2000);
    const room2El = await driver.findElements(
      By.xpath(
        "//*[contains(@class, 'classified__caption-item classified__caption-item_type')][contains(text(), '2')]"
      )
    );
    await waitAnimation(1000);
    expect(room2El[0]).toBeTruthy();
  });

  it("Logo redirects user to the main page", async () => {
    const cleverElem = await driver.findElement(
      By.css("[class='b-top-navigation-clover']")
    );
    cleverElem.click();
    await waitAnimation(3000);
    let tabs = await driver.getAllWindowHandles();
    await driver.switchTo().window(tabs[1]);
    const logoElement = await driver.findElement(
      By.css("[class='logos__item onliner']")
    );
    logoElement.click();
    await waitAnimation(3000);
    tabs = await driver.getAllWindowHandles();
    await driver.switchTo().window(tabs[2]);
    const result = await driver.getCurrentUrl();
    await waitAnimation(1000);
    expect(result).toBe("https://www.onliner.by/");
  });
  it("Add an announcement button is present", async () => {
    const menuTab = await driver.findElement(
      By.xpath(
        "//*[contains(@class, 'b-main-navigation')][contains(text(), 'Автобарахолка')]"
      )
    );
    menuTab.click();
    await waitAnimation(2000);
    const autoButton = await driver.findElement(
      By.css(
        "[class='project-navigation__button project-navigation__button_middle']"
      )
    );
    await waitAnimation(1000);
    expect(autoButton.isDisplayed()).toBeTruthy();
  });

  function waitAnimation(ms: number = 1000) {
    return driver.sleep(ms);
  }
});
