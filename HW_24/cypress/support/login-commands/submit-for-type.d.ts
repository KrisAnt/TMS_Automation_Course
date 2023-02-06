declare global {
  namespace Cypress {
    interface Chainable {
      submitForm(): void;
    }
  }
}
export {};
