<template>
    <div class="mui-content">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in NewsList" :key="item.id">
                <router-link :to="{name:'newsdetail',params: { id: item.id }}">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body mui-ellipsis">
                        {{item.title}}
                        <p class='time'>
                            <span class="mui-pull-left">发表时间:{{item.add_time |fmtdate('YYYY-MM-DD HH:mm:ss')}}</span> 
                            <span class="mui-pull-right">点击次数:{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return {
            NewsList:[]
        }
    },
    created:function(){
        this.getNews()
    },
    
    methods:{
        getNews(){
            this.$http.get('getnewslist').then(res=>{
                // console.log(res)
                if(res.status===200 && res.data.status===0){
                    this.NewsList=res.data.message
                    // console.log(this.NewsList)
                }
            })
        }
    }
}
</script>

<style scoped>
    .mui-content > .mui-table-view:first-child{
        margin-top: 0;
    }
    .mui-media-body{
        font-size: 15px;
    }
    .time{
        font-size: 12px;
        color:#0094ff;
    }
</style>
