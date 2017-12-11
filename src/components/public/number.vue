<template>
    <div class="number">
        <div @click="sub" class="left">-</div><div class="middle">{{count}}</div><div class="right" @click="add">+</div>
    </div>
</template>

<script>
export default {
    props:['stock'],
    data(){
        return {
            count:1
        }
    },
    methods:{
        add(){
            if(this.count>=this.stock){
                return;
            }
            this.count++
            this.notily()
        },
        sub(){
            if(this.count<=1){
                return;
            }
            this.count--
            this.notily()
        },
        notily(){
            this.$emit('childNum',this.count)
        }
    }
}
</script>

<style scoped>
.number{
    display: inline-block;
    text-align: center;
}
.number .left,
.number .middle,
.number .right{
    width: 30px;
    height: 25px;
    display: inline-block;
    border: 1px solid rgba(92,92,92,0.5)
}
.number .middle{
    width: 40px;
    border-left:0px;
    border-right: 0px; 
}
</style>
