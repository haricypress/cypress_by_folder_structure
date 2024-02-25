
/*

API method calls in 3 synatxes

*/

describe("verifying API http methods", () => {

    it("1. verifying 1st syntax GET call", () => {

        cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")

            .its("status")
            .should("equal", 200)
    })

    it("2. verifying 2nd syntax GET call", () => {

        cy.request({

            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/1"

        })

            .its("status")
            .should("eq", 200)
    })

    it("3. verifying 3rd syntax GET call", () => {

        cy.request({

            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/1"

        }).then((response) =>{

            expect(response.status).to.equal(200)

        })
    })

})