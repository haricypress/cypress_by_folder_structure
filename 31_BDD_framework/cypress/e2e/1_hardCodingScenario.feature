Feature: verifying hard coding Scenarios

    these are dscription lines
    multiple lines can use
    (optional)
    # this is comment line

    Scenario: Verify login with valid credentials
        Given open orangeHRM webpage
        When Enter valid username as "Admin"
        And Enter valid password as "admin123"
        Then click on Submit Button
        And confirming successful login