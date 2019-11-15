<template>
  <div class="device">
    <p><span class="iconfont icon-renqun"></span> <span>{{list.guest_label}}</span></p>
    <p><span class="iconfont icon-woshi"></span> <span>{{list.bedroom_label}}</span></p>
    <p><span class="iconfont icon-chuang"></span> <span>{{list.bed_label}}</span></p>
    <p><span class="iconfont icon-weishengjian"></span> <span>{{list.bathroom_label}}</span></p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:this.$store.state.home.device,
    }
  }
}
</script>

<style scoped lang="scss">
.device{
  margin: 0 70px;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  p{
    width: 470px;
    color: #4A494A;
    font-size: 40px;
    margin-bottom: 30px;
    span:nth-of-type(1){
      font-weight: bold;
      font-size: 50px;
    }
  }
}

</style>