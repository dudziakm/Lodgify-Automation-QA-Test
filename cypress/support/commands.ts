declare namespace Cypress {
  interface Chainable {
    
    openHomePage():  void;
    openContactPage(): void ;
    openPricingPage: (arg: null) => void;
    checkPageTitle: (title: string) => void;
  }
}

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
