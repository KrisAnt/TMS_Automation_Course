declare global {
    namespace Cypress {
      interface Chainable {
        performLogBook(): void;
      }
    }
  }
  export {};
  