import Vue from 'vue'
import Router from 'vue-router'
import cadastro from './components/cadastro.vue'
import DetalhePedido from './components/detalhesPedido'
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
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
    }
  ]
})
