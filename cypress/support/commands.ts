declare namespace Cypress {
  interface Chainable {
    openHomePage(): void;
    openContactPage(): void;
    openPricingPage(): void;
    checkPageTitle: (title: string) => void;
    chooseCurrency: (currency: string) => void;
    fillContactData: (
      name: string,
      phone: string,
      email: string,
      guests: string,
      arrivalDate: string,
      departureDate: string,
      comment: string
    ) => void;
    checkContactData: (
      name: string,
      phone: string,
      email: string,
      guests: string,
      arrivalDate: string,
      departureDate: string,
      comment: string
    ) => void;
  }
}

// PRICE PAGE
const priceCurrencySelect = ".price-currency-select";


const contactNameInput = '[name="name"]';
const contactPhoneInput = ".PhoneInputInput";
const contactEmailInput = '[name="email"]';
const contactGuestsInput = '[name="guests"]';
const contactArrivalDateInput = '[aria-label="Arrival"]';
const contactDepartureDateInput = '[aria-label="Departure"]';
const contactCommentInput = '[placeholder="Comment"]';

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
  cy.get(priceCurrencySelect).should("contain.text", currency);
});

Cypress.Commands.add(
  "fillContactData",
  (
    name: string,
    phone: string,
    email: string,
    guests: string,
    arrivalDate: string,
    departureDate: string,
    comment: string
  ) => {
    cy.get(contactNameInput).type(name);
    cy.get(contactPhoneInput).type(phone);
    cy.get(contactEmailInput).type(email);
    cy.get(contactGuestsInput).type(guests);
    cy.get(contactArrivalDateInput).type(arrivalDate, {force: true});
    cy.get(contactDepartureDateInput).type(departureDate, {force: true});
    cy.get(contactCommentInput).type(comment);


  }
);

Cypress.Commands.add(
   "checkContactData",
   (
     name: string,
     phone: string,
     email: string,
     guests: string,
     arrivalDate: string,
     departureDate: string,
     comment: string
   ) => {
     cy.get(contactNameInput).should('contain.value', name);
     cy.get(contactPhoneInput).should('contain.value', phone);
     cy.get(contactEmailInput).should('contain.value', email);
     cy.get(contactGuestsInput).should('contain.value', guests);
     cy.get(contactArrivalDateInput).should('contain.value', arrivalDate);
     cy.get(contactDepartureDateInput).should('contain.value', departureDate);
     cy.get(contactCommentInput).should('contain.value', comment);
 
 
   }
 );
