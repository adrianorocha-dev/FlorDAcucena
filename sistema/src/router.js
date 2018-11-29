import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import cadastro from './components/cadastro.vue'
import DetalhePedido from './components/detalhesPedido'
import Relatorio from './components/Relatorio'
import ListarPedidos from './components/ListarPedidos'
import DadosRelatorio from './components/DadosRelatorio'

import { auth } from './firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/pedidos'
    },
    {
      path: '/',
      redirect: '/pedidos'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/pedidos',
      name: 'home',
      component: ListarPedidos,
      meta: { requiresAuth: true }
    },
    {
      path: '/pedidos/novo',
      name: 'cadastro',
      component: cadastro,
      meta: { requiresAuth: true }
    },
    {
      path: '/detalhesPedido/:hkey',
      name: 'detalhesPedido',
      component: DetalhePedido,
      meta: { requiresAuth: true }
    },
    {
      path: '/relatorio',
      name: 'Relatorio',
      component: Relatorio,
      meta: { requiresAuth: true }
    },
    {
      path: '/relatorio/dados',
      name: 'DadosRelatorio',
      component: DadosRelatorio,
      meta: { requiresAuth: true }
    },
  ]
});

router.beforeEach((to, form, next) => {
  let currentUser = auth.currentUser;
  let requiresAuth = to.matched.some(record=> record.meta.requiresAuth);

  // console.log('User:' + currentUser + ' requiresAuth: ' + requiresAuth);

  if (requiresAuth && !currentUser) {
    next('login');
  } else if (!requiresAuth && currentUser) {
    next('pedidos');
  } else {
    next();
  }
});

export default router;