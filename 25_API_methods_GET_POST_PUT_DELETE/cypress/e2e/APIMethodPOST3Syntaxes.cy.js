
describe("verifying API http methods", () => {

    it("1. verifying 1st syntax POST call", () => {

        cy.request("POST", "https://jsonplaceholder.typicode.com/posts",
        
        {
            "title": "Test Post",
            "body": "this is post call",
            "userId": 1
        })

            .its("status")
            .should("equal", 201)
    })

    it("2. verifying 2nd syntax POST call", () => {

        cy.request({

            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            body : 
            {
                "title": "Test Post",
                "body": "this is post call",
                "userId": 1
            }
        })

            .its("status")
            .should("eq", 201)
    })

    it("3. verifying 3rd syntax POST call", () => {

        cy.request({

            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            body : 
            {
                "title": "Test Post",
                "body": "this is post call",
                "userId": 1
            }
            
        }).then((response) =>{

            expect(response.status).to.equal(201)

        })
    })

})