<template>
<div class="loading-wrap">
  <div class="loading">
    <van-loading class="center" :vertical="row" color="#47A6AA" size="40px">{{titles}}</van-loading>
  </div>
  <p class="header" v-if="back"><span class="iconfont icon-back" @click="backAction"></span></p>
</div>
</template>

<script>
import { Loading } from 'vant';
export default {
  name: 'loading',
  props:['titles','back'],
  components: {
    [Loading.name]: Loading
  },
  data(){
    return{
      row:false,
    }
  },
  methods:{
    backAction(){
      this.$router.back();
    }
  }
}
</script>

<style scoped lang="scss">
.loading-wrap{
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0;
  bottom: 49px;
  z-index: 300;
  background: white;
  .loading{
    width: 250px;
    height: 250px;
    // background: rgba($color: #47A6AA, $alpha: 0.6);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    .center{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        font-size: 40px;
        width:150px;
        color: #47A6AA;
        margin-left: 20px;
        
      }
      
    }
  }
  .header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 188px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
      padding: 0 70px;
      color: #666;
      font-size: 60px;
      font-weight: bold;
    }
  }

}
</style>