<template>
    <div ref="height" class="mui-content">
        <mt-loadmore :autoFill="false" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul>
                <li v-for="item in goods" :key="item.id">
                    <router-link :to="{name:'buydetail',params:{id:item.id}}">
                        <img :src="item.img_url" alt="">
                    </router-link>
                    <div class="buyBox">
                        <h5 class="title">{{item.title}}</h5>
                        <div class="box">
                            <p>
                                <span class="newprice">￥{{item.sell_price}}</span>
                                <span class="oldprice">￥{{item.market_price}}</span>
                            </p>
                            <p>
                                <span class="hot mui-pull-left">热卖中</span>
                                <span class="lib mui-pull-right">剩{{item.stock_quantity}}件</span>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </mt-loadmore>
    </div>
</template>

<script>

export default {
  data(){
      return {
          goods:[],
          allLoaded:false,
          pageindex:1
      }
  },
  created(){
      this.getgoodslist()
  },
  methods:{
      getgoodslist(){
          let url='getgoods?pageindex='+this.pageindex
          this.$http.get(url).then(res=>{
            //   console.log(res)
              if(res.status===200&&res.data.status===0){
                  if(res.data.message.length===0){
                      this.allLoaded = true;
                    //   return;
                  }
                  this.goods=this.goods.concat(res.data.message)
                  //上拉加载关键语句
                  this.$refs.loadmore.onBottomLoaded();
              }
              const height=document.documentElement.clientHeight;
              this.$refs.height.style.height= height+'px'
          })
      },
    loadBottom() {
        //上拉加载
        // 加载更多数据
        this.pageindex++
        this.getgoodslist()
        // console.log(1)
        
        
    }
  }
}
</script>

<style scoped>
ul{
    padding: 3px;
    margin: 0;
    list-style: none;
    overflow: hidden;
}
ul li{
    width: 48%;
    height: 300px;
    float: left;
    margin: 4px 2px 4px 4px;
    position: relative;
    box-shadow: 0 0 4px #666;
}
ul li a{
    display: block;
    height: 55%;
}
ul li a img{
    width: 100%;
    height: 100%;
}
.buyBox{
    height: 94px;
    position: absolute;
    left: 0;
    bottom: 0;
    
}
.title{
    height: 25px;
    font-size: 10px;
    white-space:normal;
	overflow:hidden;
	text-overflow:ellipsis;
}
.box{
    width: 100%; 
    height: 60px;
    background-color: rgba(92,92,92,0.1); 
    padding: 10px;  
}
p{
    margin: 0;
}
.newprice{
    font-size: 16px;
    color: red;
}
.oldprice{
    text-decoration-line: line-through;
}
.mint-loadmore {
    padding-bottom: 50px
}
</style>
