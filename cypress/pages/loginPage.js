class LoginPage {
  get usernameInput() { return cy.get('#user-name'); } // aggiorna se necessario
  get passwordInput() { return cy.get('#password'); }
  get loginButton() { return cy.get('#login-button'); }
  get errorMessage() { return cy.get('[data-test="error"]'); }

  enterUsername(username) { this.usernameInput.type(username); }
  enterPassword(password) { this.passwordInput.type(password); }
  clickLogin() { this.loginButton.click(); }
}

export default new LoginPage();
