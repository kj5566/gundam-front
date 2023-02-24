<template>
  <v-app id="app">
    <div id="orders" class="m-a">
      <v-row>
        <v-col cols="12">
          <h1 class="text-center h1-title m-a">訂單</h1>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12">
          <v-table>
            <thead>
              <tr>
                <th>ID</th>
                <th>日期</th>
                <th>金額</th>
                <th>商品</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order._id">
                <td>{{ order._id }}</td>
                <td>{{ new Date(order.date).toLocaleDateString() }}</td>
                <td>{{ order.totalPrice }}</td>
                <td>
                  <ul>
                    <li v-for="product in order.products" :key="product._id">{{ product.quantity + ' 個 ' + product.p_id.name }}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
        <v-col cols="12">
          <h1 class="text-center tfoot"><br></h1>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'

const orders = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((total, current) => total + current.p_id.price * current.quantity, 0)
      return order
    }))
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得訂單失敗'
    })
  }
})()
</script>
