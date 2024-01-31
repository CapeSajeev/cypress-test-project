/// <refernce types="cypress" />


describe('first test', () => {

    it('first test', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type("ca")
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const vegname = $el.find('h4.product-name').text()
            if (vegname.includes('Cashews')) {
                $el.find('button').click()
            }
        })
        cy.get('.brand').should('have.text', 'GREENKART')
        cy.get('.brand').then(function (logo) {
            cy.log(logo.text())
        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()


    })

})