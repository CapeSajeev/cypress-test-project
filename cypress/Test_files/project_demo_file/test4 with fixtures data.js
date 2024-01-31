/// <refernce types="cypress" />
import Homepage from "../PageObject/Homepage"
import Productpage from "../PageObject/Productpage"
describe(' test', () => {

    before(() => {

        cy.fixture('form-data').then((data) => {
            globalThis.data1 = data
        })

    })


    it('first test', () => {
        const homepage= new Homepage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homepage.GetName().type(globalThis.data1.name)
        homepage.GetEmail().type(globalThis.data1.email)

    })


    it('Product buying test', () => {
        const homepage=new Homepage()
        const productpage=new Productpage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homepage.GetShopbutton().click()
        globalThis.data1.product.forEach((element) => cy.SelectProduct(element));
        productpage.GetCheckOut().click()

    })







})