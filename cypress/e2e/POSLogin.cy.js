
it('login POS',()=>{
 cy.visit('http://dev1.sianty.com/#/login')
cy.get('#username').type('zohaib@email.com')
cy.get('#password').type('zohaib12')
cy.get('#stationId').type(73)
    cy.get('.ant-btn').click()

})
