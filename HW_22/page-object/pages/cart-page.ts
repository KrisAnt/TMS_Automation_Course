import { BaseElement } from "../../framework/base-element";
import { DriverService } from "../../framework/helpers/driver-service";
import { By } from "selenium-webdriver";
import { basename } from "path";

export class Cart {
  protected driver = DriverService.driver;

  public readonly itemCart = new BaseElement(
    By.css("[class='auth-bar__item auth-bar__item--cart']"),
    "Cart Item"
  );
  public readonly cartOfferList = new BaseElement(
    By.css("[class='cart-form__offers-list']"),
    "Cart List"
  );
}
