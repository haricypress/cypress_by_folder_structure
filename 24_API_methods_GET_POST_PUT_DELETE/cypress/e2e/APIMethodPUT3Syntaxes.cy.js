
describe("verifying API http methods", () => {

    it("1. verifying 1st syntax PUT call", () => {

        cy.request("PUT","https://jsonplaceholder.typicode.com/posts/1",

        {
            "title": "Test Post updated",
            "body": "this is post call",
            "userId": 1,
            "id": 1
        })

            .its("status")
            .should("equal", 200)
    })

    it("2. verifying 2nd syntax PUT call", () => {

        cy.request({

            method: "PUT",
            url: "https://jsonplaceholder.typicode.com/posts/1",
            body : 
            {
                "title": "Test Post updated",
                "body": "this is post call",
                "userId": 1,
                "id": 1
            }
        })

            .its("status")
            .should("eq", 200)
    })

    it("3. verifying 3rd syntax PUT call", () => {

        cy.request({

            method: "PUT",
            url: "https://jsonplaceholder.typicode.com/posts/1",
            body : 
            {
                "title": "Test Post updated",
                "body": "this is post call",
                "userId": 1,
                "id": 1
            }
            
        }).then((response) =>{

            expect(response.status).to.equal(200)

        })

    })

})