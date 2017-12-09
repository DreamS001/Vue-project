<template>
    <div class="mui-content">
      <!-- 轮播图 -->
      <swipe :imgUrl="img_url"></swipe>
      <!-- 九宫格 -->
      <grid></grid>
    </div>
</template>

<script>
import swipe from '../public/swipe.vue'
import grid from './grid.vue'
export default {
  data(){
    return {
      img_url:'getlunbo'
    }
  },
  components:{
    swipe,
    grid
  },
};
</script>

<style scoped>
.mui-content {
  background-color: #fff;
}
</style>