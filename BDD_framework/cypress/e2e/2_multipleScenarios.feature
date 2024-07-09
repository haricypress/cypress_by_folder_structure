
Feature: verifying multiple Scenarios

    below are description lines
    commenting @focus line means non @focus Scenario
    comment/ uncommnet all @focus means execute all Scenarios
    some @focus scenarios means execute @focus Scenarios only
    non @focus scenarios always skip if atleast one @focus scenario is there
    # this is comment line

    @focus
    # this is comment line
    Scenario: Verify login with valid credentials
        Given open orangeHRM webpage
        When Enter valid username as "Admin"
        And Enter valid password as "admin123"
        Then click on Submit Button
        And confirming successful login

    Scenario: Verify login with valid username, invalid password
        Given open orangeHRM webpage
        When Enter valid username as "Admin"
        And Enter valid password as "jhjkkj"
        Then click on Submit Button
        And confirming unSuccessful login

    # @focus
    Scenario: Verify login with invalid username, valid password
        Given open orangeHRM webpage
        When Enter valid username as "hjghj"
        And Enter valid password as "admin123"
        Then click on Submit Button
        And confirming unSuccessful login

    @focus
    Scenario: Verify login with invalid credentials
        Given open orangeHRM webpage
        When Enter valid username as "jhjhgh"
        And Enter valid password as "khjkjhkjhjhjkhkj"
        Then click on Submit Button
        And confirming unSuccessful login