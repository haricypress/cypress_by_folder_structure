
describe("test suite", () => {

    Cypress.on('uncaught:exception', () => {
        return false
    })


    it("test case", () => {

        cy.visit("https://www.qa-practice.com/elements/select/single_select")
        
        cy.wait(3000)
        cy.get('select[id="id_choose_language"]').select("1")
        
        cy.wait(3000)
        cy.get('select[id="id_choose_language"]').select(2)
        
        cy.wait(3000)
        cy.get('select[id="id_choose_language"]').select("JavaScript")
        

    })


})