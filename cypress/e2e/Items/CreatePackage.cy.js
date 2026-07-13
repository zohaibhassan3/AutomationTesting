describe('Items',()=>{
   

    // Creating Random data 
    const randomTitle = Array.from({length: 6}, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('')
    const randomName = Array.from({length: 6}, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('')
    const randomInvalidDescription = 'A'.repeat(501)
    const randomValidDescription = 'Sgf'.repeat(3)
    const randomNumber = Math.floor(Math.random() * 9000000000 + 1000000000).toString()
    const randomArabicName = Array.from({length: 6}, () => String.fromCharCode(0x0621 + Math.floor(Math.random() * 28))).join('')
    const randomEmail = `${Array.from({length: 8}, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('')}@email.com`
    const randompassword = Array.from({length:9},()=>'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'[Math.floor(Math.random()*72)]).join('');
    const randomArabicTitle = Array.from({length: 6}, () => String.fromCharCode(0x0621 + Math.floor(Math.random() * 28))).join('')
    
    
it('Create Internal Service',()=>{
    
        // Call login Function   
      cy.loginCMS()
      cy.wait(400);

      // Visit Create form
    cy.contains('Items') .trigger('mouseover') .click({ force: true });
  
    cy.contains('.MuiListItemButton-root', "Packages") .trigger('mouseover') .click({ force: true });
     cy.get('.justify-between > .flex > div > .MuiButtonBase-root').click( {force: true})

     // Fill form 
     cy.get('[name="packageCode"]').type(randomNumber)
     cy.get('[name="title"]').type(randomName)
     cy.get('[name="secondaryTitle"]').type(randomArabicName)
     cy.get('[name="price"]').type(200)
     cy.get('[name="itemLimit"]').type(10)
     
     //  Part Type
      cy.contains('Part Type *').closest('.commonSelect').find('input').first().click({ force: true })
      cy.get('[class*="-option"]').eq(1).click({ force: true })
    
     //  Package Group
      cy.contains('Package Group').closest('.commonSelect').find('input').first().click({ force: true })
      cy.get('[class*="-option"]').eq(0).click({ force: true })

    //  Pring Type
      cy.contains('Pricing Type *').closest('.commonSelect').find('input').first().click({ force: true })
      cy.get('[class*="-option"]').eq(1).click({ force: true })

    // Submit Form
    cy.get('.formSubmitBtn > .MuiButtonBase-root').scrollIntoView().should('be.visible').click({ force: true })
    cy.contains('Package created successfully')

})
})