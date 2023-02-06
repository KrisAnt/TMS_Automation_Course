import { LogBookSelctors } from "../../selectors/logbook-selectors";


Cypress.Commands.add("performLogBook", function () {
 cy.get(LogBookSelctors.dropdownForm).select("мойка");
 cy.get(LogBookSelctors.selected).click();
});
