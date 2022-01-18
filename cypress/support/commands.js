Cypress.Commands.add('openHomePage', () => { 
    cy.visit('/')
 })

 Cypress.Commands.add('openContactPage', () => { 
    cy.visit('/contact.html')
 })

 Cypress.Commands.add('openPricingPage', () => { 
    cy.visit('/pricing.html')
 })

 Cypress.Commands.add('checkPageTitle', (title) => { 
   cy.title().should('include', title, {timeout: 30000});
})