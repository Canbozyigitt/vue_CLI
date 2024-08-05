<template>
 
  <app-header v-bind:title="title"></app-header>
  <app-article v-bind:users="users"></app-article>
  <app-footer></app-footer>
</template>

<script>
import Header from './components/header.vue'
import Article from './components/article.vue'
import Footer from './components/footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer':Footer,
    'app-article':Article
  },
  data (){
    return {
      title:"Sayfanın başlığı",
      users: [
             {name: "liva", spec: "kale", show: false},
             {name: "ferdi", spec: "bek", show: false},
             {name: "maxim", spec: "solkanat", show: false},
             {name: "irfan", spec: "sağkanat", show: false},
             {name: "djiku", spec: "stoper", show: false},
             {name: "en-nesyri", spec: "santrafor", show: false},
         ]
    }
  }
}
</script>
<style>
h1{
    color:black

}
</style>


