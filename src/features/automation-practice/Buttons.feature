Feature: Simple buttons

    As an automation tester
    I want to be able to test buttons
    So that I can be a better tester

    Background: Navigate to the correct url and pageobject
        Given I open the "simple-html-elements-for-automation" page
        And I navigate to the "SimpleHtmlElements" page

    Scenario: Can click on a button using it's id
        When I click on the "Id Button" element
        Then I should be on the page with the title "Button success - Ultimate QA"
        And I should see the element "Button Success Page Title" with text "Button success"