<template>
    <div class="mui-content">
        <div class="feedback">
            <p>欢迎小主的到来，请你提出宝贵的意见，小的们一定会抓紧时间修正的。谢谢您的支持！</p>
            <div>
                <h3>问题</h3>
                <input type="text" class="small" placeholder="请输入你要反馈的问题....">
            </div>
            <div>
                <h3>简单描述</h3>
                <textarea rows="5" class="small" placeholder="请简单描述一下你的问题...."></textarea>
            </div>
            <div class="page-actionsheet">
                <div class="page-actionsheet-wrapper">
                    <mt-button @click.native="sheetVisible = true" size="large">上传照片</mt-button>
                </div>
                <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
                <mt-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></mt-actionsheet>
            </div>
            <button type="submit" class="mui-btn mui-btn-primary mui-btn-block">提交</button>
        </div>
    </div>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        sheetVisible: false,
        sheetVisible2: false,
        actions: [],
        actions2: []
      };
    },
    methods: {
      takePhoto() {
        // console.log('taking photo');
        this.$toast('此功能暂未开放，敬请期待')
      },
      openAlbum() {
        // console.log('opening album');
        this.$toast('此功能暂未开放，敬请期待')
      },
      goBack() {
        history.go(-1);
      }
    },
    mounted() {
      this.actions = [{
        name: '拍照',
        method: this.takePhoto
      }, {
        name: '从相册中选择',
        method: this.openAlbum
      }];
      this.actions2 = [{
        name: '确定'
      }, {
        name: '返回上一步',
        method: this.goBack
      }];
    }
  };
</script>

<style scoped>
.feedback{
    padding: 10px;
}
h3{
    margin-bottom: 8px;
}
textarea,input[type='text']{
    margin-bottom: 0;
}
.small::-webkit-input-placeholder{
    font-size: 12px;
}
.mint-actionsheet{
    bottom: 50px;
}
.mint-button--default{
background-color:#a4b5b5;
margin:15px 0; 
}
</style>
