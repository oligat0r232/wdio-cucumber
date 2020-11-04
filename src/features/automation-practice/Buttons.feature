# This is an example of a feature file with well written individual scenarios but the feature file itself designed better
Feature: Simple buttons individual

    As an automation tester
    I want to be able to test buttons
    So that I can be a better tester

    Background: Navigate to the correct url and pageobject
        Given I open the "simple-html-elements-for-automation" page
        And I navigate to the "SimpleHtmlElements" page

    Scenario: Can click on a button using it's id
        When I click on the "Id Button" element
        Then I should be on the page with the title "Button success - Ultimate QA"
        And I should see the element "Success Page Title" with text "Button success"

    Scenario: Can click on a button using it's class name
        When I click on the "Id Button" element
        Then I should be on the page with the title "Button success - Ultimate QA"
        And I should see the element "Success Page Title" with text "Button success"

    Scenario: Can click on a button using it's class name
        When I click on the "Name Button" element
        Then I should be on the page with the title "Button success - Ultimate QA"
        And I should see the element "Success Page Title" with text "Button success"

    Scenario: Can click on a button using it's class name
        When I click on the "Link Text Button" element
        Then I should be on the page with the title "Button success - Ultimate QA"
        And I should see the element "Success Page Title" with text "Link success"
