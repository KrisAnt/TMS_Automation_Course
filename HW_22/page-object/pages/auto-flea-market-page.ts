import { DriverService } from "../../framework/helpers/driver-service";
import { By } from "selenium-webdriver";
import { Button } from "../../framework/web-elements/button";

export class AutoMarket {
  protected driver = DriverService.driver;
  public readonly menuTab = new Button(
    By.css(
      "[class='project-navigation__button project-navigation__button_middle']"
    ),
    "Auto Button"
  );
}
