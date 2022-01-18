beforeEach(()=>{
  cy.openPricingPage();
});

context('Lodgify Pricing Page', () => {
  it('Should have proper prices for all plans', () => {
    cy.fixture('planPrices').then((planPrices) => {
      cy.get('.price-item').contains('Starter').get('.plan-price')
    })
  });
})