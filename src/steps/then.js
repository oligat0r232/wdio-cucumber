import { camelize } from '../support/lib/functions';
import { simplePage } from '../pages/simple-html-elements.page';

const { Then } = require('cucumber');


Then(/^I should( not)* see the element "(.*)" with text "(.*)"$/, (falseCase, element, text) => {
    if (falseCase) {
        expect(global.page[camelize(element)]).not.toHaveTextContaining(text)
    }
    else {
        expect(global.page[camelize(element)]).toHaveTextContaining(text)
    }
})

Then(/^I should( not)* be on the page with the title "(.*)"$/, (falseCase, expectedTitle) => {
    const title = browser.getTitle();

    if (falseCase) {
        expect(title).not.toContain(
            expectedTitle,
            `Expected title not to contain "${expectedTitle}"`
        )
    } else {
        expect(title).toContain(
            expectedTitle,
            `Expected title to contain "${expectedTitle}" but found "${title}"`
        )
    }
})

Then(/^I should( not)* see the success page for the button with "(.*)" selector$/, (falseCase, selector) => {
    if (falseCase) {
        if (selector == "linkText") {
            expect(simplePage.buttonSuccessPageTitle()).not.toHaveText("Link Success")
        }
        else {
            expect(simplePage.buttonSuccessPageTitle()).not.toHaveText("Button Success")
        }
    }
    else {
        if (selector == "linkText") {
            expect(simplePage.buttonSuccessPageTitle()).toHaveText("Link Success")
        }
        else {
            expect(simplePage.buttonSuccessPageTitle()).toHaveText("Button Success")
        }
    }
})
