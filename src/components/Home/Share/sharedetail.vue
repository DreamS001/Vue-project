<template>
    <div class="mui-content">
        <div class="title">
            <h4>{{detail.title}}</h4>
            <span>{{detail.add_time | fmtdate('YYYY-MM-DD HH:mm:ss')}}</span> &nbsp;&nbsp;&nbsp;&nbsp; <span>点击次数:{{detail.click}}</span>
        </div>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li v-for="(item,index) in images" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                   <img :src="item.src" alt="">
                </a>
            </li>
        </ul> 

        <p class="content" v-html="detail.content"></p>

        <!-- 评论--> 
        <!-- cid是要和comment.vue中的url地址中的一致 -->
    <comment :cid="id"></comment>
</div>
</template>

<script>
import comment from '../../public/comment.vue'
export default {
  components:{
      comment
  },
  props:['id'],
  data(){
      return {
          detail:{},
          images:[]
      }
  },
  created(){
      this.getdetail();
      this.getimages()
  },
  methods:{
      getdetail(){
          let url='getimageInfo/'+this.id
          this.$http.get(url).then(res=>{
            //   console.log(res)
              if(res.status===200&&res.data.status===0){
                  if(res.data.message.length>0){
                      this.detail=res.data.message[0]
                  }
              }
          })
      },
      getimages(){
          let url='getthumimages/'+this.id
          this.$http.get(url).then(res=>{
            //   console.log(res)
              if(res.status===200&&res.data.status===0){
                  this.images=res.data.message
              }
          })
      }
  }
}
</script>

<style scoped>
    .mui-content {
    background-color: #fff;
  }
  .title {
        margin: 15px 5px;
    }
    
    .title h4 {
        color: dodgerblue;
    }
    
    .title span {
        font-size: 13px;
        color: rgba(92, 92, 92, 0.6);
    }
    /*9宫格样式*/
    
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border-left: 0px;
    }
    
    .mui-table-view-cell img {
        height: 100px;
    }
    
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border-right: 0px;
        border-bottom: 0px;
        padding: 0;
        margin: 0;
    }
    
    .mui-grid-view.mui-grid-9 .mui-table-view-cell>a:not(.mui-btn) {
        padding: 0;
    }
</style>