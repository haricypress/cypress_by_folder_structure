class dashBoard {

    dashBoardUrl(){
        return "web/index.php/dashboard/index"
    }
    PIMmenuXpath(){
        return cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name']").eq(1)
    }
}
const obj_dashBoard =  new dashBoard()
export default obj_dashBoard