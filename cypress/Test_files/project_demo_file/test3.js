/// <refernce types="cypress" />

describe('Tab and Table test', () => {

    it('Child Tab', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // opening the child tab in same page
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get("#navbarSupportedContent a[href='about.html']").click()
            cy.get('.mt-50 h2').should('contain', 'Welcome to QAClick Academy')
        })

    })

    it('Table content serach', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Python")) {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })

    })



})

describe('Mouse hover test', () => {

    it('get the hidden element without mouse hover', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       // cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('contain', 'top')

    })

    it('Mouse hover', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('contain', 'top')

    })



})