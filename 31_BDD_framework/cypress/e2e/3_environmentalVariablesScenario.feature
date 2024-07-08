Feature: Verify login functionality in orangeHRM

    Here verifying login functionality on orangeHERM webpage
    With valid credentials, environmental variables using in step definitions

    Scenario: Verifying login with valid credentials
        Given open orangeHRM webpage
        When Enter valid username
        And Enter valid password
        Then click on Submit Button
        And confirming successful login or not
