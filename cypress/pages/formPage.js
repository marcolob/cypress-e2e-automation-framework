class FormPage {
  get nameInput() { return cy.get('#name'); }        // aggiorna id se necessario
  get emailInput() { return cy.get('#email'); }      // aggiorna id se necessario
  get messageInput() { return cy.get('#message'); }  // se c'è un textarea
  get submitButton() { return cy.get('#submit'); }

  fillForm(name, email, message) {
    this.nameInput.type(name);
    this.emailInput.type(email);
    if(message) this.messageInput.type(message);
    this.submitButton.click();
  }
}

export default new FormPage();
