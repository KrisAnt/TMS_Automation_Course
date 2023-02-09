import { BaseElement } from "../elements/base-element";
import { Button } from "../elements/button";
import { Checkbox } from "../elements/checkbox";
import { TextField } from "../elements/textfield";

export enum Element {
  Button,
  TextField,
  BaseElement,
  Checkbox
}

export class ElementsService {
  public static getElement(selector: string, element: Element.Button): Button;
  public static getElement(selector: string,element: Element.TextField): TextField;
  public static getElement(selector: string,element: Element.BaseElement):BaseElement;
  public static getElement(selector: string,element: Element.Checkbox):Checkbox;
  public static getElement(selector: string, element: Element) {
    switch (element) {
      case Element.Button:
        return new Button(selector);
        case Element.BaseElement:
        return new BaseElement(selector);
        case Element.Checkbox:
        return new Checkbox(selector);
      case Element.TextField:
        return new TextField(selector);
      default:
        throw new Error(
          `Element ${element} is not implemented in ElementsManager`
        );
    }
  }
}
