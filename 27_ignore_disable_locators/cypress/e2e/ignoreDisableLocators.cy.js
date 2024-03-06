
describe("ignore disable locator", () => {

    it("verify disabled button clicking or not", () => {

        cy.on('uncaught:exception', () => {
            return false
        })

        cy.visit('https://www.qa-practice.com/elements/button/disabled')

        // as disable locator
        cy.ignoreDisableLocator('input[type="submit"]').then((res) => {
            if (res != "disabled")
                res.click()  // here do desired action
        })


        // selecting enable in drop-down
        cy.get('select[id="id_select_state"]').select('Enabled')

        // as enable locator
        cy.ignoreDisableLocator('input[type="submit"]').then((res) => {
            if (res != "disabled")
                res.click()  // here do desired action
        })

        // assertion after clicking enabled button
        cy.contains('Submitted').should("be.visible")
    })
})