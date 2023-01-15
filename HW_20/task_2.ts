import {
  Browser,
  Builder,
  By,
  Options,
  WebDriver,
  WebElement,
} from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";
import { path } from "chromedriver";

async function visitOutpathGame() {
  const service = new chrome.ServiceBuilder(path);
  let driver: WebDriver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeService(service)
    .build();
  driver.get("https://store.steampowered.com/");
  while (!driver.executeScript('document.readyState=== "complete"'));
  await driver
    .findElement(By.css("[id='tab_newreleases_content_trigger']"))
    .click();
  const firstGamePrice = await driver
    .findElement(By.xpath("//div[@data-price-final='0']"))
    .getText();
  await driver.findElement(By.css("[data-ds-itemkey='App_2237980']")).click();
  const firstGame = await driver
    .findElement(By.css("[class='apphub_AppName']"))
    .getText();
  const firstGameGenre = await driver
    .findElement(By.css("[id='genresAndManufacturer']>span>a"))
    .getText();
  driver.quit();
  console.log(
    `First game name: ${firstGame} , genre: ${firstGameGenre}, price : ${firstGamePrice}`
  );
}

async function visitDungeonGame() {
  const service = new chrome.ServiceBuilder(path);
  let driver: WebDriver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeService(service)
    .build();
  driver.get("https://store.steampowered.com/");
  while (!driver.executeScript('document.readyState=== "complete"'));
  await driver
    .findElement(By.css("[id='tab_newreleases_content_trigger']"))
    .click();
  const secondGamePrice = await driver
    .findElement(By.xpath("//div[@data-price-final='0']"))
    .getText();
  await driver.findElement(By.css("[data-ds-itemkey='App_2153310']")).click();
  const secondGame = await driver
    .findElement(By.css("[class='apphub_AppName']"))
    .getText();
  const secondGameGenre = await driver
    .findElement(
      By.css(
        "[href='https://store.steampowered.com/genre/RPG/?snr=1_5_9__408']"
      )
    )
    .getText();
  driver.quit();
  console.log(
    `Second game name: ${secondGame} , genre: ${secondGameGenre}, price : ${secondGamePrice}`
  );
}

async function visitPotionCraftGame() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeService(service)
      .build();
    driver.get("https://store.steampowered.com/");
    while (!driver.executeScript('document.readyState=== "complete"'));
    await driver.findElement(By.css("[id='tab_newreleases_content_trigger']")).click();
    const thirdGamePrice = await driver.findElement(By.xpath("//div[@data-price-final='679']")).getText();
    await driver.findElement(By.css("[data-ds-itemkey='App_1210320']")).click();
    const thirdGame = await driver.findElement(By.css("[class='apphub_AppName']")).getText();
    const thirdGameGenre = await driver.findElement(By.css("[id='genresAndManufacturer']>span>a")).getText();
    driver.quit();
    console.log(`Third game name: ${thirdGame} , genre: ${thirdGameGenre}, price : ${thirdGamePrice}`)
  }

  async function visitChooGame() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeService(service)
      .build();
    driver.get("https://store.steampowered.com/");
    while (!driver.executeScript('document.readyState=== "complete"'));
    await driver.findElement(By.css("[id='tab_newreleases_content_trigger']")).click();
    const forthGamePrice = await driver.findElement(By.xpath("//div[@data-price-final='1049']")).getText();
    await driver.findElement(By.css("[data-ds-itemkey='App_1766740']")).click();
    const forthGame = await driver.findElement(By.css("[class='apphub_AppName']")).getText();
    const forthGameGenre = await driver.findElement(By.css("[id='genresAndManufacturer']>span>a")).getText();
    driver.quit();
    console.log(`Forth game name: ${forthGame} , genre: ${forthGameGenre}, price : ${forthGamePrice}`)
  }
  async function visitIxionGame() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeService(service)
      .build();
    driver.get("https://store.steampowered.com/");
    while (!driver.executeScript('document.readyState=== "complete"'));
    await driver.findElement(By.css("[id='tab_newreleases_content_trigger']")).click();
    const fifthGamePrice = await driver.findElement(By.xpath("//div[@data-price-final='1899']")).getText();
    await driver.findElement(By.css("[data-ds-itemkey='App_1113120']")).click();
    const fifthGame = await driver.findElement(By.css("[class='apphub_AppName']")).getText();
    const fifthGameGenre = await driver.findElement(By.css("[id='genresAndManufacturer']>span>a")).getText();
    driver.quit();
    console.log(`Fifth game name: ${fifthGame} , genre: ${fifthGameGenre}, price : ${fifthGamePrice}`)
  }
  async function visitSpiderManGame() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeService(service)
      .build();
    driver.get("https://store.steampowered.com/");
    while (!driver.executeScript('document.readyState=== "complete"'));
    await driver.findElement(By.css("[id='tab_newreleases_content_trigger']")).click();
    const sixthGamePrice = await driver.findElement(By.xpath("//div[@data-price-final='3999']")).getText();
    await driver.findElement(By.css("[data-ds-itemkey='App_1817190']")).click();
    const sixthGame = await driver.findElement(By.css("[class='apphub_AppName']")).getText();
    const sixthGameGenre = await driver.findElement(By.css("[id='genresAndManufacturer']>span>a")).getText();
    driver.quit();
    console.log(`Fifth game name: ${sixthGame} , genre: ${sixthGameGenre}, price : ${sixthGamePrice}`)
  }
  async function visitMountAndBladeGame() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeService(service)
      .build();
    driver.get("https://store.steampowered.com/");
    while (!driver.executeScript('document.readyState=== "complete"'));
    await driver.findElement(By.css("[id='tab_newreleases_content_trigger']")).click();
    const seventhGamePrice = await driver.findElement(By.xpath("//div[@data-price-final='2799']")).getText();
    await driver.findElement(By.css("[data-ds-itemkey='App_1599660']")).click();
    const seventhGame = await driver.findElement(By.css("[class='apphub_AppName']")).getText();
    const seventhGameGenre = await driver.findElement(By.css("[id='genresAndManufacturer']>span>a")).getText();
    driver.quit();
    console.log(`Fifth game name: ${seventhGame} , genre: ${seventhGameGenre}, price : ${seventhGamePrice}`)
  }
visitChooGame();
visitDungeonGame();
visitIxionGame();
visitMountAndBladeGame();
visitOutpathGame();
visitPotionCraftGame();
visitSpiderManGame();