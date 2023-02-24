<template>

  <v-app id="app">

    <v-row class="home ">

      <v-carousel hide-delimiters cycle height="840">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :show-arrows="hover"
          :src="item.src"
          class="sb"
        ></v-carousel-item>
      </v-carousel>
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <v-img :src="s"></v-img>
      </v-col>
      <v-col cols="2"></v-col>

      <p v-for="(product,idx) in products" :key="idx" class="container">
        <ProductCard v-if="product.sales>10" v-bind="product"></ProductCard>
      </p>

    </v-row>

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
    return {

      items: [
        {
          src: 'https://res.cloudinary.com/dgf0jyslt/image/upload/v1676961434/xh5btbn9aklhhqdnqgya.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dgf0jyslt/image/upload/v1677139833/event2_fusaj3.png'
        },
        {
          src: 'https://res.cloudinary.com/dgf0jyslt/image/upload/v1677138042/%E6%B0%B4%E6%98%9F_o0hjid.png'
        },
        {
          src: 'https://res.cloudinary.com/dgf0jyslt/image/upload/v1677138181/gundam_rx0myx.png'
        }
      ],
      s: {
        src: 'https://res.cloudinary.com/dgf0jyslt/image/upload/v1677052481/%E7%86%B1%E9%96%80%E5%95%86%E5%93%81_wdrygl.png'
      }
    }
  }
}
</script>
<style>
.v-container {
margin:0 !important;
padding:0!important;

}

.v-carousel-item{
  padding:0
}
.v-main{
    margin:0 !important;

  }

#app {
  background: url('https://res.cloudinary.com/dgf0jyslt/image/upload/v1677129527/background_briwsm.png')
    !important;
  background-size: cover;
  padding:0;
  margin:0;
}
</style>
