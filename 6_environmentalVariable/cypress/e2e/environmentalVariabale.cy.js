
describe("test suite",()=>{

    it("test case", () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('input[name="username"]').type(Cypress.env("Username"))
        
        cy.get('input[name="password"]').type(Cypress.env("password"))
        
        cy.get('button[type="submit"]').click()

        cy.contains("Dashboard").should("be.visible")
        
    })
})