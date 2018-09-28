import Vue from 'vue'
import Router from 'vue-router'
import cadastro from './components/cadastro.vue'
import DetalhePedido from './components/detalhesPedido'
import Relatorio from './components/Relatorio'
import ListarPedidos from './components/ListarPedidos'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListarPedidos
    },
    {
      path: '/cadastroCliente',
      name: 'cadastro',
      component: cadastro
    },
    {
      path: '/detalhePedido',
      name: 'DetalhePedido',
      component: DetalhePedido
    },
    {
      path: '/Relatorio',
      name: 'Relatório',
      component: Relatorio
    },
  ]
})
