import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import login from "../../pages/login"
import dashBoard from "../../pages/dashBoard"

Given("open orangeHRM webpage", () => {
    cy.visit("/")
})

When('Enter valid username as {string}', (username) => {

    cy.xpath(login.userNameXpath()).type(username)
})

And('Enter valid password as {string}', (password) => {

    cy.xpath(login.passwordXpath()).type(password)

})
Then('click on Submit Button', () => {

    cy.xpath(login.submitButtonXpath()).click()
})
And('confirming successful login', () => {
    cy.url().should("include", dashBoard.dashBoardUrl())
})

And('confirming unSuccessful login', () => {
    cy.url().should("not.include", dashBoard.dashBoardUrl())
})