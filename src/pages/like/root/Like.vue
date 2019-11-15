<template>
<div class="page" id="like">
    <div v-if="isLogin">登录成功</div>
    <prePage v-else></prePage>

</div>
</template>

<script>
import {mapState} from 'vuex'
import prePage from '../pre/prePage'
export default {
    computed:{
        ...mapState({
            isLogin:'isLogin'
        })
    },
    created(){
        if(this.$store.state.isLogin){
            this.isLike = false;
        }else{
            this.isLike = true;
        }
    },
    components:{
        prePage
    }
    
}
</script>

<style scoped lang="scss">

</style>