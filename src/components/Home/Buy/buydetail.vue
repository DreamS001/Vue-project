<template>
    <div class="mui-content">
      <div class="swipe">
        <swipe :imgUrl="img_url"></swipe>
      </div>
      <div class="sell">
            <h4>{{goods.title}}</h4>
            <div class="price">
                市场价：<s>￥{{goods.market_price}}</s> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 销售价：<span>￥{{goods.sell_price}}</span>
            </div>
            <div class="num">
                购买数量：<number @childNum="lisentChildNum" :stock="goods.stock_quantity"></number>
                <div v-if="false" class="ball"></div>
            </div>
            <div class="button">
                <button class="mui-btn mui-btn-primary">立刻购买</button>
                <button @click="addCar" class="mui-btn mui-btn-danger">加入购物车</button>
            </div>
        </div>

        <div class="param">
            <h5>商品参数</h5>
            <div class="info">
                <p>商品编号：{{goods.goods_no}}</p>
                <p>库存情况：{{goods.stock_quantity}}件</p>
                <p>上架时间：{{goods.add_time}}</p>
            </div>
        </div>
        
        <div class="footer">
            <a @click="desc" class="mui-btn mui-btn-primary mui-btn-outlined">图文介绍</a>
            <a @click="push" class="mui-btn mui-btn-danger mui-btn-outlined">商品评论</a>
        </div>
    </div>
</template>

<script>
import swipe from '../../public/swipe.vue'
import number from '../../public/number.vue'

//导入通信模块
import eventHub from '../../../config/communication.js'
export default {
  components:{
    swipe,
    number
  },
  props:['id'],
  data(){
      return {
        img_url:'getthumimages/'+this.id,
        goods:{},
        num:1
      }
  },
  created(){
    this.getgoodsdetail()
  },
  methods:{
    getgoodsdetail(){
      let url='goods/getinfo/'+this.id
      this.axios.get(url).then(res=>{
        // console.log(res)
        if(res.status===200&&res.data.status===0){
          if(res.data.message.length===0){
            return;
          }
          this.goods=res.data.message[0];
        }
      })
    },
    push(){
      this.$router.push({name: 'buycomment', params: { id: this.id }})
    },
    desc(){
      this.$router.push({name:'goodsdesc',params:{id:this.id}})
    },
    lisentChildNum(count){
      // console.log(count)
      this.num=count
    },
    addCar(){
      eventHub.$emit('updateNum',this.num)
    }
  }
}
</script>

<style scoped>
  .num{
    position: relative;
  }
  .ball {
        left: 115px;
        top: 3px;
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: red;
        transition: all 0.5s linear;
        z-index: 1000;
        
    }
  .mui-bar-nav ~ .mui-content{
    padding-top: 50px;
  }
  .mui-content{
    padding-left:5px;
    padding-right:5px;
  }
  .swipe{
    padding: 0 10px;
    border: 1px solid rgba(92, 92, 92, 0.7);
    border-radius: 5px;
  }
  .sell,
    .param,
    .footer {
        border: 1px solid rgba(92, 92, 92, 0.7);
        border-radius: 5px;
        margin-top: 5px;
        padding: 10px;
    }
    
    .sell h4 {
        color: dodgerblue;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.5);
    }
    
    .price,
    .num,
    .button {
        margin: 10px;
        font-size: 15px;
    }
    
    .price span {
        font-size: 18px;
        color: red;
    }
    
    .param h5 {
        font-weight: bold;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.5);
    }
    
    .info {
        margin-top: 10px;
        margin-left: 20px;
    }
    
    .info p {
        margin: 0;
    }
    
    .footer .mui-btn {
        width: 100%;
    }
    
    .footer .mui-btn-danger {
        margin-top: 10px;
    }
</style>

