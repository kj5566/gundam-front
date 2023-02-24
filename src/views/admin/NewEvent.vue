<template>
  <div id="admin-events">
    <h1 class="text-center">最新活動</h1>

    <v-row>

      <v-col cols="12">
        <v-btn color="success" @click="openDialog(-1)">新增活動</v-btn>
      </v-col>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>圖片</th>
              <th>名稱</th>
              <th>管理</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(event, idx) in events" :key="event._id">
              <td>
                <v-img :src="event.image" :aspect-ratio="1" :width="100"></v-img>
              </td>
              <td>{{ event.name }}</td>
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
            <h1 class="text-center">{{ form._id.length > 0 ? '編輯活動' : '新增活動' }}</h1>
          </v-card-title>
          <v-card-text>
            <v-row><v-col cols="4"></v-col>
              <v-col cols="4">
                <v-text-field v-model="form.name" type="text" label="名稱" :rules="[rules.required]"></v-text-field>
              </v-col>
              <v-col cols="4"></v-col>
              <v-col cols="4"></v-col>
              <v-col cols="4">
                <v-textarea v-model="form.description" rows="3" auto-grow="auto-grow" label="說明" :rules="[rules.required]"></v-textarea>
              </v-col>
              <v-col cols="4"></v-col>
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
import { reactive } from 'vue'
import Swal from 'sweetalert2'

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  price (value) {
    return value >= 0 || '價格錯誤'
  }
}

const events = reactive([])
const form = reactive({
  _id: '',
  name: '',
  description: '',
  image: undefined,
  valid: false,
  loading: false,
  dialog: false,
  idx: -1
})

const openDialog = (idx) => {
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.description = ''
    form.image = undefined
    form.valid = false
    form.loading = false
    form.idx = -1
  } else {
    form._id = events[idx]._id
    form.name = events[idx].name

    form.description = events[idx].description
    form.image = undefined

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
  fd.append('description', form.description)
  fd.append('image', form.image)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/events', fd)
      events.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/events/' + form._id, fd)
      events[form.idx] = data.result
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
    const { data } = await apiAuth.get('/events/all')
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
