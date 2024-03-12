
describe("verify API ", () => {

    it("verify API validations", () => {

        cy.request({
            methods : "GET", 
            url : "https://reqres.in/api/users"
        
        }).then((response) =>{

            expect(response.status).to.equal(200)

            expect(response.body.page).to.eq(1)

            expect(response.body.data[0]).to.have.property("id",1)
            expect(response.body.data[0]).have.property("id",1)

            expect(response.body.data[5]).to.has.property("id",6)
            expect(response.body.data[0]).has.property("id",1)
            expect(response.body.data).has.length(6)



            

        })


    })
})



