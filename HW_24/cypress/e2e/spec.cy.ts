import { LogBookSelctors } from "../selectors/logbook-selectors";
import { MainPage } from "../selectors/main-page";
import { MarketPage } from "../selectors/market-page";
import { Resultpage } from "../selectors/result-page";

describe("Cypress UI tests", function () {
  beforeEach(function () {
    cy.fixture("userdata").then(function (userdata) {
      this.userdata = userdata;
      cy.visit(MainPage.receptionUrl);
      cy.performLogin(this.userdata.email, this.userdata.password);
      cy.submitForm();
      cy.wait(2000);
    });
  });
  it("User is logged in", function () {
    expect(cy.get(MainPage.lContainer).should("exist"));
  });
  it.skip("20 elements are displayed on search results page", function () {
    cy.visit(MainPage.mainPageUrl);
    cy.performSearch("kia");
    cy.wait(3000);
    expect(
      cy
        .get(Resultpage.resultCard)
        .should("exist")
        .then(el => el.length == 20)
    );
  });
  it.skip("Logbook title is displayed according to the selected value in the dropdown", function () {
    //cy.visit(MainPage.mainPageUrl);
    cy.performLogBook();
    cy.get(LogBookSelctors.logbookTitle)
      .invoke("text")
      .then((text) => {
        expect(text).to.eq("Мойка");
      });
  });
  it('Market car card has title and price displayed',function (){
    cy.visit("https://www.drive2.ru/market");
    cy.get(MarketPage.cardElement).children().should('have.class',MarketPage.priceElement)
    cy.get(MarketPage.cardElement).children().should('have.class',MarketPage.titleElement)
  });

});
