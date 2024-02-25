// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("singleClickForce", (element) => {

    if (element.includes("//")) {
        cy.xpath(element).click({ force: true })
    }
    else {
        cy.get(element).click({ force: true })
    }
})

Cypress.Commands.add("titleInclude", (element) => {

    cy.title().should('include', element)
})
Cypress.Commands.add("urlInclude", (element) => {

    cy.url().should('include', element)

})