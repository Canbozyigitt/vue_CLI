<template>
    <footer>
    <p>{{ copyright }}-{{ year }}</p>
    </footer>
</template>
<script>
export default{
  data(){
    return{
        copyright:"tüm haklar saklıdır.  {c}",
        year:2024
      
    }
  }
}

</script>
<style scoped>
footer{
    background: lightblue;
    padding: 6px;
}
p{
    color:black;
    text-align: center;

}
</style>


