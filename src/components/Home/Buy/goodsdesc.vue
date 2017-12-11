<template>
    <div class="mui-content">
        <h4>{{detail.title}}</h4>
        <div class="newsContent" v-html="detail.content"></div>
    </div>    
</template>

<script>
import '../../../../statics/css/style.css'
export default {
  props:['id'],
  data(){
      return {
          detail:{}
      }
  },
  created(){
      this.getdesc()
  },
  methods:{
      getdesc(){
          let url='goods/getdesc/'+this.id
          this.axios.get(url).then(res=>{
              console.log(res)
              if(res.status===200&&res.data.status===0){
                  if(res.data.message.length===0){
                      return;
                  }
                  this.detail=res.data.message[0]
              }
          })
      }
  }
}
</script>

<style scoped>
h4{
    text-align: center;
}
</style>
