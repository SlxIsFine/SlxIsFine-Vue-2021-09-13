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
        children: [
          {
          path: ':submenu',
          name: 'opera',
          component: () => import('../components/market/Opera.vue')
        }

        ]
      },
      {
        path: '/nftInfo',
        name: 'nftInfo',
        component: () => import('../components/market/nftInfo/NftInfo.vue')
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
      },
      {
        path: "/release",
        name: "release",
        component: () => import("../components/personalPage/release/Release.vue")
      },
      {
        path: "/editUserInfo",
        name: "editUserInfo",
        component: () => import("../components/personalPage/editUserInfo/EditUserInfo.vue")
      },
      {
        path: "/onShelf",
        name: "onShelf",
        component: () => import("../components/personalPage/onShelf/OnShelf.vue")
      },
      {
        path: "/willSale",
        name: "willSale",
        component: () => import("../components/personalPage/willSale.vue")
      },
      {
        path: "/moneyDetail",
        name: "moneyDetail",
        component: () => import("../components/personalPage/moneyDetail/moneyDetail.vue")
      }

    ]
  },
  {
    path: "/nftDetail",
    name: "nftDetail",
    component: () => import("../components/personalPage/NftDetail.vue")

  },


  , {
    path: "/login",
    name: "loginMain",
    component: () => import("../components/login/Login.vue"),
    children:[
      {
        path: "/login",
        name: "login",
        component: () => import("../components/login/LoginPanel.vue"),
        children:[
          {
            path: "byName",
            name: "loginByName",
            component: () => import("../components/login/LoginName.vue"),
          },
          {
            path: "byPhone",
            name: "loginByPhone",
            component: () => import("../components/login/LoginPhone.vue"),
          },
          {
            path: "byWechat",
            name: "loginByWechat",
            component: () => import("../components/login/LoginWechat.vue"),
          }
        ]
      },
      {
        path: "/register",
        name: "register",
        component: () => import("../components/login/Register.vue"),
      },
  
    ]
  },
  //  {
  //   path: "/register",
  //   name: "register",
  //   component: () => import("../views/Register.vue")
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
