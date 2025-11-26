describe('Login Form Test - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should login with correct credentials', () => {
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Should show error for wrong credentials', () => {
    cy.get('[data-test=username]').type('wrong_user');
    cy.get('[data-test=password]').type('wrong_password');
    cy.get('[data-test=login-button]').click();
    cy.get('[data-test=error]').should('contain', 'Username and password do not match');
  });
});
