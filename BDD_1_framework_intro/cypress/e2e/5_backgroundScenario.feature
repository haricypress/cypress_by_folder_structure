Feature: Verify login functionality in orangeHRM

    Background: login steps
        Given open orangeHRM webpage
        When Enter valid username
        And Enter valid password
        Then click on Submit Button
        And confirming successful login or not

    Scenario: Verifying adding Employee Details

        When click on PIM menu
        When Click on Add Employee menu
        And Enter First name in Add employee page
        And Enter last name in Add employee page
        And Enter empolyee ID in Add employee page
        Then click on submit Button in Add employee page
        And displaying confirm message after employee added successfully

    # @focus
    Scenario: Verify Added employee in list

        When click on PIM menu
        And Enter empolyee ID in PIM Page
        And click in search button in PIM Page
        Then verify Employee ID in search result in PIM Page