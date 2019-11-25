<template>
<div class="page-wrap">
  <div class="page" id="home" >
    
    <app-scroll class="scroll">
      <banner />
      <search />
      <rooms v-for="(items,index) in homeContent" :key="index" :data="items"/>
    </app-scroll>
  </div>
  
  <loading class="loading" :back="back" titles="加载中..." v-if="main_isLoading" />
    <!-- 子页面 -->
  <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
  <router-view></router-view>
  </transition>
</div>
</template>

<script>
import banner from './children/banner'
import search from './children/search'
import rooms from './children/rooms'
import {mapState} from 'vuex'
import { log } from 'util'

export default {
  components:{
    banner,
    search,
    rooms,
  },
  data(){
    return{
      back:false,
    }
  },
  computed: {
    ...mapState({
      homeContent: state=>state.home.homeContent,
      main_isLoading: state=>state.home.main_isLoading,
    })
  },
  created(){
    // 请求首页数据
    this.$store.dispatch('home/requestHomeContent');

    // 请求收藏列表的数据
    this.$store.dispatch('like/likeFind')//首次进入请求收藏的数据
  },
   methods:{
  },
  watch:{
    '$route.fullPath' (to, from) {
      if (to == '/home') {
        this.$store.dispatch('like/likeFind');
      }
    }
  }

  
}
</script>

<style scoped lang="scss">
.scroll{
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
}
.loading{
  bottom: 120px;
}

</style>