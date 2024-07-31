

describe("verify login", () => {

    it("1. login with valid credentials", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        cy.contains("Dashboard").should("be.visible")
    })

    it("2. login with invalid username, valid password", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admhgdhsgdkskhdin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        cy.contains("Invalid credentials").should("be.visible")
    })

    it("3. login with valid username, invalid password", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123shdhshdghdgjs")
        cy.get('button[type="submit"]').click()

        cy.contains("Invalid credentials").should("be.visible")
    })

    it("4. login with invalid username, invalid password", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admjfdfjklskhkin")
        cy.get('input[name="password"]').type("admin123shdhshdghdgjs")
        cy.get('button[type="submit"]').click()

        cy.contains("Invalid credentials").should("be.visible")
    })

})

