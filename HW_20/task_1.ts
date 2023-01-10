import {Browser,Builder,By,Options,WebDriver,WebElement} from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";
import { path } from "chromedriver";

async function visitHerokuapp() {
  const service = new chrome.ServiceBuilder(path);
  let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

  driver.get("https://the-internet.herokuapp.com/abtest");
  while (!driver.executeScript('document.readyState=== "complete"'));
  console.log(await driver.findElement(By.xpath("//div/p")).getText());
  console.log(await driver.findElement(By.xpath("//div/h3")).getText());
  driver.get("https://the-internet.herokuapp.com/large");
  while (!driver.executeScript('document.readyState=== "complete"'));
  console.log(await driver.findElement(By.xpath("(//h4)[1]")).getText());
  console.log(await driver.findElement(By.id("sibling-1.2")).getText());
  driver.get("https://the-internet.herokuapp.com/tables");
  while (!driver.executeScript('document.readyState=== "complete"'));
  console.log(await driver.findElement(By.css("table th:nth-of-type(2)")).getText());
  console.log(await driver.findElement(By.css("table tr:nth-of-type(2n)")).getText());
  driver.get("https://the-internet.herokuapp.com/context_menu");
  while (!driver.executeScript('document.readyState=== "complete"'));
  console.log(await driver.findElement(By.css("[id=hot-spot]")).getAttribute("oncontexmenu"));
  driver.get("https://the-internet.herokuapp.com/dropdown");
  while (!driver.executeScript('document.readyState=== "complete"'));
  console.log(await driver.findElement(By.css("select option[selected='selected']")).getText());
  console.log(await driver.findElement(By.css("select option[value='1']")).getText());
  driver.quit();
}
visitHerokuapp();