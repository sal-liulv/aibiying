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

export default {
  components: {
    [TabBar.name]: TabBar,
    Login,
  },
  data(){
    return {
      showCom: false,
      comName: 'Login',
      hasAnimate: true
    }
  },
  created(){
    //监听展示登录组件
    this.$center.$on('toggleLogin',(value)=>{
      if(this.showCom&&value){
        this.hasAnimate = false;
      }else{
        this.hasAnimate = true;
      }
      this.showCom = value;
      this.comName = 'Login';
    })
  }

}
</script>

<style >

</style>