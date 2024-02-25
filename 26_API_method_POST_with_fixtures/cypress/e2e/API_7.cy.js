describe("API testing - stringify - write into file ", () => {

    before("", function () {

        cy.fixture("postbody").then((fBody) => {
            this.data = fBody
        })
    })

    it("1. verify convert response into string and display", function () {

        cy.request({

            method: "POST",
            url: "https://reqres.in/api/users",
            body: this.data

        }).then((response) => {

            cy.log(response)

            cy.log(JSON.stringify(response))

        })
    })
    it("2. verify convert response into string, writing into json file", function () {

        cy.request({

            method: "POST",
            url: "https://reqres.in/api/users",
            body: this.data

        }).then((response) => {

            // saving into variable, string type data
            const stringResponse = JSON.stringify(response)

            // displaying string type data in time travel
            cy.log(JSON.stringify(stringResponse))

            // writing string type data into json file
            cy.writeFile('cypress/fixtures/output/APIPost.json',stringResponse)

        })
    })

})