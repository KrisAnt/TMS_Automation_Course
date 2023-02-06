import { MainPage } from "../../selectors/main-page";

Cypress.Commands.add("performSearch", (query) => {
  cy.intercept(`/search/history?token=${query}**`).as("search_request");
  cy.get(MainPage.searchField).type(`${query}{enter}`);
});
