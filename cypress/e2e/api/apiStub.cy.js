describe('API Stub Test - SauceDemo', () => {
  it('should login and see inventory page', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();

    // verifica che la pagina inventory sia caricata
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('exist');
  });
});
