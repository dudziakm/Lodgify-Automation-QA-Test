declare namespace Cypress {
  interface Chainable {
    
    openHomePage():  void;
    openContactPage(): void ;
    openPricingPage: (arg: null) => void;
    checkPageTitle: (title: string) => void;
    chooseCurrency: (currency: string) => void;
  }
}

const priceCurrencySelect = '.price-currency-select';

Cypress.Commands.add("openPricingPage", () => {
   cy.visit("/pricing.html");
 });
 
Cypress.Commands.add("openHomePage", () => {
  cy.visit("/");
});

Cypress.Commands.add("openContactPage", () => {
  cy.visit("/contact.html");
});


Cypress.Commands.add("checkPageTitle", (title: string) => {
  cy.title().should("include", title, { timeout: 30000 });
});

Cypress.Commands.add("chooseCurrency", (currency: string) => {
   cy.get(priceCurrencySelect).select(currency.toLowerCase());
   cy.get(priceCurrencySelect).should('contain.text', currency);
 });
