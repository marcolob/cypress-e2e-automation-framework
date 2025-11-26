describe('Add to Cart Flow - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
  });

  it('should add multiple products to the cart', () => {
    cy.get('.inventory_item').each(($el, index) => {
      if (index < 2) {
        cy.wrap($el).find('.btn_inventory').click();
      }
    });
    cy.get('.shopping_cart_badge').should('contain', '2');
  });
});
