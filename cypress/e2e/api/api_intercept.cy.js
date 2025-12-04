describe('API Intercept - Demo Users', () => {
  it('Intercept GET users and mock response', () => {
    // Mock dell'API
    cy.intercept('GET', '**/users', {
      statusCode: 200,
      body: [
        { id: 999, name: 'Mocked User', email: 'mocked@user.com' },
        { id: 1000, name: 'Another Mock', email: 'another@mock.com' }
      ]
    }).as('mockUsers');

    // Legge l'HTML dal fixture e lo mette nel DOM
    cy.fixture('demo_users.html').then((html) => {
      document.open();
      document.write(html);
      document.close();
    });

    // Simula il click sul bottone che fa fetch
    cy.get('#load-users').click();

    // Aspetta che il mock sia intercettato
    cy.wait('@mockUsers').its('response.statusCode').should('eq', 200);

    // Controlla che il mock sia nel DOM
    cy.get('#users-list').should('contain.text', 'Mocked User');
    cy.get('#users-list').should('contain.text', 'Another Mock');
  });
});
