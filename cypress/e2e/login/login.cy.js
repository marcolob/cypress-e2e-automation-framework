describe('Login Tests - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('/'); // baseUrl viene preso dal cypress.config.js
  });

  it('should login successfully with valid credentials', () => {
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('should show error on invalid credentials', () => {
    cy.get('[data-test=username]').type('wrong_user');
    cy.get('[data-test=password]').type('wrong_password');
    cy.get('[data-test=login-button]').click();
    cy.get('[data-test=error]').should('contain', 'Username and password do not match');
  });
});
