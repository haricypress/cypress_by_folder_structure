
describe("configure verifying", () => {

    it("1. baseUrl verifying", () => {


        cy.visit("/www.yahoo.com") 
        cy.wait(2000)

    })

    it("2. baseUrl verifying", () => {


        cy.visit("/") 
        cy.wait(2000)

    })
    it("3. baseUrl verifying", () => {


        cy.visit("/")
        cy.wait(2000) 

    })

    it("4. baseUrl verifying", () => {


        cy.visit("/") 
        cy.wait(2000)

    })

})

