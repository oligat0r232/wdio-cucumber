# This is an improvement on the Buttons.feature file with one scenario covering all buttons and success pages.
# Although eac row in the examples table is executed as a separate test when run, the file itself is easier to maintain
# As there is only one test scenario.
Feature: Simple buttons scenario outline

    As an automation tester
    I want to be able to test buttons
    So that I can be a better tester

    Background: Navigate to the correct url and pageobject
        Given I open the "simple-html-elements-for-automation" page
        And the tester uses the "SimpleHtmlElements" page object

    Scenario Outline: Can click on a button using different selectors
        When I click on the button with "<selector>" selector
        Then I should be on the page with the title "<title>"
        And I should see the element "Success Page Title" with text "<entryTitle>"

        Examples: Button selectors
            | selector | title                        | entryTitle     |
            | id       | Button success - Ultimate QA | Button success |
            | class    | Button success - Ultimate QA | Button success |
            | name     | Button success - Ultimate QA | Button success |
            | linkText | Link success - Ultimate QA   | Link success   |
