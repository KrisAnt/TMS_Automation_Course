import { By, ThenableWebDriver, WebDriver } from "selenium-webdriver";
import { DriverService } from "./helpers/driver-service";

export class BaseElement {
  protected driver:ThenableWebDriver = DriverService.driver;
  constructor(private readonly selector: By, public readonly name: string) {}

  protected get element() {
    return this.driver.findElement(this.selector);
  }

  protected get elements() {
    return this.driver.findElements(this.selector);
  }

  public click() {
    return this.element.click();
  }
  public elementIsDisplayed() {
    return this.element.isDisplayed();
  }
}
