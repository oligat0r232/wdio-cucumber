import { camelize } from '../support/lib/functions';

const { Then } = require('cucumber');


Then(
    /^I should see the element "(.*)" with text "(.*)"$/, (element, text) => {
        let elemText = global.page[camelize(element)].getText()
        expect(elemText).toHaveText(text)
    }
)

Then(
    /^I should( not)* be on the page with the title "(.*)"$/, (falseCase, expectedTitle) => {
        const title = browser.getTitle();

        if (falseCase) {
            expect(title).not.toContain(
                expectedTitle,
                `Expected title not to contain "${expectedTitle}"`
            );
        } else {
            expect(title).toContain(
                expectedTitle,
                `Expected title to contain "${expectedTitle}" but found "${title}"`
            );
        }
    }
);
