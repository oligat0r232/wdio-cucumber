import Page from '../pages/base-page'
class simpleHtmlElementsPage extends Page {

    constructor() {
        super('SimpleHtmlElements')
    }

    get idButton() { return $('#idExample') }
    get classButton() { return $('.buttonClass')}
    get nameButton() { return $('[name="button1"]')}
    get linkTextButton() { return $('=Click me using this link text!')}
    get buttonSuccessPageTitle() { return $('.entry-title')}
    get successPageTitle() { return $('.entry-title')}
}

module.exports = new simpleHtmlElementsPage()