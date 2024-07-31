describe("i frames using loop", () => {

  it('looping ID No', () => {

      cy.visit("https://jqueryui.com/checkboxradio/")

      cy.get('iframe[class="demo-frame"]').then(iframes => {
          
          for (let i = 1; i <=3; i++) {

              let x = iframes.contents().find('#radio-' + i)
    
              cy.wrap(x).click({force: true})
          }
      })
  })

  it('loopimg with CSS locator', () => {

      cy.visit("https://jqueryui.com/checkboxradio/")

      cy.get('iframe[class="demo-frame"]').then(iframes => {
           
              let x = iframes.contents().find('label[for]')

              cy.wrap(x).click({multiple: true})
     
      })
  })
})