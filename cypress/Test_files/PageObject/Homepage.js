class Homepage {

    GetName() {
       return cy.get(':nth-child(1) > .form-control')
    }

    GetEmail(){
       return cy.get(':nth-child(2) > .form-control')
    }

    GetShopbutton(){
        return cy.get(':nth-child(2) > .nav-link')
     }








}
export default Homepage