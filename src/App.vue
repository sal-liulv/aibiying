<template>
<div id="app">

  <keep-alive>
    <router-view></router-view>
  </keep-alive>

  <tab-bar></tab-bar>

  <transition :enter-active-class="hasAnimate?'slideInDown':''" leave-active-class="slideOutDown">
    <component v-if="showCom" :is="comName"/>
  </transition>

</div>
</template>

<script>
import TabBar from './components/tab-bar'
import Login from './pages/mine/login/login'
import Regiester from './pages/mine/regiester/regiester'

export default {
  components: {
    [TabBar.name]: TabBar,
    Login,
    Regiester
  },
  data(){
    return {
      showCom: false,
      comName: 'Login',
      hasAnimate: true
    }
  },

}
</script>

<style >

</style>