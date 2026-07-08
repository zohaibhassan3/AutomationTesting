describe('Business',()=>{
    const randomTitle = Array.from({length: 6}, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('')
   const randomArabicTitle = Array.from({length: 6}, () => String.fromCharCode(0x0621 + Math.floor(Math.random() * 28))).join('')
    it('Create Expense-type',()=>{
      // Call login Function   
      cy.loginCMS()
      // Visit Create form
      cy.visit('http://dev2.sianty.com/expense-type/create')
      // Fill form
      cy.get('[name="title"]').type(randomTitle)
      cy.get('[name="secondaryTitle"]').type(randomArabicTitle)
      // Submit Form
      cy.get('.formSubmitBtn > .MuiButtonBase-root').click()
      // VIsit Account type listing page
      cy.wait(1000)
      cy.visit('http://dev2.sianty.com/expense-types')
    })
})