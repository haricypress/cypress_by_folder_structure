
import login from "../pages/GoogleInvaliLogin.po"

describe('verifying failed step analysis',
  () => {


    it('verifying login with google link',
     
      () => {

        cy.on('uncaught:exception', (err, runnable) => {
          return false

        })


        cy.visit('/')

        cy.xpath(login.login()).click({ force: true })

        cy.url().should('include', login.loginPageTitle())

        cy.xpath(login.loginWithGoogle()).click({ force: true })

        cy.url().should('include', "")



      })
  })