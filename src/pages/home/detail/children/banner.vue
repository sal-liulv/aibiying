<template>
  <div class="banner">
    <van-swipe :autoplay="3000"  :show-indicators="false" indicator-color="white" class="swiper">
      <van-swipe-item class="item" v-for="(item,index) in imgs" :key="index">
        <img v-lazy="item.src" />
      </van-swipe-item>
    </van-swipe>
    <p class="header"><span class="iconfont icon-back" @click="backAction"></span><span class="iconfont icon-xin"></span></p>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
export default {
  components:{
    [SwipeItem.name]:SwipeItem,
    [Swipe.name]:Swipe,
  },
  props:['imgs'],
  methods:{
    backAction(){
      this.$router.back();
    }
  }
}
</script>

<style scoped lang="scss">
.banner{
  position: relative;
  width: 100%;
  height: 600px;
  .swiper{
    height: 100%;
    .item{
      height: 100%;
      overflow: hidden;
      img{
        width: 100%;
        background: #eeeeee;
      }
    }
  }
  .header{
    position: absolute;
    top: 0;
    width: 100%;
    height: 188px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
      padding: 0 70px;
      color: white;
      font-size: 60px;
      font-weight: bold;
    }
  }
  
}

</style>