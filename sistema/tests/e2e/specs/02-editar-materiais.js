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
        .click('a[id=link0]')
        .waitForElementVisible('#infoPedido', 10000)
        .click('button[id=adicionaMaterial]')
        .pause(1000)
        .setValue('input[id=nome]', 'material test 2')
        .setValue('input[id=preco]', 25)
        .click('button[id=submitModal]')
        .pause(1000)
        .click('button[id=finalizarPedido]')
        .pause(10000)
        .end()
    }
  }
  