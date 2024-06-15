
describe("login by pop-up", () => {

    it("1. basic auth - single line", () => {

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth/')

    })//it 1

    it("2. basic auth - multiple lines", () => {

        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin',
            },
        })
    })//it 2
    
    it("3. API - basic auth", () => {

        cy.request({
            method: 'GET',
            url: 'https://the-internet.herokuapp.com/basic_auth',
            // failOnStatusCode: false,
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })
        .then((response) => {
                cy.log(response.status)
                cy.log(JSON.stringify(response.body))
            })

    })//it 3
})//desc
