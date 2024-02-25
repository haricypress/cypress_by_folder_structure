const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportHeight: 800,
  viewportWidth: 1280,

  e2e: {
    screenshotOnRunFailure: false,
    
    baseUrl: 'https://tradenation.com/',
    specPattern: "cypress/e2e/*.js",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
