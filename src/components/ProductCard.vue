<template>

  <v-hover
    v-slot="{ isHovering, props }"
    open-delay="200"
  >
    <v-card
      class="v-card-card" :elevation="isHovering ? 16 : 2"
      :class="{ 'on-hover': isHovering }"
      width="350"
      v-bind="props"
    >
      <v-img :src="image" cover="cover" height="300px"><v-card-text class="text-center category">{{ category }}</v-card-text></v-img>
      <v-card-title>
        <router-link class="text-decoration-none  text-primary p-0 " :to="'/products/' + _id"><h1>{{ name }}</h1></router-link>
      </v-card-title>
      <v-card-subtitle class="big">NT${{ price }}</v-card-subtitle>

      <v-card-text class="text-left">
        <h3 class="pre">{{ description }}</h3>
      </v-card-text>

      <!-- <v-card-text class="text-right">
        <h3>剩餘數量：{{ sales }}</h3>
      </v-card-text> -->
      <v-card-actions>

        <v-btn
          text-center
          block elevation="5"
          variant="flat"
          color="primary"
          class="v-btnbt"
          large prepend-icon="mdi-cart" @click="editCart({_id, quantity: 1,sales:-1})"
        >+</v-btn>

      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

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
  sales: {
    type: Number,
    default: 0
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
const { editCart } = user
</script>

<style>

.big{
  font-size: 20px !important;
}

 </style>
