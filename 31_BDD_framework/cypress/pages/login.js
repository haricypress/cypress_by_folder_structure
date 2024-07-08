class loginPage {

    userNameXpath(){
        return '//input[@name="username"]'
    }
    passwordXpath(){
        return '//input[@name="password"]'
    }
    submitButtonXpath(){
        return '//button[@type="submit"]'
    }

}
const obj_loginPage = new loginPage()
export default obj_loginPage