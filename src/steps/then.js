import { camelize } from '../support/lib/functions';
import { simplePage } from '../pages/simple-html-elements.page';

const { Then } = require('cucumber');


Then(/^I should see the element "(.*)" with text "(.*)"$/, (element, text) => {
    expect(global.page[camelize(element)]).toHaveTextContaining(text)
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

Then(/^If I click the row "([^"]*)" then I should the following nested information$/, function (rowName, dataTable) {
    console.log(dataTable);
    var data = dataTable.raw();
    console.log(data);
    data.forEach(function (element) {
        console.log("Element:" + element[0]);
        console.log("Element:" + element[1]);
    }, this)
})

Then(/^I should see the success page for the button with "(.*)" selector$/, (selector) => {
    if (selector == "linkText") {
        // let elemText = global.page[camelize(element)].getText()
        console.log(simplePage.buttonSuccessPageTitle())
        expect(simplePage.buttonSuccessPageTitle()).toHaveText("Link Success")
    }
    else {
        //let elemText = global.page[camelize(element)].getText()
        expect(simplePage.buttonSuccessPageTitle()).toHaveText("Button Success")
    }
})
