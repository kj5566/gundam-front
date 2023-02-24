<template>

  <div id="product">
    <v-app id="app">

      <v-card class="card">
        <h1 class="text-center h1-title m-a ">{{ product.name }}</h1>
        <h1 class="space1"></h1>
        <v-row>

          <v-col cols="6">
            <v-img :src="product.image" height="560"></v-img>
          </v-col>
          <v-col cols="6" class="p-20">
            <br><br>

            <h1><p class="br">{{ product.description }}</p></h1>
            <h1 class="space1"></h1>
            <h2><p class="pre  big1">${{ product.price }}</p></h2>
            <h1 class="space1 "></h1>
            <v-form v-model="valid" @submit.prevent="submitCart">
              <v-text-field v-model.number="quantity" type="number" label="數量" :rules="[rules.required, rules.number]"></v-text-field>
              <h3 class="text-right">
                <v-btn type="submit" color="primary">加入購物車</v-btn>

                <v-btn @click="router.go(-1)">回上頁</v-btn>
              </h3>

            </v-form>
          </v-col>
        </v-row>
        <v-overlay class="align-center justify-center text-center" :model-value="!product.sell" persistent="persistent">
          <h1 class="text-red">已下架</h1>
          <v-btn @click="router.go(-1)">回上頁</v-btn>
        </v-overlay>
      </v-card>
    </v-app>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { api } from '@/plugins/axios'
import { useRoute, useRouter } from 'vue-router'
import { Swal } from 'sweetalert2'
import { useUserStore } from '@/stores/user'

const route = useRoute()
const router = useRouter()

const user = useUserStore()
const { editCart } = user

const valid = ref(false)
const quantity = ref(0)

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  number (value) {
    return value > 0 || '數量錯誤'
  }
}

const product = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
})

const submitCart = () => {
  if (!valid.value) return
  editCart({ _id: product._id, quantity: quantity.value })
}

(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.description = data.result.description
    product.image = data.result.image
    product.sell = data.result.sell
    product.category = data.result.category

    document.title = 'OO模型 | ' + product.name
    // document.querySelector('meta[property="og:title"]').setAttribute('content', product.name)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品失敗'
    })
    router.go(-1)
  }
})()
</script>
