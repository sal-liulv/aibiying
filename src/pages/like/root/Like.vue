<template>
<div class="page" id="like">
    <h1 class="like-title">心愿单</h1>
    <p class="like-words">登录爱彼迎，查看你的心仪房源、体验与故事。</p>
    <div class="like-img">
        <img src="/images/like-bg.jpg" alt="">
    </div>
    <div class="login-btn" @click="loginAction">登录</div>
</div>
</template>

<script>
export default {

    methods:{
        loginAction(){
            this.$center.$emit('toggleLogin',true);
        }
    }
}
</script>

<style scoped lang="scss">
.like-title{
    font-weight:bold;
    font-size:103px;
    color:#484848;
    margin-top: 110px;
    margin-left: 70px;
}
.like-words{
    font-size:57px;
    color:#484848;
    margin-left: 70px;
    margin-top: 27px;
    line-height: 80px;
}
.like-img{
    width: 100%;
    height: 840px;
    img{
        width: 100%;
        height: 100%;
    }
}
.login-btn{
    width:246px;
    height:152px;
    line-height:152px;
    text-align: center;
    border: 2px solid #008489;
    font-size: 50px;
    color: #008489;
    font-weight: bold;
    border-radius: 25px;
    margin-top: 104px;
    margin-left: 70px;
}
</style>