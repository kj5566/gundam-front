import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api, apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import router from '@/plugins/router'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const account = ref('')
  const email = ref('')
  const cart = ref(0)
  const bidcart = ref(0)
  const role = ref(0)
  const sales = ref(0)

  const isLogin = computed(() => {
    return token.value.length > 0
  })
  const isAdmin = computed(() => {
    return role.value === 1
  })
  const avatar = computed(() => {
    return `https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`
  })

  const login = async (form) => {
    try {
      const { data } = await api.post('/users/login', form)
      token.value = data.result.token
      account.value = data.result.account
      email.value = data.result.email
      cart.value = data.result.cart
      bidcart.value = data.result.bidcart
      role.value = data.result.role
      sales.value = data.result.sales
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '登入成功'
      })
      router.push('/')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  const logout = async () => {
    try {
      await apiAuth.delete('/users/logout')
      token.value = ''
      account.value = ''
      role.value = 0
      cart.value = 0
      bidcart.value = 0
      router.push('/')
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '登出成功'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  const getUser = async () => {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/me')
      account.value = data.result.account
      email.value = data.result.email
      cart.value = data.result.cart
      sales.value = data.result.sales
      bidcart.value = data.result.bidcart
      role.value = data.result.role
    } catch (error) {
      logout()
    }
  }

  const editCart = async ({ _id, quantity, sales }) => {
    if (token.value.length === 0) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: '請先登入'
      })
      router.push('/login')
      return
    }
    try {
      const { data } = await apiAuth.post('/users/cart', { p_id: _id, quantity: parseInt(quantity), sales: parseInt(sales) })
      cart.value = data.result

      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '更新購物車成功'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }
  const editbidcart = async ({ _id, bidprice }) => {
    if (token.value.length === 0) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: '請先登入'
      })
      router.push('/login')
      return
    }
    try {
      const { data } = await apiAuth.post('users/bidcart', { b_id: _id, bidprice: parseInt(bidprice) })
      bidcart.value = data.result

      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '競標成功'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤誤'
      })
    }
  }

  const checkout = async () => {
    try {
      await apiAuth.post('/orders')
      cart.value = 0
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '結帳成功'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  return {
    token,
    account,
    email,
    cart,
    bidcart,
    role,
    login,
    logout,
    getUser,
    isLogin,
    isAdmin,
    avatar,
    editCart,
    checkout,
    editbidcart

  }
}, {
  persist: {
    key: '20230103',
    paths: ['token']
  }
})
