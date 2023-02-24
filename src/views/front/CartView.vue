<template>
  <v-app id="app">
    <div id="cart" class="m-a ">
      <v-row>
        <v-col cols="12">
          <h1 class="text-center h1-title m-a ">購物車</h1>
        </v-col>

        <v-col cols="12">
          <v-table>
            <thead>
              <tr>
                <th>圖片</th>
                <th>名稱</th>
                <th>單價</th>
                <th>數量</th>
                <th>小計</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, idx) in cart" :key="product._id" :class="{'bg-red': !product.p_id.sell}">
                <td>
                  <v-img :aspect-ratio="1" :width="150" :src="product.p_id.image"></v-img>
                </td>
                <td>{{ product.p_id.name }}</td>
                <td>{{ product.p_id.price }}</td>
                <td class="justify-sm-end">
                  <row>
                    <v-col cols="12">
                      <v-btn color="primary" @click="updateCart(idx, -1)">-</v-btn>
                      &nbsp;{{ product.quantity }}  &nbsp;<v-btn color="primary" @click="updateCart(idx, 1)">+</v-btn>
                    </v-col>
                  </row>
                </td>
                <td>{{ product.quantity * product.p_id.price }}</td>
                <td>
                  <v-btn color="red" @click="updateCart(idx, product.quantity*-1)">刪除</v-btn>
                </td>
              </tr>

            </tbody>

          </v-table>
          <h1 class="bg-white"><br></h1>
          <h1 class="text-center bg-white">
            <v-col cols="6" class="m-a">
              <v-text-field
                label="寄送地址"
                :rules="rules"
                hide-details="auto"
              >台灣</v-text-field>
            </v-col>
            <v-col cols="6" class="m-a">
              <v-text-field

                label="電話"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col class="text-center" cols="12">
              <p>總金額 {{ totalPrice }}</p>
              <v-btn color="green" :disabled="!canCheckout" @click="onCheckoutBtnClick">結帳</v-btn>
            </v-col>

            <tr v-if="cart.length === 0">
              <td class="text-center" colspan="6">沒有商品</td>
            </tr>
          </h1>
        </v-col>
        <v-col cols="12">
          <h1 class="text-center tfoot"><br></h1>
        </v-col>
      </v-row>
    </div>

  </v-app>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = useUserStore()
const { editCart, checkout } = user

const cart = reactive([])

const updateCart = async (idx, quantity) => {
  await editCart({ _id: cart[idx].p_id._id, quantity })
  cart[idx].quantity += quantity
  if (cart[idx].quantity <= 0) {
    cart.splice(idx, 1)
  }
}

const onCheckoutBtnClick = async () => {
  await checkout()
  router.push('/orders')
}

const totalPrice = computed(() => {
  return cart.reduce((total, current) => {
    return total + (current.p_id.price * current.quantity)
  }, 0)
})

const canCheckout = computed(() => {
  return cart.length > 0 && !cart.some(product => {
    return !product.p_id.sell
  })
});

(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得購物車失敗'
    })
  }
})()
</script>
<script>
export default {
  data: () => ({
    rules: [
      value => !!value || '必填',
      value => (value && value.length >= 3) || '必須三個字'
    ]
  })
}
</script>
