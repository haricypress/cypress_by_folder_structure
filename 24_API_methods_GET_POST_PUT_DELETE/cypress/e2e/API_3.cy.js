

describe("verify API", () => {

    it("verify API testing - assert property value from response", () => {

        cy.request({

            method: "GET",
            url: "https://reqres.in/api/users?page=2"

        }).then((response) => {

        
            // assert page property's valule
            
            expect(response.body.page).to.eq(2)
            

            
        })


    })
})



