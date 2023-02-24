<template>
  <div id="admin-biddings">
    <h1 class="text-center">競標管理</h1>

    <v-row>
      <v-col cols="12">
        <v-btn color="success" @click="openDialog(-1)">新增競標商品</v-btn>
      </v-col>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>圖片</th>
              <th>名稱</th>
              <th>時間</th>
              <th>管理</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(bidding, idx) in biddings" :key="bidding._id">
              <td>
                <v-img :src="bidding.image" :aspect-ratio="1" :width="200"></v-img>
              </td>
              <td>{{ bidding.name }}</td>
              <td>{{ bidding.time }}</td>
              <td>
                <v-btn color="primary" icon="mdi-pencil" variant="text" @click="openDialog(idx)"></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <v-dialog v-model="form.dialog" persistent="persistent">
      <v-form v-model="form.valid" @submit.prevent="submit">
        <v-card>
          <v-card-title>
            <h1 class="text-center">{{ form._id.length > 0 ? '編輯商品' : '新增競標商品' }}</h1>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field ref="input" v-model="form.name" type="text" label="名稱" :rules="[rules.required]"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="form.price" type="number" label="起標價格" :rules="[rules.required, rules.price]"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="form.time" type="number" label="時間" :rules="[rules.required, rules.time]"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="form.description" rows="1" auto-grow="auto-grow" label="說明" :rules="[rules.required]"></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-select v-model="form.category" :items="categories" :rules="[rules.required]"></v-select>
              </v-col>

              <v-col cols="12">
                <v-image-input v-model="form.image" class="mx-auto" removable="removable" :max-file-size="1"></v-image-input>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="form.loading" color="red" @click="form.dialog = false">取消</v-btn>
            <v-btn :disabled="form.loading" color="green" type="submit">送出</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>
<script setup>
import { apiAuth } from '@/plugins/axios'
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
const input = ref(null)
const categories = ['模型', '遊戲王卡', '公仔', '景品', '其他']
const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  price (value) {
    return value >= 0 || '價格錯誤'
  },
  time (value) {
    return value >= 0 || '時間錯誤'
  }
}

const biddings = reactive([])
const form = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: undefined,
  time: 0,
  sell: false,
  category: '',
  valid: false,
  loading: false,
  dialog: false,
  idx: -1
})

const openDialog = (idx) => {
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.price = 0
    form.time = 0
    form.description = ''
    form.image = undefined
    form.sell = false
    form.category = ''
    form.valid = false
    form.loading = false
    form.idx = -1
  } else {
    form._id = biddings[idx]._id
    form.name = biddings[idx].name
    form.price = biddings[idx].price
    form.time = biddings[idx].time
    form.description = biddings[idx].description
    form.image = undefined
    form.sell = biddings[idx].sell
    form.category = biddings[idx].category
    form.valid = false
    form.loading = false
    form.idx = idx
  }
  form.dialog = true
}

const submit = async () => {
  if (!form.valid) return

  form.loading = true

  // fd.append(key, value)
  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('price', form.price)
  fd.append('description', form.description)
  fd.append('image', form.image)
  fd.append('sell', form.sell)
  fd.append('category', form.category)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/biddings', fd)
      biddings.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/biddings/' + form._id, fd)
      biddings[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }

  form.loading = false
}

(async () => {
  try {
    const { data } = await apiAuth.get('/biddings/all')
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
