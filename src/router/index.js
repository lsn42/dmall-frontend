import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Index',
    component: () => import( /* webpackChunkName: "main" */ '../views/Index.vue')
  },
  {
    path: '/search_result',
    name: 'SearchResultList',
    component: () => import( /* webpackChunkName: "main" */ '../views/SearchResultList.vue')
  },
  {
    path: '/list/:id',
    name: 'List',
    component: () => import( /* webpackChunkName: "main" */ '../views/List.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import( /* webpackChunkName: "main" */ '../views/Product.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "main" */ '../views/Login.vue')

  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import( /* webpackChunkName: "main" */ '../views/Cart.vue')

  },
  {
    path: '/place_order',
    name: 'PlaceOrder',
    component: () => import( /* webpackChunkName: "main" */ '../views/PlaceOrder.vue')
  },
  {
    path: '/my/order',
    name: 'MyOrder',
    component: () => import( /* webpackChunkName: "main" */ '../views/MyOrder.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router