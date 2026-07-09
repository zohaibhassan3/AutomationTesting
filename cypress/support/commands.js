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
    cy.visit('http://dev2.sianty.com/login');
    cy.get('[name="email"]').type('zohaib@email.com');
    cy.get('[name="password"]').type('zohaib12');
    cy.contains('Log In').click();
    cy.url().should('include', '/analytics', { timeout: 10000 });
    cy.wait(1000);
  });
}, {
  validate: () => {
    cy.getCookie('session') // or check localStorage
      .should('exist');
  }
});

Cypress.Commands.add('loginPOS', () => {
  cy.visit('http://dev1.sianty.com/#/login');
  cy.get('#username').type('zohaib@email.com');
  cy.get('#password').type('zohaib12');
  cy.get('#stationId').type('73'); // Use string if input expects text
  cy.contains('Login').click();
  cy.url().should('include', '#/', { timeout: 10000 });
  cy.wait(1000);
});
 // Verify API / Status code / response message
Cypress.Commands.add('verifyApi', (method, url, statusCode = 200, message = null) => {
  cy.intercept(method, `**${url}**`).as('apiCall')
  cy.wait('@apiCall').then((interception) => {
    expect(interception.response.statusCode).to.eq(statusCode)
    cy.log('Status Code: ' + interception.response.statusCode)
    cy.log('Response: ' + JSON.stringify(interception.response.body))
    if (message) {
      expect(interception.response.body.message).to.eq(message)
    }
  })
})