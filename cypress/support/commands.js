// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginCMS', () => {
  cy.session('cmsLogin', () => {
    cy.visit('http://dev2.sianty.com/login')
    cy.get('[name="email"]').type('zohaib@email.com')
    cy.get('[name="password"]').type('zohaib12')
    cy.contains('Log In').click()
    cy.wait(1000)
    
    // Log all localStorage keys
    cy.window().then((win) => {
      const keys = Object.keys(win.localStorage)
      cy.log('All keys: ' + JSON.stringify(keys))
    })
  })
})

Cypress.Commands.add('loginPOS', () => {
  
    cy.visit('http://dev1.sianty.com/#/login')
    cy.get('#username').type('zohaib@email.com')
    cy.get('#password').type('zohaib12')
    cy.get('#stationId').type(73)
    cy.get('.ant-btn').click()
    cy.wait(1000)

    // Log all localStorage keys
    cy.window().then((win) => {
      const keys = Object.keys(win.localStorage)
      cy.log('All keys: ' + JSON.stringify(keys))
    })
  
})