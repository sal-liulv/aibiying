<template>
<div class="page-wrap"> 
  <div class="page subpage" id="detail" @click="test">
    <app-header :hasBack='back'>
      <span class="icon-like iconfont icon-xin" slot="right-btn"></span>
    </app-header>
  </div>

  <loading titles="加载中..." v-if="isLoading" />
</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  props:{
     id: String
  },
  data(){
    return{
      back:true,
      // isLoading:true,
    }
  },
  computed:{
    ...mapState({
      homeDetail:state=>state.home.homeDetail,
      isLoading:state=>state.home.isLoading,
    })
  },
  created(){
    // 请求详情数据
    this.$store.dispatch('home/requestHomeDetail',this.id);
  },
  methods:{
    test(){
      console.log(this.homeDetail);
    }
  }
}

</script>

<style scoped lang="scss">
#detail{
  background: white;
  .icon-like{
      position: absolute;
      right: 0;
      top: 0;
      line-height: 188px;
      padding: 0 80px;
  }
  
}
</style>