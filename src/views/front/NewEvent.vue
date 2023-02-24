<template>
  <v-app id="app">

    <div id="event">
      <v-col cols="8" class="m-a">
        <v-img :src="s"></v-img>
      </v-col>
      <v-row>
        <v-col cols="8"></v-col>
        <v-col v-for="event in events" :key="event._id" cols="12">
          <EventCard v-bind="event"><a href="https://gnn.gamer.com.tw/detail.php?sn=245586"></a></EventCard>
        </v-col>
      </v-row>
    </div>
  </v-app>

</template>

<script setup>
import { reactive } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import EventCard from '@/components/EventCard.vue'

const events = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/events')
    events.push(...data.result)
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
    return { s: 'https://res.cloudinary.com/dgf0jyslt/image/upload/v1677052481/%E6%9C%80%E6%96%B0%E6%B4%BB%E5%8B%95_qsof4x.png' }
  }
}
</script>
