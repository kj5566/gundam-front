<template>
  <v-hover
    v-slot="{ isHovering, props }"
    open-delay="200"
  >
    <v-card
      class="card-event m-a" :elevation="isHovering ? 16 : 2"
      :class="{ 'on-hover': isHovering }"
      width="1500"
      v-bind="props"
    >

      <v-img :src="image" cover="cover" height="30vw">
        <v-card-text>
          <p>{{ description }}</p>
        </v-card-text>
      </v-img>

    </v-card>
    <v-card-text>

    </v-card-text>
    <v-card-text>

    </v-card-text>
  </v-hover>
</template>

<script setup>

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
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }

})

</script>
<style>
.v-card{
padding:50px
}

</style>
