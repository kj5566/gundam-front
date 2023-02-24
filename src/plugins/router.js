import { createRouter, createWebHashHistory } from 'vue-router'
import FrontLayout from '@/layouts/FrontLayout.vue'
import FrontHomeView from '@/views/front/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHashHistory(import.meta.BASE_URL),
  routes: [
    {
      path: '/',
      component: FrontLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: FrontHomeView,
          meta: {
            title: '模型玩具網',
            login: false,
            admin: false
          }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/front/RegisterView.vue'),
          meta: {
            title: '模型玩具網 | 註冊',
            login: false,
            admin: false
          }
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/front/LoginView.vue'),
          meta: {
            title: '模型玩具網 | 登入',
            login: false,
            admin: false
          }
        },

        {
          path: 'event',
          name: 'event',
          component: () => import('@/views/front/NewEvent.vue'),
          meta: {
            title: '模型玩具網 | 活動',
            login: false,
            admin: false
          }
        },
        {
          path: 'bit',
          name: 'bit',
          component: () => import('@/views/front/biddingProducts copy.vue'),
          meta: {
            title: '模型玩具網 | 活動',
            login: false,
            admin: false
          }
        },
        {
          path: 'hot',
          name: 'hot',
          component: () => import('@/views/front/HotProducts.vue'),
          meta: {
            title: '模型玩具網 | 活動',
            login: false,
            admin: false
          }
        },
        {
          path: 'bid',
          name: 'bid',
          component: () => import('@/views/front/BiddingProducts.vue'),
          meta: {
            title: '模型玩具網 | 競標',
            login: false,
            admin: false
          }
        },

        {
          path: 'products/:id',
          name: 'product',
          component: () => import('@/views/front/ProductView.vue'),
          meta: {
            title: '模型玩具網 | 商品',
            login: false,
            admin: false
          }
        },
        {
          path: 'biddings/:id',
          name: 'biddings',
          component: () => import('@/views/front/BidDetails.vue'),
          meta: {
            title: '模型玩具網 | 商品',
            login: false,
            admin: false
          }
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('@/views/front/CartView.vue'),
          meta: {
            title: '模型玩具網 | 購物車',
            login: true,
            admin: false
          }
        },
        {
          path: 'bidcart',
          name: 'bidcart',
          component: () => import('@/views/front/BidCart.vue'),
          meta: {
            title: '模型玩具網 | 競標',
            login: true,
            admin: false
          }
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import('@/views/front/OrdersView.vue'),
          meta: {
            title: '模型玩具網 | 訂單',
            login: true,
            admin: false
          }
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('@/layouts/AdminLayout.vue'),
      children: [
        {
          path: '',
          name: 'admin-home',
          component: () => import('@/views/admin/HomeView.vue'),
          meta: {
            title: '模型玩具網 | 管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'products',
          name: 'admin-products',
          component: () => import('@/views/admin/ProductsView.vue'),
          meta: {
            title: '模型玩具網 | 商品管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'biddings',
          name: 'admin-biddings',
          component: () => import('@/views/admin/BiddingView.vue'),
          meta: {
            title: '模型玩具網 | 競標商品管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'orders',
          name: 'admin-orders',
          component: () => import('@/views/admin/OrdersView.vue'),
          meta: {
            title: '模型玩具網 | 訂單管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'events',
          name: 'admin-events',
          component: () => import('@/views/admin/NewEvent.vue'),
          meta: {
            title: '模型玩具網 | 活動管理',
            login: true,
            admin: true
          }
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundView,
      meta: {
        title: '模型玩具網 | 404',
        login: false,
        admin: false
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'all',
      redirect: '/404'
    }
  ]
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()
  if (user.isLogin && (to.path === '/register' || to.path === '/login')) {
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})

export default router
