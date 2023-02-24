<template>
  <v-hover
    v-slot="{ isHovering, props }"
    open-delay="200"
  >
    <v-card
      class="v-card-card " :elevation="isHovering ? 16 : 2"
      :class="{ 'on-hover': isHovering }"
      v-bind="props"
      width="650"
    >
      <v-img :src="image" ratio:1 cover="cover" height="30vw"></v-img>
      <v-card-title>
        <router-link class="text-decoration-none text-primary product-title" :to="'/biddings/' + _id"><h1>{{ name }}</h1></router-link>
      </v-card-title>

      <v-card-text class="text-left">
        <h3 class="pre">{{ description }}</h3>
      </v-card-text>

      <v-card-text class="text-center"><h1>起標價格:${{ price }}</h1>

      </v-card-text>
      <v-card-text class="text-center">
        <h3>剩餘時間:{{ s }}秒</h3>
      </v-card-text>

      <v-card-actions>

        <v-btn
          class="v-btnbt"
          text-center
          block elevation="5"
          variant="flat"
          color="primary"
          large prepend-icon="mdi-currency-usd" @click="editbidcart({_id, bidprice:10})"
        ><h1>競標+10</h1></v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
import { reactive } from 'vue'

const bidcart = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/users/bidcart')
    bidcart.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得競標失敗'
    })
  }
})()

defineProps({
  /* eslint-disable */
  _id: {
    type: String,
    default: ''
  },
  /* eslint-enable */
  name: {
    type: String,
    default: ''
  },
  time: {
    type: Number,
    default: 10
  },
  price: {
    type: Number,
    default: 0
  },

  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  }
})
const user = useUserStore()
const { editbidcart } = user
</script>
<script>
export default {
  data () {
    return {
      bidAmount: 0,
      newBidAmount: 0,
      s: 1000

    }
  },
  mounted () {
    setInterval(() => {
      if (this.s >= 0) {
        this.s--
      } else if (this.s === 0) {
        this.s--
      }
    }, 1000)
  }

}

</script>
