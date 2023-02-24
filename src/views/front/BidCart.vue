<template>
  <v-app id="app">
    <div id="bidcart" class="m-a">
      <v-row>
        <v-col cols="12">
          <h1 class="text-center h1-title m-a">競標</h1>
        </v-col>

        <v-col cols="12">
          <v-table>
            <thead>
              <tr>
                <th>圖片</th>
                <th>名稱</th>
                <th>價格</th>
                <th>時間</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(biddings,idx) in bidcart" :key="biddings.b_id">

                <td><v-img :aspect-ratio="1" :width="150" :src="biddings.b_id.image"></v-img></td>
                <td>{{ biddings.b_id.name }}</td>

                <td class="justify-sm-end">
                  <row class="text-center">
                    <v-col cols="4">
                    </v-col>
                    <v-col cols="4">目前出價:${{ biddings.bidprice }}</v-col>
                  </row>
                </td>
                <td>{{ idx+1 }}</td>
              </tr>
              <tr v-if="bidcart.length === 0">
                <td class="text-center" colspan="6">沒有競標</td>
              </tr>

            </tbody>

          </v-table>
        </v-col>
        <v-col cols="12">
          <h1 class="text-center tfoot"><br></h1>
        </v-col>
      </v-row>
    </div>
    <div class="space1">   </div>
    <div class="space2">   </div>
  </v-app>
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'

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
</script>
