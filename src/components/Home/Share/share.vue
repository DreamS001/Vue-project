<template>
    <div class="mui-content">
        <div class="title">
      <ul :style="ulWidth">
          <li>
              <a @click="getimages(-1)" href="javascript:;">全部</a>
          </li>
          <li v-for="item in munes" :key="item.id">
              <a @click="getimages(item.id)" href="javascript:;">{{item.title}}</a>
          </li>
          
      </ul>
    </div>

    <div class="images">
      <ul>
          <li v-for="item in images" :key="item.id">
              <router-link :to="{name:'sharedetail',params:{id:item.id}}">
                  <img :src="item.img_url" alt="">
                  <p class="cover">
                      <span>{{item.title}}</span><br>
                      {{item.zhaiyao}}
                  </p>
              </router-link>
          </li>
      </ul>
    </div>
    </div>
</template>

<script>
export default {
  data(){
      return {
          munes:[],
          ulWidth:'width:600px',
          images:[]
      }
  },
  created(){
      this.getmunes();
      this.getimages(-1)
  },
  methods:{
      getmunes(){
          this.$http.get('getimgcategory').then(res=>{
            //   console.log(res)
              if(res.status===200&&res.data.status===0){
                  this.munes=res.data.message
                  this.ulWidth='width:'+(78*res.data.message.length+50)+'px'
              }
          })
      },
      getimages(id){
          this.$http.get('getimages/'+id).then(res=>{
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
  ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
  }
  
  .title {
      overflow-x: auto;
      overflow-y: hidden;
  }
  
  .title>ul {
      width: 1000px;
  }
  /* webkit核心的浏览器 隐藏滚动条 */
  ::-webkit-scrollbar{
    display:none;
  }
  
  .title>ul>li {
      display: inline-block;
      padding: 10px 5px;
  }
  
  /* .images {
      margin-top: 10px;
  } */
  
  .images>ul {}
  
  .images img {
      height: 300px;
      width: 100%;
  }
  
  .images>ul>li {
      position: relative;
  }
  
  .images .cover>span {
      font-weight: bold;
  }
  
  .images .cover {
      color: #fff;
      position: absolute;
      left: 0px;
      bottom: 0px;
      background-color: rgba(92, 92, 92, 0.4);
      width: 100%;
      margin-bottom: 5px;
  }
</style>


