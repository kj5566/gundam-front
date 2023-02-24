<template>
  <v-app id="app">
    <div id="login">
      <v-row>
        <div class="m-a">
          <h1 class="text-center h1-title ">登入</h1>
        </div>
        <v-divider></v-divider>
        <v-col cols="12"></v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4" class="text-center text-yellow-accent-3">
          <v-form v-model="valid" @submit.prevent="login">
            <v-text-field v-model="form.account" type="text" :rules="[rules.required, rules.length]" label="帳號" counter="20" maxlength="18"></v-text-field>

            <v-text-field v-model="form.password" :type="show1 ? 'text' : 'password'" :rules="[rules.required, rules.length]" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" label="密碼" counter="20" @click:append="show1 = !show1"></v-text-field>
            <div class="text-center my-5">
              <v-btn color="success" type="submit" size="large" :loading="loading">登入</v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </div>
    <div class="space2"></div>
  </v-app>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const valid = ref(false)
const loading = ref(false)
const form = reactive({
  account: '',
  password: ''
})

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  length (value) {
    return (value.length >= 4 && value.length <= 20) || '長度必須為 4 ~ 20 個字'
  }
}

const login = async () => {
  loading.value = true
  await user.login(form)
  loading.value = false
}
</script>
