<template>
    <!-- <h1>这是demo页</h1> -->
    <div class="mui-content">
        <header class="mui-bar mui-bar-nav">
			<a v-if="isshow" @click="goback" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title"><span>Buy+</span>商城</h1>
		</header>
		<nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
            <router-link class="mui-tab-item" to="/menber">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
            <router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">{{Num}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
            <router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-qq"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
		</nav>
        <router-view></router-view>
    </div>
</template>
<script>
import eventHub from '../src/config/communication.js'
    export default{
	   data(){
		   return {
			  isshow:false,
			  Num:0 
		   }
	   },
       methods:{
		   goback(){
			   this.$router.back()
		   },
		   back(path){
			   let arr =['/home','/menber','/search','/shopcar']
			   if(arr.indexOf(path)==-1){
				   this.isshow=true;
			   }else{
				   this.isshow=false;
			   }
		   }
	   },
	   created(){
			this.back(this.$route.path)
			eventHub.$on('updateNum',function(num){
				// console.log(num)
				this.Num=num
				console.log(this.Num)

			})
	   },
	   watch:{
		   '$route':function(newValue){
				this.back(newValue.path)
		   }
	   }
    }
</script>

<style scoped>
.mui-content{
    background-color: #fff;
}
h1{
    color: goldenrod;
    font-size: 35px;
}
h1 span{
    color:red;
}
</style>

