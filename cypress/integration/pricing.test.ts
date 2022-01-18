const priceCard = ".price-item";
const planPrice = ".plan-price";
const priceScroll = "#scroll-prop-plan";

const amountOfRentals = 50;

const allPlansSet = ["Starter", "Professional", "Ultimate"];
const allCurrenciesSet = ["USD", "GBP", "EUR"];

// STEP 1:
context(`Lodgify Pricing Page for ${amountOfRentals} Rentals`, () => {
  before(() => {
    cy.openPricingPage();
    cy.log('Choose USD to make sure tests work even when the default currency was changed')
    cy.chooseCurrency('USD');

    cy.get(priceScroll).invoke("val", amountOfRentals).trigger("change");
  });

  for (const plan of allPlansSet) {
    it(`Should have proper prices for ${plan} Plan`, () => {
      cy.fixture("planPricesFor50Rentals").then((planPrices) => {
        cy.get(priceCard)
          .contains(plan)
          .parent()
          .within(() => {
            cy.get(planPrice).should("contain.text", planPrices[plan]);
          });
      });
    });
  }
});

// STEP 2:
context(`Lodgify Pricing Page for Currencies`, () => {
  before(() => {
    cy.openPricingPage();
  });

  for (const currency of allCurrenciesSet) {
    it(`Should have proper prices for ${currency} Plan`, () => {
      cy.fixture("currencies").then((curriences) => {
        cy.chooseCurrency(currency);

        cy.get(planPrice).each(($el) => {
          cy.wrap($el).should("contains.text", curriences[currency]);
        });
      });
    });
  }
});
