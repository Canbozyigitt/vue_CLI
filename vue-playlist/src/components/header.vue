<template>
  <!-- header elemanı, bileşenin başlık kısmını içerir -->
  <header>
    <!-- h1 elemanı, başlığı görüntüler ve üzerine tıklanınca changeTitle metodunu çağırır -->
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  // props, bileşene dışarıdan veri aktarımı sağlar
  props: {
    // title, String tipinde ve gerekli bir prop olarak tanımlanmış
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    // changeTitle metodu, tıklama olayı gerçekleştiğinde çalışır
    changeTitle: function() {
      // bu metot, 'basligiDegistir' adında bir custom event (özel olay) yayar
      // ve bu olayla birlikte bir mesaj iletir
      this.$emit("basligiDegistir", "Alt bileşen tarafından değiştirildi");
    }
  }
};
</script>

<style scoped>
/* header elemanının arka plan rengini ve padding ayarlarını belirler */
header {
  background: black;
  padding: 10px;
}

/* h1 elemanının yazı rengini ve hizalamasını belirler */
h1 {
  color: #f8f3f3;
  text-align: center;
}
</style>
