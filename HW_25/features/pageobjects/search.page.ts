import { BaseElement } from "../../framework/elements/base-element";
import {
  Element,
  ElementsService,
} from "../../framework/services/element-service";
import Page from "./page";

class SearchPage extends Page {
  constructor(path) {
    super(path);
  }

  public readonly keywordField = ElementsService.getElement(
    "[id='find_keyword']",
    Element.TextField
  );
  public readonly searchButton = ElementsService.getElement(
    "#keyword_search input[type='button']",
    Element.Button
  );
  public readonly searchresultsLinks = ElementsService.getElement(
    "td[class='news'][align='left']",
    Element.BaseElement
  );

  public getLinkText(){
    this.searchresultsLinks.text
  }
}

export const SearcPage = new SearchPage("https://www.kinopoisk.ru/s");
