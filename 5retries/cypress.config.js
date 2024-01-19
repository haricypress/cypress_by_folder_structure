const { defineConfig } = require("cypress");

module.exports = defineConfig({


retries : { openMode: 1, runMode : 2},

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  

});
