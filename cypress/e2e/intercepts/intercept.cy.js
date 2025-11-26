describe('Intercept Test - SauceDemo', () => {
  it('should login and check inventory items exist', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();

    // verifica elementi caricati
    cy.get('.inventory_item').should('have.length.greaterThan', 0);
  });
});
