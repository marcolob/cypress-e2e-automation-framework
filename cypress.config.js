const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',

    // ✅ Configurazione Mochawesome reporter
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports', // dove vengono salvati i report JSON
      overwrite: false,
      html: false,   // HTML generato solo dopo merge
      json: true     // fondamentale per il merge
    }
  },
});
