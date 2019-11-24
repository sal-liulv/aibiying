<template>
  <div class="title border-bottom">
    <div class="left">
      <p class="name">{{homeDetail.title}}</p>
      <p class="money"><span>{{this.$store.state.home.prince_now}}</span><span>/晚</span></p>
    </div>
    <div class="right">
      <img :src="homeDetail.photos[0].src" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'Title',
  props:['homeDetail']
  

}
</script>

<style scoped lang="scss">
.title{
  height: 420px;
  margin: 230px 70px 0 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left{
    .name{
      font-size: 50px;
      color: #C9633B;
      margin-bottom: 30px;
      width: 450px;
      line-height: 70px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; //行数
      -webkit-box-orient: vertical;
    }
    .money{
      span:nth-of-type(1){
        font-size: 55px;
        color: #008C8F;
        font-weight: bold;
        margin-right: 10px;
      }
      span:nth-of-type(2){
        font-size: 40px;
        color: #737373;
      }
    }
  }
  .right{
    width: 341px;
    height: 227px;
    background: #eeeeee;
    position: relative;
    img{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
}

</style>