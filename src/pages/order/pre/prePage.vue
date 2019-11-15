<template>
  <div class="page" id="order">
    <h1 class="order-title">订单</h1>
    <p class="order-words">登录爱彼迎，查看你在全国各地的住宿订单。</p>
    <div class="order-img">
        <img src="/img/order-bg.jpg" alt="">
    </div>
    <div class="login-btn"  @click="loginAction">登录</div>
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

<style lang="scss" scoped>
.order-title{
    font-weight:bold;
    font-size:103px;
    color:#484848;
    margin-top: 110px;
    margin-left: 70px;
}
.order-words{
    font-size:57px;
    color:#484848;
    margin-left: 70px;
    margin-top: 27px;
    line-height: 80px;
}
.order-img{
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