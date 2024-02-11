
describe("main test suite", () => {
  
    it(" main test case", () => {
        cy.log("main test case")
    })
    
})





























// describe("1.test suite", () => {

//     // test cases    -   .skip and .only tags work
//     // hooks         -   .skip and .only tags not work
//     // test suites   -   .skip work and .only not work


//     beforeEach("beforeeach hook", () => {

//         cy.log("this 2nd beforeEach hook")
//     })
//     after("after hook", () => {

//         cy.log("this is after hook")
//     })
//     afterEach("afterEach hook", () => {

//         cy.log("this is afterEach hook")
//     })
//     before("before hook", () => {

//         cy.log("1st is before hook")
//     })
//     before("before hook", () => {

//         cy.log("2nd is before hook")
//     })


//     it("1. test case", () => {

//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         cy.get('input[name="username"]').type("Admin")
//         cy.get('input[name="password"]').type("admin123")
//         cy.get('button[type="submit"]').click()

//         cy.contains("Dashboard").should("be.visible")

//     })
//     it("2. test case", () => {

//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         cy.get('input[name="username"]').type("Admin")
//         cy.get('input[name="password"]').type("admin123")
//         cy.get('button[type="submit"]').click()

//         cy.contains("Dashboard").should("be.visible")

//     })
//     it("3. test case", () => {

//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         cy.get('input[name="username"]').type("Admin")
//         cy.get('input[name="password"]').type("admin123")
//         cy.get('button[type="submit"]').click()

//         cy.contains("Dashboard").should("be.visible")

//     })
//     it.only("4. test case", () => {

//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         cy.get('input[name="username"]').type("Admin")
//         cy.get('input[name="password"]').type("admin123")
//         cy.get('button[type="submit"]').click()

//         cy.contains("Dashboard").should("be.visible")

//     })
//     it.only("5. test case", () => {

//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         cy.get('input[name="username"]').type("Admin")
//         cy.get('input[name="password"]').type("admin123")
//         cy.get('button[type="submit"]').click()

//         cy.contains("Dashboard").should("be.visible")

//     })
// })
// describe.skip("2.test suite", () => {



//     beforeEach("beforeeach hook", () => {

//         cy.log("this 2nd beforeEach hook")
//     })
//     after("after hook", () => {

//         cy.log("this is after hook")
//     })
//     afterEach("afterEach hook", () => {

//         cy.log("this is afterEach hook")
//     })
//     before("before hook", () => {

//         cy.log("1st is before hook")
//     })
//     before("before hook", () => {

//         cy.log("2nd is before hook")
//     })


//     it("1. test case", () => {

//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         cy.get('input[name="username"]').type("Admin")
//         cy.get('input[name="password"]').type("admin123")
//         cy.get('button[type="submit"]').click()

//         cy.contains("Dashboard").should("be.visible")

//     })
//     it("2. test case", () => {

//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         cy.get('input[name="username"]').type("Admin")
//         cy.get('input[name="password"]').type("admin123")
//         cy.get('button[type="submit"]').click()

//         cy.contains("Dashboard").should("be.visible")

//     })
//     it("3. test case", () => {

//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         cy.get('input[name="username"]').type("Admin")
//         cy.get('input[name="password"]').type("admin123")
//         cy.get('button[type="submit"]').click()

//         cy.contains("Dashboard").should("be.visible")

//     })
//     it.only("4. test case", () => {

//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         cy.get('input[name="username"]').type("Admin")
//         cy.get('input[name="password"]').type("admin123")
//         cy.get('button[type="submit"]').click()

//         cy.contains("Dashboard").should("be.visible")

//     })
//     it.only("5. test case", () => {

//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         cy.get('input[name="username"]').type("Admin")
//         cy.get('input[name="password"]').type("admin123")
//         cy.get('button[type="submit"]').click()

//         cy.contains("Dashboard").should("be.visible")

//     })
// })
// describe("3.test suite", () => {

//     beforeEach("beforeeach hook", () => {

//         cy.log("this 2nd beforeEach hook")
//     })
//     after("after hook", () => {

//         cy.log("this is after hook")
//     })
//     afterEach("afterEach hook", () => {

//         cy.log("this is afterEach hook")
//     })
//     before("before hook", () => {

//         cy.log("1st is before hook")
//     })
//     before("before hook", () => {

//         cy.log("2nd is before hook")
//     })


//     it("1. test case", () => {

//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         cy.get('input[name="username"]').type("Admin")
//         cy.get('input[name="password"]').type("admin123")
//         cy.get('button[type="submit"]').click()

//         cy.contains("Dashboard").should("be.visible")

//     })
//     it("2. test case", () => {

//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         cy.get('input[name="username"]').type("Admin")
//         cy.get('input[name="password"]').type("admin123")
//         cy.get('button[type="submit"]').click()

//         cy.contains("Dashboard").should("be.visible")

//     })
//     it("3. test case", () => {

//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         cy.get('input[name="username"]').type("Admin")
//         cy.get('input[name="password"]').type("admin123")
//         cy.get('button[type="submit"]').click()

//         cy.contains("Dashboard").should("be.visible")

//     })
//     it.only("4. test case", () => {

//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         cy.get('input[name="username"]').type("Admin")
//         cy.get('input[name="password"]').type("admin123")
//         cy.get('button[type="submit"]').click()

//         cy.contains("Dashboard").should("be.visible")

//     })
//     it.only("5. test case", () => {

//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         cy.get('input[name="username"]').type("Admin")
//         cy.get('input[name="password"]').type("admin123")
//         cy.get('button[type="submit"]').click()

//         cy.contains("Dashboard").should("be.visible")

//     })
// })
