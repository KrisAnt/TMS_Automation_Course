import { BaseElement } from "../../framework/base-element";
import { DriverService } from "../../framework/helpers/driver-service";
import { By } from "selenium-webdriver";

export class Apartment {
  protected driver = DriverService.driver;

  public readonly apartmentType = new BaseElement(
    By.css("[href='https://r.onliner.by/ak/']"),
    "Rent Apartment"
  );
  public readonly roomNumber = new BaseElement(
    By.xpath(
      "//*[contains(@class, 'filter__item-inner')][contains(text(), '2')]"
    ),
    "Room number"
  );
  public readonly room2El = new BaseElement(
    By.xpath(
      "//*[contains(@class, 'classified__caption-item classified__caption-item_type')][contains(text(), '2')]"
    ),
    "2k room"
  );
}
