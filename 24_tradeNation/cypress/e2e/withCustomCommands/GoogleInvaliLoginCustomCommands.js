
import login from "../../pages/GoogleInvaliLogin.po"

describe('verifying failed step analysis', () => {


  it('verifying login with google link', 
  
    
    () => {
    
    cy.on('uncaught:exception', (err, runnable) => {
      return false

    })


    cy.visit('/')
  
    cy.singleClickForce(login.login())
    cy.urlInclude(login.loginPageTitle())    

    cy.singleClickForce(login.loginWithGoogle())
    cy.urlInclude("")
  

  })
})