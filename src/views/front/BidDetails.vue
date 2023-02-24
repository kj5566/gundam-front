<template>

  <div id="biddings">
    <v-app id="app">
      <v-card class="card">
        <h1 class="text-center h1-title m-a ">{{ biddings.name }}</h1>
        <h1 class="space1"></h1>
        <v-row>

          <v-col cols="6">
            <v-img :src="biddings.image" height="560"></v-img>
          </v-col>
          <v-col cols="6" class="p-20">
            <br><br>

            <h1><p class="pre ">{{ biddings.description }}</p></h1>
            <h1 class="space1"></h1>
            <h2><p class="pre  big1">${{ biddings.price }}</p></h2>
            <h1 class="space1 "></h1>
            <v-form v-model="valid" @submit.prevent="submitbidcart">
              <v-text-field v-model.number="bidprice" type="number" label="加價" :rules="[rules.required, rules.number]"></v-text-field>
              <h3 class="text-right">
                <v-btn type="submit" color="primary">競標</v-btn>

                <v-btn @click="router.go(-1)">回上頁</v-btn>
              </h3>

            </v-form>
          </v-col>
        </v-row>

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
const { editbidcart } = user

const valid = ref(false)
const bidprice = ref(0)

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  number (value) {
    return value > 0 || '數量錯誤'
  }
}

const biddings = reactive({
  _id: '',
  name: '',
  bidprice: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
})

const submitbidcart = () => {
  if (!valid.value) return
  editbidcart({ _id: biddings._id, bidprice: bidprice.value })
}

(async () => {
  try {
    const { data } = await api.get('/biddings/' + route.params.id)
    biddings._id = data.result._id
    biddings.name = data.result.name
    biddings.price = data.result.price
    biddings.description = data.result.description
    biddings.image = data.result.image
    biddings.category = data.result.category
    biddings.bidprice = data.result.bidprice

    document.title = 'OO模型 | ' + biddings.name
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
<script>

</script>
