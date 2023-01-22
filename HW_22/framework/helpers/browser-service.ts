import { DriverService } from "./driver-service";

export class BrowserService {
  public static get driver(){
    return DriverService.driver;
  }

  public static init(){
    return DriverService.init();
  }

  public static close() {
    return this.driver.quit();
  }

  public static closeTab() {
    return this.driver.close();
  }

  public static switchToTab() {
    return this.driver.switchTo();
  }
  public static goTo(url: string) {
    return this.driver.get(url);
  }
}
