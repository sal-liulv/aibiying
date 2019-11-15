<template>
  <div class="page modal-page" id="travel">
    <app-header>
      <van-icon class="right-btn" slot="right-btn" @click="close" name="cross" />
    </app-header>
    <div class="travel-con">
      <h1 class="travel-title">您要去哪里？</h1>
      <p class="travel-words">开始规划您在爱彼迎上的第一次探险</p>
      <div class="discover-btn" @click="goHome">探索爱彼迎</div>
      <div class="travel-img">
        <img src="/img/travel.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    close() {
      this.$center.$emit("toggleTravel", false);
    },
    goHome(){
      this.$center.$emit("toggleTravel", false);
      this.$router.push('/home');
    }
  }
};
</script>

<style lang="scss" scoped>
.travel-con {
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 300px;
  text-align: center;
  .travel-title {
    width:422px;
    font-weight: bold;
    font-size: 103px;
    color: #484848;
    margin-bottom:78px;
    margin-left: 50%;
    transform: translateX(-50%);
    line-height: 120px;
  }
  .travel-words{
    width: 526px;
    font-size: 57px;
    color: #484848;
    margin-left: 50%;
    transform: translateX(-50%);
    line-height: 80px;
  }
  .discover-btn{
    width: 468px;
    height: 154px;
    border: 2px solid #008489;
    font-size: 47px;
    text-align: center;
    line-height: 154px;
    font-weight: bold;
    color: #008489;
    margin: 56px auto;
    border-radius: 15px;
  }
  .travel-img{
    width: 100%;
    height: 300px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>