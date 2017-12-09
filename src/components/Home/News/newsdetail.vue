<template>
    <div class="mui-content">
        <div class="title">
            <h3>{{newsDetail.title}}</h3>
            <p class="time">
                <span>{{newsDetail.add_time | fmtdate('YYYY-MM-DD HH:mm:ss')}}</span>
                <span>{{newsDetail.click}}次浏览</span>
            </p>
        </div>
        <div class="newsContent" v-html="newsDetail.content"></div>
        <!-- 评论小区 -->
        <!-- cid是要和comment.vue中的url地址中的一致 -->
        <comment :cid="id"></comment>
    </div>
</template>

<script>
import '../../../../statics/css/style.css'
import comment from '../../public/comment.vue'
import qs from 'qs'
export default {
  components:{
      comment
  },
  props:['id'],
  data(){
      return {
          newsDetail:{}
      }
  },
  created(){
      this.getnewsDetail();
  },
  
  methods:{
      getnewsDetail(){
        //   console.log(this.id)
          this.$http.get('getnew/'+this.id).then(res=>{
            //   console.log(res)
              if(res.status===200&&res.data.status===0){
                  if(res.data.message.length>0){
                      this.newsDetail=res.data.message[0]
                    //   console.log(this.newsDetail)
                  }
              }
          })
      }
  }
}
</script>

<style scoped>
    .title{
        box-shadow: 0 1px 6px #ccc;
    }
    h3{
        font-size: 16px;
        color: #0049ff;
        text-align: center;
        padding-top: 20px;
    }
    .time{
        margin-left: 1.4rem;
        font-size: 12px;
        color:#ccc;
        padding-bottom: 15px;
    }
</style>
