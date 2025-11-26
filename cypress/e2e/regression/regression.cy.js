describe('Regression Login Test - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load login page correctly', () => {
    cy.get('[data-test=username]').should('be.visible');
    cy.get('[data-test=password]').should('be.visible');
  });

  it('should show error for wrong credentials', () => {
    cy.get('[data-test=username]').type('wrong_user');
    cy.get('[data-test=password]').type('wrong_password');
    cy.get('[data-test=login-button]').click();
    cy.get('[data-test=error]').should('contain', 'Username and password do not match');
  });
});
