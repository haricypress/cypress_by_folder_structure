
describe("test suite", () => {
    

  
    it("verify click - uniquly identified element - hidden", () => {


        cy.visit("https://www.cypress.io/")

        cy.contains("API").click(  {force:true}   )
        
        cy.contains("Create an assertion. Assertions are automatica").should("be.visible")

    })



    it("verify click - multiple elements - visible", () => {


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get('div[class="product-action"]').click(  {multiple:true}    )
        
        cy.contains("ADDED").should("be.visible")

    })



    it ("verify click - uniquely indentified element - visible", () => {


        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('button[type="submit"]').click()
        
        cy.contains("Required").should("be.visible")

    })
})