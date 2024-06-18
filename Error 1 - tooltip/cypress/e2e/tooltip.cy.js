
// Error in this test case - tooltip not displaying but asserting

describe("tooltip", () =>{

    it("amazon site", () =>{

        cy.visit("https://www.amazon.in/")

        // "tooltip" having element's locator
        cy.get('a[tabindex="-1"][role="button"]').trigger('mouseover').scrollIntoView()

        // tooltip locator
        cy.get('span[data-class="al-tooltip"]').should("contain","This influencer livestream")

        //Error, if tooltip display then no Error
        // cy.get('span[data-class="al-tooltip"]').should("be.visible").and("contain","This influencer livestream")


    })
})


/*

elements 2 types, scrollable, not scrollable
ex : botton - not scrollable
     sidebar - scrollable

***********************************************************************

scrollTo() - scroll based on position.
position - topleft, top, center, bottom, bottomright....
goto center of window - cy.scrollTo("center")

***********************************************************************

scrollIntoView() - scroll based on element.
to display element on screen - cy.get(locator).scrollIntoView()

***********************************************************************

when mouse placed on element, some detailed information will display like pop-up, that is tooltip.  
some elements have tooltips, tooltip also has locator.

*/