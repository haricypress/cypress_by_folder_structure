

describe("verify API", () => {

    it("verify API testing - assert property only, property and it's value", () => {

        cy.request({

            method: "GET",
            url: "https://reqres.in/api/users?page=2"

        }).then((response) => {

            //testing only property
            expect(response.body.data[0]).to.have.property("email")

            //testting with property and value
            expect(response.body.data[0]).to.have.property("email", "michael.lawson@reqres.in")
            
        })


    })
})



