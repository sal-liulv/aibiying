<template>
  <div class="i-tem">
    <!-- <div class="img"><img :src="data." alt=""><span class=" iconfont icon-tubiaoshixinxin "></span></div> -->

    <van-swipe :autoplay="3000"  :show-indicators="false" indicator-color="white" class="img">
      <van-swipe-item class="item" v-for="(item,index) in homeDetail.photos" :key="index">
        <img v-lazy="item.src" />
      </van-swipe-item>
    </van-swipe>

    <div class="type-city"><span>{{data.type}}</span> · <span>{{data.city}}</span></div>
    <div class="name">{{data.name}}</div>
    <div class="money"><span>{{data.prince}}</span><span>/晚</span></div>

    <span class="icon-like iconfont icon-tubiaoshixinxin" :class="{show:show}"></span>

  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import {requestDetailList} from '../../../../services/detailService'
export default {
components:{
  [SwipeItem.name]:SwipeItem,
  [Swipe.name]:Swipe,
},
name:'Item',
props:['data'],
data(){
  return{
    homeDetail:'',
    show:true,
  }
},
methods:{
  async detailListData(id){
    const result =  await requestDetailList(id);
    this.homeDetail = result;
  }
},

created(){
  this.detailListData(this.data.city_id);
  
}

}
</script>

<style scoped lang="scss">
.i-tem{
  margin: 0 70px;
  margin-bottom: 113px;
  position: relative;
  .icon-like{
    position: absolute;
    top: 60px;
    right: 60px;
    color: white;
    font-size: 66px;
  }
  .show{
    color: orangered;
  }
  .img{
    width: 100%;
    height: 621px;
    overflow: hidden;
    position: relative;
    background: #eeeeee;
    img{
      width: 100%;
    }
  }
  .type-city{
    margin-top: 54px;
    font-size: 38px;
    color: #51303B;
    font-weight: bold;
  }
  .name{
    width: 90%;
    margin-top: 30px;
    font-size: 46px;
    color: #3C3C3C;
    line-height: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; //行数
    -webkit-box-orient: vertical;


  }
  .money{
    margin-top: 19px;
    font-size: 35px;
    color: #4A4A4A;
    font-weight: bold;
    span:nth-of-type(1){
      color: #0C828C;
    }
  }

}

</style>