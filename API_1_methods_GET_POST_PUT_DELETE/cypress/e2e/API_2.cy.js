
describe("verify API", () => {

    it("verify API testing - 2nd script style", () => {

        cy.request({

            method: "GET",
            url: "https://reqres.in/api/users?page=2"

        }).then((response) => {

            expect(response.status).to.equal(200)

        })


    })
})



