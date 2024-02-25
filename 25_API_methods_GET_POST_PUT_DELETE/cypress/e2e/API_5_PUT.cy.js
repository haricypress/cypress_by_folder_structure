
describe("test-suite", () => {

    it("1. test-case", function () {

        const payload = 
        {
            "name": "morpheus",
            "job": "zion resident"
        }
        
        cy.request({

            method : "PUT",
            url : "https://reqres.in/api/users/2",
            body : payload

        }).then((response) =>{

            expect(response.status).to.eq(200)

            expect(response.body).to.have.property("name","morpheus")

            expect(response.body).to.have.property("job","zion resident")

            expect(response.body).to.have.property("updatedAt")
        })
    })

})