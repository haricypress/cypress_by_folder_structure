
describe("verify API - Bearer token", () => {
    var token
    var orderID
        it("1. generate token", () => {

        cy.request({
            method: "POST",
            url: 'https://simple-books-api.glitch.me/api-clients',
            body:
            {
                "clientName": "jjjj",
                "clientEmail": Math.random().toString(5).substring(2) + "@example.com"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(201)
            token = response.body.accessToken
        })
    })

    it("2. create book", () => {

        cy.request({
            method: "POST",
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: { "Authorization": "Bearer " + token },
            body:
            {
                "bookId": 1,
                "customerName": "jjjj"
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.created).to.eq(true)
            orderID = response.body.orderId
        })
    })
    it("3. get all books", () => {
        cy.request({
            method: "GET",
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: { "Authorization": "Bearer " + token },
            failOnStatusCode: false,

        }).then((response) => {
            expect(response.status).to.eq(200)

        })
    })
    
    it("4. get book based on query", () => {
        cy.request({
            method: "GET",
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: { "Authorization": "Bearer " + token },
            qs :orderID,
            failOnStatusCode: false,

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body[0].id).to.eq(orderID)
        })
    })

    it("5. update book based on query", () => {
        cy.request({
            method: "PATCH",
            url: 'https://simple-books-api.glitch.me/orders/'+orderID,
            headers: { "Authorization": "Bearer " + token },           
            failOnStatusCode: false,

        }).then((response) => {
            expect(response.status).to.eq(204)
        })
    })
    
    it("6. delete book based on query", () => {
        cy.request({
            method: "DELETE",
            url: 'https://simple-books-api.glitch.me/orders/'+orderID,
            headers: { "Authorization": "Bearer " + token },           
            failOnStatusCode: false,

        }).then((response) => {
            expect(response.status).to.eq(204)
        })
    })
})