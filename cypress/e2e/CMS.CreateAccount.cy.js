
describe('Create Account',()=>{
  const randomAccountname = Array.from({length: 6}, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('')
       const bankNames = ['Emirates NBD', 'Abu Dhabi Commercial Bank', 'Dubai Islamic Bank', 'First Abu Dhabi Bank', 'UBL Bank']
const randomBank = bankNames[Math.floor(Math.random() * bankNames.length)]
       const randomIBAN = 'AE' + Math.floor(Math.random() * 90 + 10) + Math.floor(Math.random() * 9000000000000000 + 1000000000000000)
       const randomAccountNumber = Math.floor(Math.random() * 9000000000 + 1000000000).toString()
    it('Create account( type = bank )',()=>{
        
 cy.visit('http://dev2.sianty.com/#/login')
 
cy.get('[name="email"]').type('zohaib@email.com')
cy.get('[name="password"]').type('zohaib12')
cy.get(':nth-child(5) > .MuiButtonBase-root').click() // login done
   cy.get('[data-key="business_setup"] > .MuiButtonBase-root').trigger('mouseover')
cy.contains('Accounts').click()
       cy.get('.flex > div > .MuiButtonBase-root').click() 
       // Create form opened
     
cy.get('[name="accountTitle"]').type(randomAccountname)
cy.get('[name="bankName"]').type(randomBank)
cy.get('[name="accountNumber"]').type(randomAccountNumber)
cy.get('[name="iban"]').type(randomIBAN)
cy.get('[name="openingBalance"]').type('5000')
cy.get('.formSubmitBtn > .MuiButtonBase-root').click({force: true})
})
it.only('Create account( type = Cash )',()=>{
        
 cy.visit('http://dev2.sianty.com/#/login')
 
cy.get('[name="email"]').type('zohaib@email.com')
cy.get('[name="password"]').type('zohaib12')
cy.get(':nth-child(5) > .MuiButtonBase-root').click() // login done
   cy.get('[data-key="business_setup"] > .MuiButtonBase-root').trigger('mouseover')
cy.contains('Accounts').click()
       cy.get('.flex > div > .MuiButtonBase-root').click() 
       // Create form opened
       cy.get('[name="type"]').parent().click()
cy.contains('Cash').click()
cy.get('[name="accountTitle"]').type(randomAccountname)
cy.get('[name="openingBalance"]').type('2000')
cy.get('.formSubmitBtn > .MuiButtonBase-root').click({force: true})
})
})