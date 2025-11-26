// dataDriven/dataDriven.cy.js
const users = [
  { username: 'standard_user', password: 'secret_sauce', valid: true },
  { username: 'locked_out_user', password: 'secret_sauce', valid: false },
];

describe('Data Driven Login - SauceDemo', () => {
  users.forEach((user) => {
    it(`should ${user.valid ? 'login' : 'fail'} for ${user.username}`, () => {
      cy.visit('/');
      cy.get('[data-test=username]').type(user.username);
      cy.get('[data-test=password]').type(user.password);
      cy.get('[data-test=login-button]').click();

      if (user.valid) {
        cy.url().should('include', '/inventory.html');
      } else {
        cy.get('[data-test=error]').should('contain', 'locked out');
      }
    });
  });
});
