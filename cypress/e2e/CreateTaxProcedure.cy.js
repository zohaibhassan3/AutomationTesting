describe('Business',()=>{
    const randomTitle = Array.from({length: 6}, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('')
   
    it('Create Expense-type',()=>{
      // Call login Function   
      cy.loginCMS()
      // Visit Create form
      cy.visit('http://dev2.sianty.com/tax-procedure/create')
      // fill form
      cy.get('[name="title"]').type(randomTitle)
      // Open dropdown
      cy.contains('Type *').closest('.commonSelect').find('input').first().click()

      // Select 3rd option
      cy.get('[class*="-option"]').eq(2).click()
      cy.get('[name="percentageValue"]').type(20)
      // Submit form
      cy.get('.formSubmitBtn > .MuiButtonBase-root').click()
    })
})