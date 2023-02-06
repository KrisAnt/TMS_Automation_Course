import { LoginPage } from "../../selectors/login-page";

Cypress.Commands.add("performLogin", function () {
  cy.fixture("userdata").then(function (userdata) {
    this.userdata = userdata;
  });
  cy.get(LoginPage.emailField).type(this.userdata.email);
  cy.get(LoginPage.passwordField).type(this.userdata.password);
});
