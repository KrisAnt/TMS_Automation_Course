import { path } from "chromedriver";
import { Browser, Builder, ThenableWebDriver } from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";

export class DriverService {
  private static driverInstance: ThenableWebDriver;
  public static get driver() {
    if (!this.driverInstance) {
      this.init();
    }

    return this.driverInstance;
  }

  public static init(){
    const service = new chrome.ServiceBuilder(path);
    this.driverInstance = new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeService(service)
      .build();
    this.driverInstance
      .manage()
      .setTimeouts({ pageLoad: 1000 * 10, implicit: 1000 });
    this.driverInstance.manage().window().maximize();
    this.driverInstance.getAllWindowHandles();
  }
  
  public static waitForAnimation(ms: number) {
    return this.driver.sleep(ms);
  }
}
