describe('Contact Form Test - SauceDemo', () => {
  it('should submit the form', () => {
    cy.visit('/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();

    // scegli un prodotto qualsiasi
    cy.get('.inventory_item:first .inventory_item_name').click();
    cy.get('.btn_inventory').click();
    
    // verifica aggiunta al carrello
    cy.get('.shopping_cart_badge').should('contain', '1');
  });
});
