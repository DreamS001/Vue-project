<template>
    <div class="mui-content">
         <h1>这是会员页面{{msg}}</h1>
    </div>
</template>

<script>
export default {
  data(){
      return {
          msg:'你好'
      }
  }
}
</script>

<style scoped>
    h1{
        color:blue;
    }
</style>
