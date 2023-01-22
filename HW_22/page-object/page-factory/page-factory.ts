import { CatalogPage } from "../pages/catalog-page";
import { Apartment } from "../pages/apartment-page";
import { AutoMarket } from "../pages/auto-flea-market-page";
import { Cart } from "../pages/cart-page";
import { CatalogMenu } from "../pages/catalog-menu";
import { ConsoleGames } from "../pages/game-console-goods";
import { MainPage } from "../pages/main-page";
import { Clever } from "../pages/onliner-clever-page";
import { Page } from "./pages";

export class PageFactory {
  public static getPage(pageName: Page.catalog): CatalogPage;
  public static getPage(pageName: Page.catalogMenu): CatalogMenu;
  public static getPage(pageName: Page.consoleGames): ConsoleGames;
  public static getPage(pageName: Page.cart): Cart;
  public static getPage(pageName: Page.clever): Clever;
  public static getPage(pageName: Page.apartment): Apartment;
  public static getPage(pageName: Page.automarket): AutoMarket;

  public static getPage(pageName: Page) {
    switch (pageName) {
      case Page.catalog:
        return new CatalogPage();
        break;
      case Page.main:
        return new MainPage();
        break;
      case Page.catalogMenu:
        return new CatalogMenu();
        break;
      case Page.consoleGames:
        return new ConsoleGames();
        break;
      case Page.cart:
        return new Cart();
        break;
      case Page.apartment:
        return new Apartment();
        break;
      case Page.clever:
        return new Clever();
        break;
      case Page.automarket:
        return new AutoMarket();
        break;
    }
  }
}
