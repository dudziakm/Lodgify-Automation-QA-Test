declare namespace Cypress {
  interface Chainable {
    openHomePage(): void;
    openContactPage(): void;
    openPricingPage: (arg: null) => void;
    checkPageTitle: (title: string) => void;
  }
}
