<template>
    <header>
    <h1>{{ title }}</h1>
    </header>
</template>
<script>
export default{
  props: {
    title:{
      type:String,
      required:true
    }
  },
  data(){
    return{
        
      
    }
  }
}

</script>
<style scoped>
header{
    background:black;
    padding: 10px;
}
h1{
    color:#f8f3f3;
    text-align: center;

}
</style>