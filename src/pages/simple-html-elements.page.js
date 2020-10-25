import Page from '../pages/base-page'
class simpleHtmlElementsPage extends Page {

    constructor() {
        super('SimpleHtmlElements')
    }

    get idButton() { return $('#idExample') }
    get buttonSuccessPageTitle() { return $('.entry-title=Button success')}

}

module.exports = new simpleHtmlElementsPage()