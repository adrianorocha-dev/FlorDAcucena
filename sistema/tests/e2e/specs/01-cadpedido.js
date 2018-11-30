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
        .click('a[id=novoPedido]')
        .waitForElementVisible('#formCadastro', 5000)
        .setValue('input[id=nomeDoPedido]', 'Pedido Teste E2E')
        .setValue('input[id=nomeCliente]', 'NightWatch')
        .setValue('textarea[id=descricao]', 'This is an automated test with NightWatch')
        .setValue('input[id=dataDeEntrega]', 11302018)
        .setValue('input[id=tempoDeProducao]', 5)
        .click('button[id=addMaterial]')
        .pause(1000)
        .setValue('input[id=nome]', 'material test')
        .setValue('input[id=preco]', 10)
        .click('button[id=submitModal]')
        .pause(2000)
        .click('button[id=confirmarCadastro]')
        .pause(5000)
        .end()
    }
  }
  