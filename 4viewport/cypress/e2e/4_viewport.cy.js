

describe("test suite", () => {



    it("1. test case", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get('input[name="username"').type('Admin')
        cy.get('input[name="password"').type('admin123')
        cy.get('button[type="submit"]').click()


    })

    it("2. test case", () => {

        cy.viewport('iphone-4')  //   cy.viewport('iphone-4', 'portrait')

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get('input[name="username"').type('Admin')
        cy.get('input[name="password"').type('admin123')
        cy.get('button[type="submit"]').click()


    })
    it("2. test case", () => {

        cy.viewport('iphone-4', 'landscape')

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get('input[name="username"').type('Admin')
        cy.get('input[name="password"').type('admin123')
        cy.get('button[type="submit"]').click()


    })

})

