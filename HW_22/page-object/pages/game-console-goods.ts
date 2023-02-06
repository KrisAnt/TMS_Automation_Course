import { BaseElement } from "../../framework/web-elements/base-element";
import { DriverService } from "../../framework/helpers/driver-service";
import { By } from "selenium-webdriver";
import { Button } from "../../framework/web-elements/button";

export class ConsoleGames {
  protected driver = DriverService.driver;

  public readonly consoleGood = new BaseElement(
    By.xpath("(//*[@class='schema-product__image'])[1]"),
    "Console Good"
  );
  public readonly intoCart = new Button(
    By.xpath(
      "(//*[contains(@class,'product-aside__offers-item product-aside__offers-item_primary')]//a)[4]"
    ),
    "Place into cart"
  );
}
