beforeEach(() => {
  
});

const priceCard = ".price-item";
const pricePlan = ".plan-price";
const priceScroll = '#scroll-prop-plan';

const amountOfRentals = 50;

const allPlansSet = ["Starter", "Professional", "Ultimate"];

context(`Lodgify Pricing Page for ${amountOfRentals} Rentals` , () => {
  before(() => {
    cy.openPricingPage();
    cy.get(priceScroll)
      .invoke("val", amountOfRentals)
      .trigger("change");
  });

  for (const plan of allPlansSet) {
    it(`Should have proper prices for ${plan} Plan`, () => {
      cy.fixture("planPricesFor50Rentals").then((planPrices) => {
        cy.get(priceCard)
          .contains(plan)
          .parent()
          .within(() => {
            cy.get(pricePlan).should("contain.text", planPrices[plan]);
          });
      });
    });
  }
});

