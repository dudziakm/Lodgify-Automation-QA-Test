context('Lodgify contact page', () => {
  it('Should have the right title', () => {
    cy.visit('http://localhost:8084/contact.html');
    cy.title().should('include', 'Contact');
  });
})