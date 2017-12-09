<template>
    <div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4" v-for="(item,index) in grid" :key="index">
          <router-link :to="item.url">
            <span class="mui-icon" :class="item.className"></span>
            <div class="mui-media-body">{{item.title}}</div>
          </router-link>
        </li>
      </ul> 
    </div>
</template>

<script>
export default {
  data(){
      return {
          grid:[]
      }
  },
  created(){
      this.getGrid();
  },
  methods:{
      getGrid(){
	    this.$http.get('getmenus').then(res=>{
		    if(res.status===200&&res.data.status===0){
			    this.grid=res.data.message
		    }
	    })
    }
  }
}
</script>

<style scoped>
.mui-icon {
  width: 50px;
  height: 50px;
  background-repeat: round;
}
.icon-news {
  background-image: url("../../../statics/images/menu1.png");
}
.icon-share {
  background-image: url("../../../statics/images/menu2.png");
}
.icon-buy {
  background-image: url("../../../statics/images/menu3.png");
}
.icon-feedback {
  background-image: url("../../../statics/images/menu4.png");
}
.icon-video {
  background-image: url("../../../statics/images/menu5.png");
}
.icon-contact {
  background-image: url("../../../statics/images/menu6.png");
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}    
</style>