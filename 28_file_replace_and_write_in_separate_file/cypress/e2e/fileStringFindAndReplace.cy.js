
describe("verify file - find - replace", () => {

    it("verify - in file String Find And Replace by another string - write result in separate file", () => {

        var re = "\n\ninstagram - telugu poems\n\nhttps://www.instagram.com/hari.kishore.poet/reels\n========================================\n\nhttps://rutube.ru/video/"
        var a = ""
        cy.fixture("a.txt").then(data => {

            data = data.split("\n")
            data.forEach((value) => {
                if (value.includes('https://rutube.ru/video/')) {
                    value = value.replace("https://rutube.ru/video/", re);
                    a = a + value
                }

            })// forEach
            // cy.log("data going to write : ",a)
            cy.writeFile('cypress/output/append.txt', a, { flag: 'a' })
            cy.writeFile('cypress/output/append.txt', '\ninstagram - telugu poems\nhttps://www.instagram.com/hari.kishore.poet/reels\n', { flag: 'a' })

        })// fixture
    })
})