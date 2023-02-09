import Page from "./page";

class ResultPage extends Page {
  public get resultTitle() {
    return $(".textorangebig");
  }
}

export const ResulPage = new ResultPage();
