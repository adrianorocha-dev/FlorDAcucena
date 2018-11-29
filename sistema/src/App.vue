<template>
  <div id="app">
    <div id="nav" class="row justify-contents-start">
      <div class="col-md-2">
        <b-img :src="require('./assets/logt.png')" fluid />
      </div>
      <div class="nav-links">
        <router-link class="btn botao" to="/">Pedidos</router-link>
        <router-link class="btn botao" to ="/relatorio">Relatório</router-link> 
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffffff;
}
#nav {
  padding: 30px;
  background-color: #c79bbf;
  margin-bottom: 30px;
}

.logo {
  background-image: url("assets/fl.png");
  color: transparent;
}

.nav-links a {
  margin-top: 30px;
}

</style>
