
describe("test suite",

    {
        viewportWidth: 800,
        viewportHeight: 760
    }

    , () => {

        it("1. test case", () => {

            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.get('input[name="username"').type('Admin')
            cy.get('input[name="password"').type('admin123')
            cy.get('button[type="submit"]').click()

        })
        it("2. test case", () => {

            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.get('input[name="username"').type('Admin')
            cy.get('input[name="password"').type('admin123')
            cy.get('button[type="submit"]').click()

        })
    })

