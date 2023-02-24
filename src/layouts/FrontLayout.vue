<template>

  <v-app-bar
    class="lin"
  >

    <v-spacer>

      <v-tabs>
        <v-col cols="2">
          <v-img :src="s" class="none"> <v-tab to="/"> </v-tab></v-img>
        </v-col>
        <v-tab class="w1" to="/event">
          <h2>最新活動</h2>
        </v-tab>
        <v-tab class="w1" to="/bit">
          <h2>線上商城</h2>
        </v-tab>
        <v-tab class="w1" to="/bid">
          <h2>競標商品</h2>
        </v-tab>
        <v-tab class="w1" to="/hot">
          <h2>關於我們</h2>
        </v-tab>
      </v-tabs>

    </v-spacer>

    <v-btn v-if="!isLogin" prepend-icon="mdi-account-plus" variant="text" to="/register">註冊</v-btn>
    <v-btn v-if="!isLogin" prepend-icon="mdi-login" variant="text" to="/login">登入</v-btn>
    <v-btn v-if="isLogin" prepend-icon="mdi-cart" variant="text" to="/cart">
      <v-badge :content="cart" color="success" floating="floating">購物車</v-badge>
    </v-btn>
    <v-btn v-if="isLogin" prepend-icon="mdi-currency-usd" variant="text" to="/bidcart">
      競標
    </v-btn>
    <v-btn v-if="isLogin" prepend-icon="mdi-format-list-bulleted" variant="text" to="/orders">訂單</v-btn>
    <v-btn v-if="isLogin &amp;&amp; isAdmin" prepend-icon="mdi-cog" variant="text" to="/admin">管理</v-btn>
    <v-btn v-if="isLogin" prepend-icon="mdi-logout" variant="text" @click="logout">登出</v-btn>

  </v-app-bar>

  <v-main>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer class="shadow">
    <v-col
      class="text-center nil"
      cols="12"
    >

      <div class="pt-5">
        {{ new Date().getFullYear() }}
        前端網頁開發技術專題
      </div>
    </v-col>

  </v-footer>

</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)
const { logout } = user

</script>
<script>
export default {
  data () {
    return {

      s: 'https://res.cloudinary.com/dgf0jyslt/image/upload/v1677044459/rhit7m1giosxqz3uutos.png'

    }
  }
}
</script>
<style>
.lin{
  /* background-image: linear-gradient(to bottom, #0473E0, #6AC4F5 ) !important; */
  background-color:#005FDC !important;
  color:white !important;
}
.nil{
  background-color:#005FDC !important;
  color:white !important;
}

.none{
  color:#005FDC !important;

}
.pt-5{
  padding-top:20px;
  padding-bottom:20px
}
.shadow {
    -webkit-filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7))!important;
    filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7))!important;
}
</style>
