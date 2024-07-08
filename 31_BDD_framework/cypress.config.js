const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    "specPattern": "**/*.feature",
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',

    env: {
      userName: "Admin",
      password: "admin123"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
    },
  }


});
