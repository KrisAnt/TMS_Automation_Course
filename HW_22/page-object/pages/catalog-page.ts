import { BaseElement } from "../../framework/web-elements/base-element";
import { DriverService } from "../../framework/helpers/driver-service";
import { By } from "selenium-webdriver";
import { FilterItem } from "../../framework/web-elements/filter-item";

export class CatalogPage {
  protected driver = DriverService.driver;
  public readonly menuTab = new BaseElement(
    By.xpath(
      "//*[contains(@class, 'project-navigation__sign')][contains(text(), 'Наушники и гарнитуры')]"
    ),
    "Headphones and Headset"
  );

  public readonly filterItem = new FilterItem(
    By.css(
      "[class='schema-filter__bonus-item schema-filter__bonus-item_primary']"
    ),
    "Prime card"
  );
  public readonly primeFilter = new FilterItem(
    By.css("[title=Príme]"),
    "Prime filter"
  );
  public readonly electronicItem = new BaseElement(
    By.css("[data-id='1']"),
    "Electronic Item"
  );
}
