<template>
  <div id="admin-home">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center m-t">請選擇管理項目</h1>
      </v-col>
      <v-col cols="12">
        <v-img :src="s" height="500px"></v-img>
      </v-col>
    </v-row>
  </div>

</template>
<script>
export default {
  data () {
    return {
      s: 'https://res.cloudinary.com/dgf0jyslt/image/upload/v1676957676/s4iw8ocxzvasoue43uyh.png'

    }
  }
}

</script>
