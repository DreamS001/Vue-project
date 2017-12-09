<template>
    <div>
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in images" :key="index">
          <a :href="item.url">
            <img :src="item.img" />
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
export default {
  props:['imgUrl'],
  data(){
      return {
          images:[]
      }
  },
  created(){
      this.getLunbo()
  },
  methods:{
      getLunbo() {
      this.$http.get(this.imgUrl)
      	.then(res => {
        if (res.status === 200 && res.data.status === 0) {
          this.images = res.data.message;
        }
      })
    }
  }
}
</script>

<style scoped>
.mint-swipe {
  height: 250px;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
</style>
