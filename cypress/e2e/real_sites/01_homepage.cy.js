describe('Homepage Tests - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display login form correctly', () => {
    cy.get('[data-test=username]').should('be.visible');
    cy.get('[data-test=password]').should('be.visible');
    cy.get('[data-test=login-button]').should('be.visible');
  });
});
