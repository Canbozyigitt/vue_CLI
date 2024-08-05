<template>
    <!-- Kullanıcıların listelendiği ana kapsayıcı div -->
    <div id="users">
     <!-- Kullanıcıları listeleyen ul elementi -->
     <ul>
         <!-- users dizisindeki her bir user için bir li elementi oluşturur -->
         <li v-for="user in users" v-on:click="user.show=!user.show">
             <!-- Kullanıcının adını gösterir -->
             <h2>{{ user.name }}</h2>
             <!-- Kullanıcının özelliğini show değişkeni true ise gösterir -->
             <p v-show="user.show">{{ user.spec }}</p>
         </li>
     </ul>
     <button v-on:click="deleteUser">Kullanıcı Sil</button>
    </div>
 </template>
 
 <script>
 export default {
    props:{
        users:{
            type:Array,
            required:true
        }
    },
   data() {
     return {
         // Kullanıcıların adını, özelliklerini ve gösterilip gösterilmeyeceğini tutan dizi
       
     }
   },
   methods:{
    deleteUser: function(){
        this.users.pop();
    }
   }
 }
 </script>
 
 <style scoped>
 /* Kullanıcıları içeren ana kapsayıcı div'in stili */
 #users {
     width: 100%;
     max-width: 1200px;
     margin: 40px auto;
     padding: 0 20px;
     box-sizing: border-box;
 }
 /* Kullanıcı listesinin stil ayarları */
 ul {
     display: flex;
     flex-wrap: wrap;
     list-style-type: none;
     padding: 0;
 }
 /* Her bir kullanıcının stil ayarları */
 li {
     flex-grow: 1;
     flex-basis: 300px;
     text-align: center;
     padding: 30px;
     border: 1px solid #222;
     margin: 10px;
 }
 </style>
 