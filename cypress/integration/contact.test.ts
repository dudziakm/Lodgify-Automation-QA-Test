

// STEP 1:
context(`Lodgify Pricing Page for ${amountOfRentals} Rentals`, () => {
  before(() => {
    cy.openPricingPage();
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
