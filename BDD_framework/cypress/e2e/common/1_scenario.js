
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import loginPage from "../../pages/login"
import dashBoard from "../../pages/dashBoard"

Given("open orangeHRM webpage", () => {
    cy.visit("/")
})


When("Enter valid username", () => {
    cy.xpath(loginPage.userNameXpath()).type(Cypress.env("userName"))
})

And("Enter valid password", () => {
    cy.xpath(loginPage.passwordXpath()).type(Cypress.env("password"))
})

Then("click on Submit Button", () => {

    cy.xpath(loginPage.submitButtonXpath()).click()
})
And("confirming successful login or not", () =>{
    cy.url().should("include",dashBoard.dashBoardUrl())
})