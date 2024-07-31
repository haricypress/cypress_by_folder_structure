Feature: verifying multiple Scenarios

    here verifying Scenarios outline

    Scenario Outline: Verify login with valid credentials
        Given open orangeHRM webpage
        When Enter valid username as "<firstName>"
        And Enter valid password as "<password>"
        Then click on Submit Button
        And confirming successful login

        Examples:
            | firstName | password |
            | Admin     | admin123 |


    # @focus
    # comment @focus to execute all scenarios
    # uncomment @focus to execute below scenario only
    Scenario Outline: Verify login with invalid credentials
        Given open orangeHRM webpage
        When Enter valid username as "<firstName>"
        And Enter valid password as "<password>"
        Then click on Submit Button
        And confirming unSuccessful login

        Examples:
            | firstName | password  |
            | Admin     | fdfd123   |
            | jhgjhgj   | admin123  |
            | hggjhg    | jhghjgjhj |