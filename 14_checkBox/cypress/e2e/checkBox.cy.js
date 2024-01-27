
describe("test suite", () => {

    Cypress.on('uncaught:exception', () => {
        return false
    })


    it("test case", () => {

        cy.visit("https://www.qa-practice.com/elements/checkbox/mult_checkbox")
        
        cy.wait(3000)
        cy.get('input[id="id_checkboxes_0"]').check()
        cy.get('input[id="id_checkboxes_0"]').should("be.checked")
        
        cy.wait(3000)
        cy.get('input[id="id_checkboxes_0"]').uncheck()
        cy.get('input[id="id_checkboxes_0"]').should("be.not.checked")

    })


})