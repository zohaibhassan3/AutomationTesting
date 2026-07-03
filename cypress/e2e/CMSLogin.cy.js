it('login POS',()=>{
 cy.visit('http://dev2.sianty.com/#/login')
cy.get('[name="email"]').type('zohaib@email.com')
cy.get('[name="password"]').type('zohaib12')

cy.get(':nth-child(5) > .MuiButtonBase-root').click()

})