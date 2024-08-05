<template>
  <!-- 'app-header' bileşenini kullanarak başlık kısmını oluşturur.
       title prop'u ile başlığı aktarır ve basligiDegistir olayını dinler -->
  <app-header v-bind:title="title" v-on:basligiDegistir="updateTitle($event)"></app-header>
  
  <!-- 'app-article' bileşenini kullanarak kullanıcıları görüntüler.
       users prop'u ile kullanıcı listesini aktarır -->
  <app-article v-bind:users="users"></app-article>
  
  <!-- 'app-footer' bileşenini kullanarak alt bilgi kısmını oluşturur -->
  <app-footer></app-footer>
</template>

<script>
  // Gerekli bileşenleri içe aktarır
  import Header from './components/header.vue'
  import Article from './components/article.vue'
  import Footer from './components/footer.vue'

  export default {
    // Bileşenleri tanımlar
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'app-article': Article
    },
    // Bileşenin verilerini tanımlar
    data() {
      return {
        // Başlık bilgisi
        title: "Webtangular",
        // Kullanıcı listesi
        users: [
          { name: "liva", spec: "kale", show: false },
          { name: "ferdi", spec: "bek", show: false },
          { name: "maxim", spec: "solkanat", show: false },
          { name: "irfan", spec: "sağkanat", show: false },
          { name: "djiku", spec: "stoper", show: false },
          { name: "en-nesyri", spec: "santrafor", show: false }
        ]
      }
    },
    // Bileşenin metotlarını tanımlar
    methods: {
      // updateTitle metodu, başlık değiştirildiğinde çalışır
      updateTitle: function(degisenbaslik) {
        // Yeni başlığı title değişkenine atar
        this.title = degisenbaslik;
      }
    }
  }
</script>

<style>
  /* Tüm h1 elemanlarının yazı rengini siyah yapar */
  h1 {
    color: black;
  }
</style>
