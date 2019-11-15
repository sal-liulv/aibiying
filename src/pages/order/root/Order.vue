<template>
<div class="page" id="order">
    <div class="content" v-if="isLogin"> 登录成功</div>
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
    components:{
        prePage
    }
    
}
</script>

<style lang="scss" scoped>

</style>