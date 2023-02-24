<template>
  <v-app id="app">
    <div id="bid">
      <v-col cols="8" class="m-a">
        <v-img :src="s"></v-img>
      </v-col>
      <v-row>

        <v-col cols="8"></v-col>

        <v-col v-for="bidding in biddings" :key="bidding._id" cols="12">
          <BiddingProducts v-bind="bidding"></BiddingProducts>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import BiddingProducts from '@/components/BiddingProducts.vue'
const biddings = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/biddings')
    biddings.push(...data.result)
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

      s: 'https://res.cloudinary.com/dgf0jyslt/image/upload/v1677052481/%E7%AB%B6%E6%A8%99%E5%95%86%E5%93%81_wrqppl.png'
    }
  },
  methods: {
    placeBid () {
      // 發送 POST 請求到後端
      api.post('biddings', { amount: this.newBidAmount }).then(response => {
        // 更新競標金額
        this.bidAmount = response.data.bidAmount
        // 重置新的競標金額
        this.newBidAmount = 0
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>
