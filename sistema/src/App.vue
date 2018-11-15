<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to ="/cadastroCliente">Cadastro de pedido</router-link>  
      <router-link to ="/relatorio">Relatório</router-link> 
      <router-link to="/about">Sobre</router-link>
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
  background-color: #fbbebe;
  padding-bottom: 1000px;
}
#nav {
  padding: 30px;
  background-color: #c79bbf;
  margin-bottom: 60px;
}

#nav a {
  font-weight: bold;
  color: white;
  background-color: #d9779a;
  margin: 5px;
  padding: 8px 24px;
  border-radius: 25px;
}

</style>
