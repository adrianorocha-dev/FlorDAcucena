// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'default e2e tests': browser => {
    browser
        .url(process.env.VUE_DEV_SERVER_URL)
        .maximizeWindow()
        .waitForElementVisible('#app', 5000)
        .assert.elementCount('input', 2)
        .setValue('input[type=email]', 'adm@adm.com')
        .setValue('input[type=password]', '123456')
        .click('button[type=submit]')
        .pause(5000)
        .click('a[href="/relatorio"]')
        .waitForElementVisible('#contRel', 10000)
        .click('a[href="/relatorio/dados"]')
        .waitForElementVisible('#dadosRelatorio', 10000)
        .setValue('input[id=luz]', 100)
        .setValue('input[id=agua]', 100)
        .setValue('input[id=internet]', 100)
        .setValue('input[id=aluguel]', 100)
        .click('button[type=submit]')
        .waitForElementVisible('#contRel', 10000)
        .assert.containsText('#custosFixos', '400.00')
        .pause(5000)
        .end()
    }
}