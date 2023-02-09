import { By } from "selenium-webdriver";
import {
  Element,
  ElementsService,
} from "../../framework/services/element-service";
import Page from "./page";

class FilmList extends Page {
  constructor(path) {
    super(path);
  }
  public readonly filmTab = ElementsService.getElement(
    " .styles_sticky__mDnbt a[href='/lists/categories/movies/1/']",
    Element.BaseElement
  );
  public readonly listOfFilms = ElementsService.getElement(
    ".styles_root__c9qje",
    Element.BaseElement
  );

  public getLength(selector: string) {
    return $$(selector).length
  }
}
export const FilList = new FilmList("https://www.kinopoisk.ru");
