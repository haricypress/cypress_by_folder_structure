
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import loginPage from "../../pages/login"
import dashBoard from "../../pages/dashBoard"

afterEach("", () => {

    cy.log("afterEach")
})

before("", () => {

    cy.log("before")
})

after("", () => {

    cy.log("after")
})

beforeEach("", () => {

    cy.log("beforeEach")
})
Given("open orangeHRM webpage", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
})


When("Enter valid username", () => {
    cy.xpath(loginPage.userNameXpath()).type("Admin")
})

And("Enter valid password", () => {
    cy.xpath(loginPage.passwordXpath()).type("admin123")
})

Then("click on Submit Button", () => {

    cy.xpath(loginPage.submitButtonXpath()).click()
})
And("confirming successful login", () => {
    cy.url().should("include", dashBoard.dashBoardUrl())
})



