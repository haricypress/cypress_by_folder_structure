
describe("verify loading test-data from fixtures - using in multiple test-cases", () => {


    before("", function () {

        cy.fixture("postbody").then((fBody) => {
            this.data = fBody
        })
    })

    it("1. loading test data from fixtures", function () {


        cy.request({

            method: "POST",
            url: "https://reqres.in/api/users",
            body: this.data


        }).then((response) => {

            expect(response.status).to.eq(201)
            expect(response.body).to.have.property("name", "morpheus")
            expect(response.body).to.have.property("job", "leader")




        })

    })

    it("2. test case", function () {


        cy.request({

            method: "POST",
            url: "https://reqres.in/api/users",
            body: this.data


        }).then((response) => {

            expect(response.status).to.eq(201)
            
            expect(response.body).to.have.property("id")
            expect(response.body).to.have.property("id", response.body.id)

            expect(response.body).to.have.property("createdAt", response.body.createdAt)


        })

    })
})