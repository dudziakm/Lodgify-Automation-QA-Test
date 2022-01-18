
const allMandatoryFieldsSet = ["Name", "Phone number", "Comment"];
const allNotMandatoryFieldsSet = ["Email", "GBP", "EUR"];


// STEP 1:
context(`Lodgify Contact Page for ${amountOfRentals} Rentals`, () => {
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
