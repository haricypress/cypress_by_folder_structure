
describe("verifying API http methods", () => {

    it("1. verifying 1st syntax DELETE call", () => {

        cy.request("DELETE","https://jsonplaceholder.typicode.com/posts/1")

            .its("status")
      
            .should("equal", 200)
    })

    it("2. verifying 2nd syntax DELETE call", () => {

        cy.request({

            method: "DELETE",
            url: "https://jsonplaceholder.typicode.com/posts/1",
        })

            .its("status")
            .should("eq", 200)
    })

    it("3. verifying 3rd syntax DELETE call", () => {

        cy.request({

            method: "DELETE",
            url: "https://jsonplaceholder.typicode.com/posts/1",
            
        }).then((response) =>{

            expect(response.status).to.equal(200)

        })

    })

})