
describe("verify query parameter in API testing", () => {

    it("approach 1 - hard coding", () => {

        cy.request({

            method: "GET",
            url: "https://reqres.in/api/users",
            qs : { page : 2 }  // hard coding


        }).then((response) => {

            expect(response.status).to.eq(200)
            expect(response.body.page).to.eq(2)  // asseting pages No

        })
    })

    it("approach 2 -  variable", () => {


        const queryParam = { page : 2 }

        cy.request({

            method: "GET",
            url: "https://reqres.in/api/users",
            qs : queryParam  // variable using


        }).then((response) => {

            expect(response.status).to.eq(200)
            expect(response.body.page).to.eq(2)  // asserting page No

        })
    })
})