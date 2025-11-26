describe('Contact Form Test - SauceDemo', () => {
  it('should submit the form', () => {
    cy.visit('/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();

    // aggiunge i primi 2 prodotti al carrello
    cy.get('.inventory_item').each(($el, index) => {
      if (index < 2) {
        cy.wrap($el).find('.btn_inventory').click();
      }
    });

    // verifica badge carrello
    cy.get('.shopping_cart_badge').should('contain', '2');
  });
});
