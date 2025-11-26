// basics/radio.cy.js
describe('Radio-like Test - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('should filter products using dropdown', () => {
    cy.get('.product_sort_container').select('Name (Z to A)');
    cy.get('.inventory_item').first().should('contain.text', 'Test.allTheThings() T-Shirt (Red)');
  });
});
