/// <refernce types="cypress" />


describe('second element test', () => {

    it('Checkbox test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

    })

    it('static dropdown test1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('select').select('option1').should('have.value', 'option1')
    })


    it('dynamic dropdown test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each((_$el, index, $list) => {

            if (_$el.text() === 'India') {
                _$el.click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')

    })

    it('radio Button', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[value="radio2"]').check().should('be.checked')
    })




})