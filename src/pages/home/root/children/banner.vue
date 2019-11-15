<template>
  <div class="banner">
    <van-swipe :autoplay="3000"  :show-indicators="false" indicator-color="white" class="swiper">
      <van-swipe-item class="item" v-for="item in imgs" :key="item.id">
        <div class="title">
          <div >{{item.small_title}}</div>
          <div >{{item.big_title}}</div>
        </div>
        <img v-lazy="item.url" />
      </van-swipe-item>
    </van-swipe>
    <span></span>
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
  data(){
    return{
      imgs:[
        {id:1,url:'/img/ll_banner1.jpg',small_title:'奇遇北欧国',big_title:'开启充满爱的治愈之旅'},
        {id:2,url:'/img/ll_banner2.jpg',small_title:'境外购物天堂',big_title:'花花万物，购遍全球'},
        {id:3,url:'/img/ll_banner3.jpg',small_title:'入住赏枫佳地',big_title:'红叶狩 · 艳遇日本'},
        {id:4,url:'/img/ll_banner4.jpg',small_title:'成都优质房源合集',big_title:'秋日乐游天府之国'},
        {id:5,url:'/img/ll_banner5.jpg',small_title:'玩转热门目的地',big_title:'错峰出游，静享秋色'},
        {id:6,url:'/img/ll_banner6.jpg',small_title:'奇遇北欧国邀请好友拼团',big_title:'一起解锁更高优惠'},
      ],

    }
  },

}
</script>

<style scoped lang="scss">

.swiper{
    height: 520px;
    .item{
      background: #eeeeee;
      overflow: hidden;
      img{
        width: 100%;
      }
      .title{
        position: absolute;
        top: 50%;
        left: 30px;
        transform: translate(0,-50%);
        div{
          color: white;
          font-weight: bold;
          font-size: 50px;
          margin-top: 20px;
        }
      }
    }
  }

</style>