import { BaseElement } from "../../framework/web-elements/base-element";
import { DriverService } from "../../framework/helpers/driver-service";
import { By } from "selenium-webdriver";
import { LogManager } from "selenium-webdriver/lib/logging";
import { Logo } from "../../framework/web-elements/logo";

export class Clever {
  protected driver = DriverService.driver;
  public readonly cleverItem = new BaseElement(
    By.css("[class='b-top-navigation-clover']"),
    "Clever page"
  );
  public readonly logoElement = new Logo(
    By.css("[class='logos__item onliner']"),
    "Onliner Logo"
  );
}
