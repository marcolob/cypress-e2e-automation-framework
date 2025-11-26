describe('Product Filter Checkbox - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
  });

  it('should select "Price (low to high)" filter', () => {
    cy.get('.product_sort_container').select('lohi');
    cy.get('.inventory_item_price').first().should('contain.text', '7.99'); // prezzo più basso
  });
});
