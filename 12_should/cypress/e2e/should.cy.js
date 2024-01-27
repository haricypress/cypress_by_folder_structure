
describe("test suite", () => {

    Cypress.on('uncaught:exception', () => {
        return false
    })


    it.only("test case", () => {

        cy.visit("https://www.qa-practice.com/elements/button/disabled")

     

        cy.get('input[type="submit"]').should("be.visible")

        cy.get('input[type="submit"]').should("be.not.visible")


    })


    it("test case", () => {

        cy.visit("https://www.qa-practice.com/elements/button/disabled")

        cy.get('select[id="id_select_state"]').select("Disabled")

        cy.get('input[type="submit"]').should("be.disabled")

        cy.wait(4000)

        cy.get('select[id="id_select_state"]').select("Enabled")

        cy.get('input[type="submit"]').should("be.enabled")
    
    })


})