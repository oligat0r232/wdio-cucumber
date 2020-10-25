import { Given } from 'cucumber';

Given(
    /^I open the "(.*)" page$/, (page) => {
        browser.url('/' + page)
    });
