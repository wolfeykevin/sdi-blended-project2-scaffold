/* eslint-disable no-undef */
describe('visit page', () => {
  beforeEach(() => {
    cy.viewport(1000, 1000);
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
    cy.get('button').eq(1).click()
    cy.url().should('include', 'quiz')
  })

  it('should display correct winning page for winner url', () => {
    cy.visit('http://localhost:3000/winning/curiosity')
    cy.get('h1').should('have.text', 'The winner is... Curiosity!')
  })

})

describe('Quiz test', () => {
  beforeEach(() => {
    cy.viewport(1000, 1000);
    cy.visit('http://localhost:3000')
  })

  it('Start the quiz and get to the winning page', () => {
    cy.get('button').eq(1).click()
    cy.url().should('include', 'quiz/1')
    cy.wait(5000);
    cy.get('img').first().click()
    cy.url().should('include', 'quiz/2')

    cy.get('img').first().click()
    cy.url().should('include', 'quiz/3')

    cy.get('img').first().click()
    cy.url().should('include', 'quiz/4')

    cy.get('img').first().click()
    cy.url().should('include', 'quiz/5')

    cy.get('img').first().click()
    cy.url().should('include', 'winning')
  })
})

describe('Gallery Test', () => {
  beforeEach(() => {
    cy.viewport(1000, 1000);
    cy.visit('http://localhost:3000')
  })

  it('should have populate the gallery page with images', () => {
    cy.get('img').first().click()
    cy.wait(5000)
    cy.get('.roverGallery').find('img').its('length').should('be.gte', 0)
  })

})
