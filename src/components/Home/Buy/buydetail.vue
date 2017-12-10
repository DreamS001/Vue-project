<template>
    <div class="mui-content">
      <div class="swipe">
        <swipe :imgUrl="img_url"></swipe>
      </div>
      <div class="title">
        <h4>华为（HUAWEI）荣耀6Plus 16G双4G版</h4>
        <div class="price">
          <span>市场价：5986</span>
          <span>销售价：1234</span>
        </div>
      </div>
    </div>
</template>

<script>
import swipe from '../../public/swipe.vue'
export default {
  components:{
    swipe
  },
  props:['id'],
  data(){
      return {
        img_url:'getthumimages/'+this.id
      }
  },
  created(){
    
  },
  methods:{

  }
}
</script>

<style scoped>
  .mui-bar-nav ~ .mui-content{
    padding-top: 50px;
  }
  .mui-content{
    padding-left:5px;
    padding-right:5px;
  }
  .swipe{
    padding: 0 10px;
    border: 1px solid #000;
    border-radius: 5px;
  }
</style>

