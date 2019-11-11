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
// import {requestHomeContent} from '../../../services/home'
import {requestHomeDetail} from '../../../services/home'

export default {
  methods:{
    goDetail(){
      this.$router.push(`/home/detail/23`)
    }
  },
  created(){
    requestHomeDetail()
  }
  
}
</script>

<style>

</style>