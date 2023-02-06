import { LoginPage } from "../../selectors/login-page";

Cypress.Commands.add("submitForm", () => {
  cy.get(LoginPage.submitButton).click();
});
