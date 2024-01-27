
describe("test suite", () => {

    Cypress.on('uncaught:exception', () => {
        return false
    })


    it("test case", () => {

        cy.visit("https://www.qa-practice.com/elements/input/simple")
        
    //  cy.wait(3000)
            
        cy.get('input[id="id_text_string"').type( "hai cypress")


    })


})