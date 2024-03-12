

class login{


    username(){

        return 'input[name="username"]'
    }

    password(){

        return 'input[name="password"]'
    }

    submitButton = 'button[type="submit"]'

}

const loginHRM = new login()

export default loginHRM