import TradeNationHomePage from "../pages/TradeNationHomePage.po"


describe('verifying on trade home page', () => {


  it('verify trade nation logo returns current page titile',

  

    () => {



      cy.on('uncaught:exception', (err, runnable) => {
        return false

      })


      cy.visit("/")
      cy.get(TradeNationHomePage.Logo()).click({ force: true })


      cy.title().should('include', TradeNationHomePage.mainpageTitle())

    })
})