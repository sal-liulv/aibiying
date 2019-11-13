<template>
<div class="loading-wrap">
  <div class="loading">
    <van-loading class="center" :vertical="row" color="#47A6AA" size="40px">{{titles}}</van-loading>
  </div>
</div>
</template>

<script>
import { Loading } from 'vant';
export default {
  name: 'loading',
  props:['titles'],
  components: {
    [Loading.name]: Loading
  },
  data(){
    return{
      row:false,
    }
  }
}
</script>

<style scoped lang="scss">
.loading-wrap{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 49px;
  z-index: 300;
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

}
</style>