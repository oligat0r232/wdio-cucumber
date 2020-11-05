import { pageAggregator } from '../pages/index';
import { camelize } from '../support/lib/functions';

const { When } = require('cucumber');

When(/the tester uses the "(.*)" page object/, (name) => {
    pageAggregator.forEach(page => {
        if (page.name === name) {
            global.page = page
        }
    })

    if (global.page === undefined) {
        throw `No page object with name ${name}`
    }
})

/**
 * Rather than simply taking the argument 'element' and performing an action on it, I have utlised a camelise function 
 * with the intention of taking whatever string is passed into the element argument and camelise it to match the name
 * in the page object. This enables me to use the page object elements directly in the feature files using real English
 * rather than, for example, id-button etc.
 */
When(/^I click on the "(.*)" element$/, (element) => {
    global.page[camelize(element)].waitForDisplayed()
    global.page[camelize(element)].click()
});

When(/^I click on the button with "(.*)" selector$/, (selector) => {
    global.page[(selector)+'Button'].waitForDisplayed()
    global.page[(selector)+'Button'].click()
})
