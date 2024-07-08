class PIMmenu{

    addEmployeeMenu(){

        return cy.get(".oxd-topbar-body-nav-tab-item").eq(2)
    }
    EmpID(){
        return cy.get(".oxd-input.oxd-input--active").eq(1)
    }
    clickOnSearchBtn(){
        return '//button[@type="submit"]'
    }
    searchDisplayXpath(){
        return cy.xpath("//div[@data-v-6c07a142]").eq(0)
    }
}
const obj_PIMmenu = new PIMmenu()
export default obj_PIMmenu