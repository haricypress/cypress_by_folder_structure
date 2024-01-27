
describe("test suite", () => {

    it("test case", () => {

        // login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()


        // navigation
        cy.get('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq(0).click()
        cy.get('span[class="oxd-topbar-body-nav-tab-item"]').eq(1).click()
        cy.get('a[class="oxd-topbar-body-nav-tab-link"]').eq(0).click()

        // adding job titile
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type("HR sales"+r)
        cy.get('button[type="submit"]').click()

        // assertion
        cy.contains("Success").should("be.visible")




    })
})