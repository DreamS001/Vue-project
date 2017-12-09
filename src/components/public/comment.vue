<template>
    <div>
        <!-- 发表评论组件 -->
        <div class="comment">
            <h4>评论小区</h4>
            <div class="submitarea">
                <textarea name="" placeholder="请输入你想说的话..." v-model="data"></textarea>
                <button @click="Submit" type="button" class="mui-btn mui-btn-primary">发布</button>
            </div>
            <h4 class="plu">评论列表</h4>
            <ul class="mui-table-view">
                <li v-for="(item,index) in comments" :key="index" class="mui-table-view-cell">
                    <p class="comtent">{{item.content}}</p>
                    <p class="uesrname">
                        <span class="nickname mui-pull-left">{{item.user_name}}</span>
                        <span class="commenttime mui-pull-right">{{item.add_time | fmtdate('YYYY-MM-DD HH:mm:ss')}}</span>
                    </p>
                </li>
            </ul>
            <button type="button" class="more mui-btn mui-btn-primary mui-btn-outlined" @click="loadmore">加载更多</button>
        </div>
    </div>
</template>

<script>
import qs from 'qs'
export default {
  data(){
      return {
          comments:[],
          data:'',
          pageindex:1
      }
  },
   created(){
      this.getcomments();
  },
  props:['cid'],
  methods:{
      getcomments(){
          let url='getcomments/'+this.cid+'?pageindex='+this.pageindex;
        //   console.log(url)
          this.$http.get(url).then(res=>{
            //   console.log(res)
              if(res.status===200&&res.data.status===0){
                  //concat 连接两个数组，并返回一个新的数组
                  this.comments=this.comments.concat(res.data.message)
                //   console.log(this.comments)
              }
          })
      },
      Submit(){
        //    console.log(this.data)
           if(this.data===''){
                this.$toast({
                    message: '请输入内容'
                });
                return;
           }
           const content=this.data
           this.$http
                .post('postcomment/'+this.cid,qs.stringify({'content':content})).then(res=>{
            //    console.log(res)
               if(res.status===200&&res.data.status===0){
                //    console.log(res.data.message)
                    this.$toast({
                        message: '发表成功',
                        iconClass: 'iconfont icon-successful'
                    });
                //    location.reload()
                // this.getcomments()
                // 把当前评论数据，显示在列表最上面
                this.comments.unshift({
                    user_name: '匿名用户',
                    add_time: new Date(),
                    content: this.data
                })

                this.data=''
               }
           })
      },
      loadmore(){
          this.pageindex++;
          this.getcomments()
      }
  }
}
</script>

<style scoped>
      .submitarea{
        margin: 0 auto;
        width:95%;
        text-align: center;
        padding: 10px;
    }
    .mui-btn-primary{
        width: 100%;
        
    }
    .plu{
        padding: 10px 0;
    }
    .comtent{
        font-size: 20px;
        color: #000;
    }
    .uesrname{
        font-size: 16px;
        overflow: hidden;
        padding-top: 5px;
    }
    .nickname{
        color:#0049ff;
    }
    .commenttime{
        
        color:#000;
    }
    .more{
        display: block;
        width: 95%;
        margin: 0 auto;
    }
</style>
