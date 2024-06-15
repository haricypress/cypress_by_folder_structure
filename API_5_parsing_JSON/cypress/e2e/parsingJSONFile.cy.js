
describe("verify API", () => {

    it("verify path finder", () => {

        cy.request({

            method: "GET",
            url: "https://fakestoreapi.com/products",

        }).then((response) => {

            expect(response.status).to.equal(200)

            expect(response.body[0].id).to.eq(1)
            expect(response.body[0].price).to.eq(109.95)
            expect(response.body[0].rating.rate).to.eq(3.9)

            expect(response.body[19].title).to.eq('DANVOUY Womens T Shirt Casual Cotton Short')
        })
    })

    it("verify JSON values path with loop", () => {

        let total = 0
        cy.request({

            method: "GET",
            url: "https://fakestoreapi.com/products",

        }).then((response) => {

            response.body.forEach((JSONobj) => {

                total = total + JSONobj.price
            })
            expect(total).to.eq(3240.9199999999987)

        })
    })

    it("verify JSON values path with loop - used query in request", () => {

        let total = 0
        cy.request({

            method: "GET",
            url: "https://fakestoreapi.com/products",
            qs: { limit: 3 }

        }).then((response) => {

            response.body.forEach((JSONobj) => {

                total = total + JSONobj.price
            })
            expect(total).to.equal(188.24)

        })
    })
})