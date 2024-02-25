
describe("verifying different responses for same API request", () => {

    it("1. verifying 'reqres.in' DELETE response", () => {

        cy.request({

            method: "DELETE",
            url: "https://reqres.in/api/users/2",
        })

            .its("status")
            //here status is 204, bcoz, nothing returned from server
            .should("equal", 204) 
    })

    it("2. verifying 'jsonplaceholder.typicode.com' DELETE response", () => {

        cy.request({

            method: "DELETE",
            url: "https://jsonplaceholder.typicode.com/posts/1",
        })

            .its("status")
            //here status is 200, bcoz, {} returned from server
            .should("eq", 200)
    })


})