
describe("test suite",()=>{

    it("1. test case", () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        cy.contains("Dashboard").should("be.visible")
        
    })

    it("2. test case", () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        cy.contains("Dashbfdhfjkhjhfkoard").should("be.visible")
        
    })
})

