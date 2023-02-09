import { Element, ElementsService } from "../../framework/services/element-service";
import Page from "./page";

class ChancePage extends Page {
  constructor(path) {
    super(path);
  }
public readonly genreDropdown = ElementsService.getElement("#genreListTitle",Element.Button);
public readonly checkBox = ElementsService.getElement("[data-name='детектив']",Element.Checkbox);
public readonly randomButton = ElementsService.getElement('#search',Element.Button);
public readonly randomMovie = ElementsService.getElement('.movieBlock',Element.BaseElement);



}

export const ChancPage = new ChancePage("https://www.kinopoisk.ru/chance/");
