class PIMmenu{

    employeeFirstNameXpath(){
        return '//input[@name="firstName"]'
    }
    employeeLastNameXpath(){
        return '//input[@name="lastName"]'
    }
    employeeId(){
        return cy.get('.oxd-input.oxd-input--active').eq(3).clear()
    }
    submitAddEmpXpath(){
        return  '//button[@type="submit"]'
    }
    addEmpSuccessMessage(){
        return 'Successfully Saved'
    }
}
const obj_PIMmenuAddEmp = new PIMmenu()
export default obj_PIMmenuAddEmp