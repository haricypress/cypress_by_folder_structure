
describe("verify API intro", () => {

    it("verify API testing - 1st script style", () => {

        cy.request("GET", "https://reqres.in/api/users?page=2", "Body").then((response) =>{

            expect(response.status).to.equal(200)

        })


    })
})



