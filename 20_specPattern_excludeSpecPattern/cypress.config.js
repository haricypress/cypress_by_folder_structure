

module.exports = defineConfig({
  e2e: {
    
  // specPattern:"cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // default cypress value
  
    // specPattern:"cypress/e2e/**/*.cy.js",

    excludeSpecPattern:"cypress/e2e/smoke/four.cy.js",
   

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
