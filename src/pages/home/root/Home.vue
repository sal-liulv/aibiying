<template>
<div class="page-wrap">
  <div class="page" id="home" @click="test" >
    
    <app-scroll class="scroll">
      <banner />
      <search />
      <rooms v-for="(items,index) in homeContent" :key="index" :data="items"/>
    </app-scroll>
  </div>

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

    }
  },
  computed: {
    ...mapState({
      homeContent: state=>state.home.homeContent,
      isLoading: state=>state.home.isLoading
    })
  },
  created(){
    // 请求初始化数据
    // 显示loading
    this.$store.dispatch('home/requestHomeContent');
    // 关闭loading

  },
   methods:{
     test(){
      //  console.log(this.homeContent);
     }

  },
  
}
</script>

<style scoped lang="scss">
.scroll{
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;

}

</style>