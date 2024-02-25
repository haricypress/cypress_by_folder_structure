
describe("API testing with fixtures and write into file", () => {

    before("", function () {

        cy.fixture("postbody").then((fBody) => {
            this.data = fBody
        })
    })

    it("1. verify response writing into file", function () {

        cy.request({

            method: "POST",
            url: "https://reqres.in/api/users",
            body: this.data

        }).then((response) => {

            cy.log(response)

            // writing entire response into file
            cy.writeFile('cypress/fixtures/output/APIPost.json',response)

            // writing response body into file
            cy.writeFile('cypress/fixtures/output/APIPost.json',response.body)

        })
    })

})