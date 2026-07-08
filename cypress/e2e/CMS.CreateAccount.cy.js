
describe('Create Account',()=>{
  const randomAccountname = Array.from({length: 6}, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('')
       const bankNames = ['Emirates NBD', 'Abu Dhabi Commercial Bank', 'Dubai Islamic Bank', 'First Abu Dhabi Bank', 'UBL Bank']
       const randomBank = bankNames[Math.floor(Math.random() * bankNames.length)]
       const randomIBAN = 'AE' + Math.floor(Math.random() * 90 + 10) + Math.floor(Math.random() * 9000000000000000 + 1000000000000000)
       const randomAccountNumber = Math.floor(Math.random() * 9000000000 + 1000000000).toString()
    
       it.only('Create account( type = bank )',()=>{
        
      cy.loginCMS()
      cy.visit('http://dev2.sianty.com/accounts')

      // Open Create Form
      cy.get('.flex > div > .MuiButtonBase-root').click()

      // Fill Form
      cy.get('[name="accountTitle"]').type(randomAccountname)
      cy.get('[name="bankName"]').type(randomBank)
      cy.get('[name="accountNumber"]').type(randomAccountNumber)
      cy.get('[name="iban"]').type(randomIBAN)
      cy.get('[name="openingBalance"]').type('5000')

      // Submit Form
      cy.get('.formSubmitBtn > .MuiButtonBase-root').click({ force: true })
      cy.wait(1000)

      // Go to Accounts List
      cy.visit('http://dev2.sianty.com/accounts')
      })
     it('Create account( type = Cash )',()=>{
       cy.loginCMS() 
       cy.visit('http://dev2.sianty.com/accounts')
 
       cy.get('.flex > div > .MuiButtonBase-root').click() 
       // Create form opened
       cy.get('[name="type"]').parent().click()
       cy.contains('Cash').click()

       cy.get('[name="accountTitle"]').type(randomAccountname)
       cy.get('[name="openingBalance"]').type('2000')
       cy.get('.formSubmitBtn > .MuiButtonBase-root').click({force: true})
       cy.wait(1000)
       cy.visit('http://dev2.sianty.com/accounts')
})
})