describe('visit page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have proper heading', () => {
    cy.get('h1').should('have.text', 'Mars Rover Photo Gallery and Quiz')
  })

  it('should navigate to correct route when corresponding card is clicked', () => {
    cy.get('a').first().click()
    cy.url().should('include', 'spirit')
  })

  it('when quiz button is clicked, proper url should display', () => {
    cy.get('button').click()
    cy.url().should('include', 'quiz')
  })

  it('should display correct winning page for winner url', () => {
    cy.visit('http://localhost:3000/winning/curiosity')
    cy.get('h1').should('have.text', 'The winner is... Curiosity!')
  })

})