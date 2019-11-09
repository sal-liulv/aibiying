<template>
<div class="app-header border-bottom">
  <van-icon v-if="hasBack" class="back-btn" name="arrow-left" @click="backAction"/>
  <slot name="right-btn"/>
</div>
</template>

<script>
export default {
  name: 'app-header',
  props: {
    hasBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    backAction(){
      this.$router.back();
    }
  }
}
</script>

<style scoped lang="scss">
.app-header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 180px;
    .back-btn{
      position: absolute;
      left: 0;
      top: 0;
      padding: 0 80px;
      font-size: 60px;
      line-height: 188px;
      font-weight: bold;
    }
  }
</style>