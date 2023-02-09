declare global {
  namespace Cypress {
    interface Chainable {
      performLogin(email: string, password: string): void;
    }
  }
}
export {};
