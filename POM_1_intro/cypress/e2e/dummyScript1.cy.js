
import login from "../pages/orangeHRMLogin.po"
import dashBoard from "../pages/dashBoard.po"


describe("test suite",()=>{

    it("1.test case", () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get(login.username()).type("Admin")
        cy.get(login.password()).type("admin123")
        cy.get(login.submitButton).click()

        
        cy.get(dashBoard.dashBoardlink()).should("be.visible")
        
    })

    
})