describe('Business',()=>{
  const randomAccountname = Array.from({length: 6}, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('')
       const bankNames = ['Emirates NBD', 'Abu Dhabi Commercial Bank', 'Dubai Islamic Bank', 'First Abu Dhabi Bank', 'UBL Bank']
const randomBank = bankNames[Math.floor(Math.random() * bankNames.length)]
       const randomIBAN = 'AE' + Math.floor(Math.random() * 90 + 10) + Math.floor(Math.random() * 9000000000000000 + 1000000000000000)
       const randomAccountNumber = Math.floor(Math.random() * 9000000000 + 1000000000).toString()
    it('Account Tranfer',()=>{
        
 cy.visit('http://dev2.sianty.com/#/login')
 
       cy.get('[name="email"]').type('zohaib@email.com')
       cy.get('[name="password"]').type('zohaib12')
       cy.get(':nth-child(5) > .MuiButtonBase-root').click() // login done
       cy.get('[data-key="business_setup"] > .MuiButtonBase-root').trigger('mouseover')
       cy.contains('Inter Account Transfers').click()
       cy.get('.justify-between > .flex > div > .MuiButtonBase-root') .click()
       // form opened
       cy.get('#react-select-38-input').click()
       cy.get('[id^="react-select-38-option"]').first().click()
       cy.get('#react-select-39-input').click({ force: true })
       cy.get('[id^="react-select-39-option"]').eq(2).click({ force: true })
       cy.get('[name="amount"]').type('1000')
       cy.get('.formSubmitBtn > .MuiButtonBase-root').click() // bank transfer Done
    })
})