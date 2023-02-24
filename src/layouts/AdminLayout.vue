<template>
  <v-navigation-drawer permanent="permanent" class="bg-secondary">
    <v-list>
      <v-list-item><h1 class="text-center">OO模型&nbsp;</h1><h3 class="text-center">後台管理系統</h3></v-list-item>

    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-item to="/admin/products" title="商品管理" prepend-icon="mdi-shopping"></v-list-item>
      <v-list-item to="/admin/orders" title="訂單管理" prepend-icon="mdi-format-list-bulleted"></v-list-item>
      <v-list-item to="/admin/events" title="活動管理" prepend-icon="mdi-image-filter-hdr"></v-list-item>
      <v-list-item to="/admin/biddings" title="競標商品管理" prepend-icon="mdi-pokeball"></v-list-item>
      <v-list-item to="/" title="回首頁" prepend-icon="mdi-home"></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-main>

</template>
