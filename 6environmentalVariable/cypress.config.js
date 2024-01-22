const { defineConfig } = require("cypress");

module.exports = defineConfig({
  

  env: {

    Username : "Admin",
    password : "admin123",

  },

  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  

  


});
