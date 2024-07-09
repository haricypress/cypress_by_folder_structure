import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import loginPage from "../../pages/login"
import dashBoard from "../../pages/dashBoard"
import obj_PIMmenu from "../../pages/PIMmenu"
import obj_PIMmenuAddEmp from "../../pages/PIMAddEmployee"


cy.on("uncaught:exception", () => {
    return false
})

//login step definitions
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
And("confirming successful login or not", () => {
    cy.url().should("include", dashBoard.dashBoardUrl())
})

//add employee step definitions
When('click on PIM menu', () => {
    dashBoard.PIMmenuXpath().click()
})
When("Click on Add Employee menu", () => {
    obj_PIMmenu.addEmployeeMenu().click()
})
And("Enter First name in Add employee page", () => {
    cy.xpath(obj_PIMmenuAddEmp.employeeFirstNameXpath()).type("first name")
})
And("Enter last name in Add employee page", () => {
    cy.xpath(obj_PIMmenuAddEmp.employeeLastNameXpath()).type("last name")
})


//ramdom number
var EmpID = (Math.floor(Math.random()*100000))
//ramdom string
// var EmpID = (Math.random()+1).toString(36).substring(7)

And("Enter empolyee ID in Add employee page", () => {
    obj_PIMmenuAddEmp.employeeId().type(EmpID)
})
Then("click on submit Button in Add employee page", () => {
    cy.xpath(obj_PIMmenuAddEmp.submitAddEmpXpath()).click()
})

And("displaying confirm message after employee added successfully", () => {
    cy.contains(obj_PIMmenuAddEmp.addEmpSuccessMessage()).should("be.visible")
})

And('Enter empolyee ID in PIM Page', () => {
    obj_PIMmenu.EmpID().type(EmpID)
})
And("click in search button in PIM Page", ()=>{
    cy.wait(5000)
    cy.xpath(obj_PIMmenu.clickOnSearchBtn()).click()
})
Then("verify Employee ID in search result in PIM Page", () => {
    obj_PIMmenu.searchDisplayXpath().then(result =>{
        cy.wrap(Number(result.text())).should("eq",EmpID)
    })
  
})