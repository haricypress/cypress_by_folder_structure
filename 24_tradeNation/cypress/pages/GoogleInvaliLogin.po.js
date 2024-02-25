
class gooleInvalidLogin{

    
    loginPageTitle(){
        return 'https://tradenation.com/login'
    }

    login(){
        return '(//div[@class="e1uvhtso10 MuiBox-root css-1qekpap"])/a[1]'

    }
    loginWithGoogle(){
        
        return '(//div[@class="socialBtn__flexRow"])[1]'
    }


}

const login = new gooleInvalidLogin()
export default login