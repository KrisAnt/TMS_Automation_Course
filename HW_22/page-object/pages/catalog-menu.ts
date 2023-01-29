import { BaseElement } from "../../framework/web-elements/base-element";
import { DriverService } from "../../framework/helpers/driver-service";
import { By } from "selenium-webdriver";

export class CatalogMenu {
  protected driver = DriverService.driver;

  public readonly menuTab = new BaseElement(
    By.xpath(
      "//*[contains(@class, 'project-navigation__sign')][contains(text(), 'Наушники и гарнитуры')]"
    ),
    "Catalog"
  );

  public readonly videoGamesItem = new BaseElement(
    By.xpath(
      "//*[contains(@class, 'catalog-navigation-list__aside-title')][contains(text(), 'Видеоигры')]"
    ),
    "Video Games"
  );
  public readonly consoleItem = new BaseElement(
    By.css("[href='https://catalog.onliner.by/console']"),
    "Console"
  );
}
