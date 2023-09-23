/// <reference types= "cypress" /> 


describe('template spec', () => {
  it('passes', () => {
    let websait=["https://www.almosafer.com/en?ncr=1","https://www.almosafer.com/ar?ncr=1"]
    let randomindex =Math.floor(Math.random()*websait.length)
    cy.visit(websait[randomindex])
    cy.get('#uncontrolled-tab-example-tab-hotels').click()

  })
})