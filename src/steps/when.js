import { pageAggregator } from '../pages/index';
import { camelize } from '../support/lib/functions';

const { When } = require('cucumber');

When(/I navigate to the "(.*)" page/, (name) => {
    pageAggregator.forEach(page => {
        if (page.name === name) {
            global.page = page
        }
    })

    if (global.page === undefined) {
        throw `No page object with name ${name}`
    }
})

When(/^I click on the "(.*)" element$/, (element) => {
    global.page[camelize(element)].waitForDisplayed()
    global.page[camelize(element)].click()
});

When(/^I click on the button with "(.*)" selector$/, (selector) => {
    global.page[(selector)+'Button'].waitForDisplayed()
    global.page[(selector)+'Button'].click()
})
