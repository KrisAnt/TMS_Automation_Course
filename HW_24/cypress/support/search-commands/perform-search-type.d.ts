declare global {
  namespace Cypress {
    interface Chainable {
      performSearch(text: string): void;
    }
  }
}
export {};
