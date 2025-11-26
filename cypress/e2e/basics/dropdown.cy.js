// basics/dropdown.cy.js
describe('Dropdown Test - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('should select an option from product sort dropdown', () => {
    cy.get('.product_sort_container').select('Price (low to high)');
    cy.get('.inventory_item').first().should('contain.text', 'Sauce Labs Onesie');
  });
});
