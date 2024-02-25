

class login{


    username(){

        return 'input[name="username"]'
    }

    password(){

        return 'input[name="password"]'
    }

    submitButton = 'button[type="submit"]'


    loginWithCredentials(){

        cy.get(this.username()).type("Admin")
        cy.get(this.password()).type("admin123")
        cy.get(this.submitButton).click()
    }

}

const loginHRM = new login()

export default loginHRM