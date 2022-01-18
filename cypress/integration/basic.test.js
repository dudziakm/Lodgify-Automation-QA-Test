context('Lodgify open basic pages', () => {

  it('Contact page - Should have the right title', () => {
    cy.openContactPage()
    cy.checkPageTitle('Contact')
    cy.title().should('include', 'Contact');
  });

  // throwing an error: "mod_pagespeed_xwKaZj_7Hp is not defined"
  it('Pricing page - Should have the right title', () => {
    cy.openPricingPage()
    cy.checkPageTitle('Pricing')
    cy.title().should('include', 'Pricing');
  });

})