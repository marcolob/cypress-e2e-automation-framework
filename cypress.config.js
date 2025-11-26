const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,   // importante per il merge dei report
    json: true
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com',  // aggiorna al mio sito reale del progetto
    specPattern: ['cypress/e2e/**/*.cy.js', 'cypress/e2e/**/*.cy.ts'], // supporta JS e TS
    setupNodeEvents(on, config) {
      // qui posso aggiungere eventi Cypress se servono in futuro
      return config;
    },
  },
});
