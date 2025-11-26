describe('Product Page Tests - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
  });

  it('should display product titles', () => {
    cy.get('.inventory_item_name').should('have.length.greaterThan', 0);
  });
});
