# This is an example of how a feature file could be written with individual scenarios.
# This is not an ideal example of a good feature file.
# ButtonsOutline.feature is an example of how this feature file can be improved.
# The intention is to demonstrate my understanding of well written scenarios and feature files.
Feature: Simple buttons individual

    # Because of the essence of BDD, it important to create an image of a user.
    # In this particular example, the user is an automation tester,
    # Who wants to be able to test buttons,
    # With the value being that they can become a better tester.
    As an automation tester
    I want to be able to test buttons
    So that I can be a better tester

    # Backgrounds are important in feature files in my opinion because they reduce the clutter in the scenarios themselves.
    # All of the tests in this feature file require the user to be on the "simple-html-elements-for-automation" web page
    # and for the test suite to navigate to the SimpleHtmlElements page object.
    
    # It is important to use the correct language in each step to indicate what user/function is executing that step.
    Background: Navigate to the correct url and pageobject
        Given I open the "simple-html-elements-for-automation" page
        And the tester uses the "SimpleHtmlElements" page object

    # Each scenario here is verifying whether the correct page is opened by verifying the page title and text on the page.
    # Each scenario is executing the same actions with a different selector.
    # ButtonsOutline.feature demonstrates how the same can be achieved in just one test scenario.
    Scenario: Can click on a button using it's id
        When I click on the "Id Button" element
        Then I should be on the page with the title "Button success - Ultimate QA"
        And I should see the element "Success Page Title" with text "Button success"

    Scenario: Can click on a button using it's class name
        When I click on the "Class Button" element
        Then I should be on the page with the title "Button success - Ultimate QA"
        And I should see the element "Success Page Title" with text "Button success"

    Scenario: Can click on a button using it's name
        When I click on the "Name Button" element
        Then I should be on the page with the title "Button success - Ultimate QA"
        And I should see the element "Success Page Title" with text "Button success"

    Scenario: Can click on a button using it's link text
        When I click on the "Link Text Button" element
        Then I should be on the page with the title "Link success - Ultimate QA"
        And I should see the element "Success Page Title" with text "Link success"
