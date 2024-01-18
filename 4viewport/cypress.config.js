const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth : 100,
  viewportHeight : 300,

  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
 
});



