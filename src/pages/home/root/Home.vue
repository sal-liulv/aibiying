<template>
<div>
  <div class="page" id="home" @click="goDetail">
  home
  </div>

    <!-- 子页面 -->
  <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
  <router-view></router-view>
  </transition>
</div>
</template>

<script>
export default {
  methods:{
    goDetail(){
      this.$router.push(`/home/detail/23`)
    }
  }
}
</script>

<style>

</style>