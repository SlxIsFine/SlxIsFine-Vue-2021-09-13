import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: "/",
    redirect: "/home"

  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/MainPage.vue"),
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/market',
        name: 'market',
        component: () => import('../views/Market.vue'),
        children: [{
          path: ':submenu',
          name: 'opera',
          component: () => import('../components/market/Opera.vue')
        }]
      },
      {
        path: '/Collection',
        name: 'Collection',
        component: () => import('../views/Collection.vue'),
        children: [{
          path: 'create',
          name: 'create',
          // component: () => import('../components/Collection/Create.vue')
        }]
      },
      {
        path: '/publish',
        name: 'publish',
        component: () => import('../views/Publish.vue'),
        children: [{
          path: 'create',
          name: 'create',
          component: () => import('../components/publish/Create.vue')
        }]
      },
      {
        path: '/statistic-data',
        name: 'statistic-data',
        component: () => import('../views/StatisticData.vue')
      },
      {
        path: '/my-wallet',
        name: 'my-wallet',
        component: () => import('../views/MyWallet.vue'),
      },
      {
        path: '/:target/details/:id',
        name: 'details',
        component: () => import('../views/Details.vue'),

      },
      // 个人主页
      {
        path: '/personalPage',
        name: 'personalPage',
        component: () => import('../views/PersonalPage.vue'),
        children: [

          {
            path: "saleOrders",
            name: "saleOrders",
            component: () => import("../components/personalPage/saleOrders/SaleOrders.vue")
          },
          {
            path: "/personalPage",
            name: "defaultPersonal",
            component: () => import("../components/personalPage/Default.vue")
          },

        ]
      }]
  },
  {
    path: "/nftDetail",
    name:"nftDetail",
    component:()=>import("../components/personalPage/NftDetail.vue")

  },

  , {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  }, {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue")
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
