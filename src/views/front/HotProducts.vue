<template>

  <v-app id="app">
    <div>

      <v-col cols="8" class="m-a">
        <v-img :src="sb"></v-img>
      </v-col>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="4" class="p-10">
          <v-img :src="s" height="500px"></v-img>
        </v-col>
        <v-col cols="4" class="text-white text-left p-10"><p><br>&nbsp;<br>
          &nbsp; &nbsp; &nbsp; &nbsp;快速更新各式商品相關資訊，提供獨家商品限量預購！ 與日本同步發售。

          正版授權品牌公仔/模型/手辦/玩具，客戶收藏商品寄賣，各項優質商品，盡在OO玩具！<br>&nbsp;<br>《鋼彈系列》為富野由悠季1979年執導的電視動畫《機動戰士鋼彈》，及其所派生出來的一連串續作、外傳及其他系列的總稱。ガンダム（GUNDAM）在中國大陸一般譯為「高達」或「敢達」、港澳譯為「高達」，臺灣譯為「鋼彈」。<br>&nbsp;<br>

          這個由日本動畫公司日昇（現成為萬代南夢宮影像製作旗下動畫部門）製作的系列SF動畫作品，對以日本為首的全球次文化界產生重大的影響。除了動畫以外，作品還廣泛出現在電影、OVA、漫畫、小說、電子遊戲、特攝、模型等。其品牌市值據估計逾500億日元。<br>&nbsp;<br>系列品牌可謂日本甚至世界動畫的頂峰IP之一。

          《機動戰士鋼彈》之前的巨大機器人動畫屬於善惡二元論色彩重的單元劇故事（超級機器人），觀眾年齡層偏低；而《機動戰士鋼彈》則首次在固定的世界觀中對國家、戰爭、人物進行較深刻的描繪，大大提升了機器人動畫的深度。其中被稱為機動戰士的人型機器人作為武器和道具，被稱為「寫實機器人」，其後類似的機器人動畫因為鋼彈系列的影響也往真實系科幻類別發展。</p>
        </v-col>
        <v-col cols="2"></v-col>

      </v-row>
    </div>
  </v-app>

</template>
<script>
export default {
  data () {
    return {
      s: 'https://res.cloudinary.com/dgf0jyslt/image/upload/v1676960076/jui4eucghyafedeyyzcx.jpg',
      sb: 'https://res.cloudinary.com/dgf0jyslt/image/upload/v1677052481/%E9%97%9C%E6%96%BC%E6%88%91%E5%80%91_tmmjvg.png'
    }
  }
}

</script>
<style>

</style>
