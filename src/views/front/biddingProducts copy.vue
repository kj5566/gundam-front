<template>
  <v-app id="app">
    <div>
      <v-col cols="8" class="m-a">
        <v-img :src="s"></v-img>
      </v-col>
      <v-col cols="8"></v-col>
      <div id="bit">

        <v-row>

          <p v-for="(product, index) in products" :key="index" class="oncard">
            <ProductCard v-bind="product"></ProductCard>
          </p>

        </v-row>
      </div>
    </div>
  </v-app>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import ProductCard from '@/components/ProductCard'

const products = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()

</script>
<script>
export default {
  data () {
    return { s: 'https://res.cloudinary.com/dgf0jyslt/image/upload/v1677052481/%E7%B7%9A%E4%B8%8A%E5%95%86%E5%9F%8E_uak3rn.png' }
  }
}
</script>
