
describe("test suite", () => {

    Cypress.on('uncaught:exception', () => {
        return false
    })


    it("test case", () => {

        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")
        
        cy.wait(3000)
    
        cy.get('input[type="radio"]').eq(1).check()
        cy.get('input[type="radio"]').eq(1).should("be.checked")

        cy.wait(3000)
        cy.get('input[type="radio"]').eq(0).check()
        cy.get('input[type="radio"]').eq(1).should("be.not.checked")


    })


})