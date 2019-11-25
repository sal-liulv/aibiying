<template>
  <div class="banner">
    <van-swipe :autoplay="3000"  :show-indicators="false" indicator-color="white" class="swiper">
      <van-swipe-item class="item" v-for="(item,index) in homeDetail.photos" :key="index">
        <img v-lazy="item.src" />
      </van-swipe-item>
    </van-swipe>
    <p class="header">
      <span class="iconfont icon-back" @click="backAction"></span>
      <span class="iconfont icon-tubiaoshixinxin" :class="{show: show }" @click="likeAction"></span>
    </p>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import {mapState} from 'vuex'
export default {
  components:{
    [SwipeItem.name]:SwipeItem,
    [Swipe.name]:Swipe,
  },
  props:['homeDetail','id','city'],
  data(){
    return{
      show:false,
      index:'',
      my_id:'',
    }
  },
  computed: {
    ...mapState({
      listId: state=>state.like.listId,
      tag: state=>state.like.tag,
      isLogin: "isLogin",
    })
  },
  methods:{
    backAction(){
      this.$router.back();
    },
    // 根据房间id判断是否加上红心
    checkLike(listId,dataId){
      if (listId.length) {//forEach如果为空数组的时候不起作用
        for(let i = 0; i < listId.length; i++){
          if (listId[i] == dataId) {
            this.show = true;
            this.index = 1//已收藏过
            break;
          }else{
            this.show = false;
            this.index = -1//没有收藏过
          }
        }
      }else{
        this.index = -1
      }
    },
    likeAction(){
      if (this.isLogin) {
        this.checkLike(this.listId,this.my_id)
        if (this.index == -1) {
          if (this.tag == 0) {//判断list是否更新
            this.$store.dispatch('like/likeAdd',[
              this.homeDetail.roomAndPropertyType,
              this.city,
              this.my_id,
              this.$store.state.home.prince_now,
              this.homeDetail.title,
              this.my_id//判断当前点击的元素
            ])
          }else{
            console.log('您操作太频繁，请稍后再试');
          }
        }else if(this.index == 1){
          if (this.tag == 0) {//判断list是否更新

            this.$store.dispatch('like/likeDelete',[this.my_id,this.my_id+1])
          }else{
            console.log('您操作太频繁，请稍后再试');
          }
        }
      }
    },
  },
  created(){
    this.my_id = parseInt(this.id)
    this.checkLike(this.listId,this.my_id);
  },
   watch:{//主要是监听添加或者删除事件的完成
    tag:function (newVal, oldVal) {
      if (newVal != 0) {//只有在操作add和delete的时候才进入
        if (newVal == this.my_id ) {//add
          this.show = true
          this.$store.dispatch('like/likeFind')
        }else if (newVal == (this.my_id+1)) {//delete
          this.show = false;
          this.$store.dispatch('like/likeFind')
        }else{
        }
      }
    }
  },
  destroyed(){
    this.$center.$emit('freshLike')
     
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
    .show{
      color:orangered;

    }
  }
  
}

</style>