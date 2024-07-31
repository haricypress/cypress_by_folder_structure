
describe('HTML select element', () => {
  context('single value', () => {
    it('select single option from drop-down', () => {

      cy.visit('index.html', { failOnStatusCode: false })


      cy.get('#my-state').select('AL')


      cy.get('#my-state').should('have.value', 'AL')
    })
  })

  context('multiple values', () => {
  it('select multiple options from drop-down', () => {
    cy.visit('index.html', { failOnStatusCode: false })

    cy.get('#my-states').select(['AL', 'HI', 'CA'])


    cy.get('#my-states').invoke('val').should('deep.equal', ['AL', 'HI', 'CA'])
    // cy.get('#my-states').blur()
  })
})
})