<template>
    <div class="mui-content">
        <comment :cid="id"></comment>
    </div>
</template>

<script>
import comment from '../../public/comment.vue'
import '../../../../statics/css/style.css'
export default {
    components:{
        comment
    },
    props:['id'],
    data(){
        return {
            
        }
    }
}
</script>

<style scoped>

</style>
