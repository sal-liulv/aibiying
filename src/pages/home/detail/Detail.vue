<template>
<div class="page-wrap"> 
  <div class="page subpage" id="detail" >
    <app-scroll class="scroll">
      <banner :city='city' :id='id' :homeDetail="homeDetail" />
      <Title :city="city" :text="homeDetail"/>
      <device />
      <txt :txt="homeDetail"/>
      <people-comment :homeComment="homeComment" />
      <like class="like" />
    </app-scroll>

    <div class="buy">
      <p class="money"><span>{{this.$store.state.home.prince_now}}</span> <span>{{this.$store.state.home.prince_ago}}</span><span>/ 晚</span></p>
      <p class="btn" @click="go_confirm">申请预定</p>
    </div>
  </div>

  <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
    <router-view></router-view>
  </transition>
  <loading :back="back" titles="加载中..." v-if="isLoading" />
</div>
</template>
<script>
import {mapState} from 'vuex';
import banner from './children/banner';
import Title from './children/title';
import device from './children/device';
import txt from './children/txt';
import People_ommnet from './children/comment';
import like from './children/like';

export default {
  components:{
    banner,
    Title,
    device,
    txt,
    [People_ommnet.name]:People_ommnet,
    [like.name]:like,
  },
  props:{
     id: String,
     city: String,
  },
  data(){
    return{
      back:true,
    }
  },
  computed:{
    ...mapState({
      homeDetail:state=>state.home.homeDetail,
      homeComment:state=>state.home.homeComment,
      isLoading:state=>state.home.isLoading,
    })
  },
  created(){
    this.innitData();
  },
  methods:{
    innitData(){
      // 请求详情数据
      this.$store.dispatch('home/requestHomeDetail',this.id);
      // 请求评论之前先删除评论
      this.$store.commit('home/deleteComment');
      // 获取评论数据
      this.comment(this.id,0,1)
      // 获取猜你喜欢
      this.$store.dispatch('home/requestHomeLike',this.id)
    },
    comment(id,offset,limit){
      this.$store.dispatch('home/requestHomeComment',[id,offset,limit]);
    },
    go_confirm(){
      this.$router.push({name:'confirm'})
    }
  },
  watch: {
    '$route.params.id' (to, from) {
      console.log(to);
      if (to) {
        this.innitData();
      }
      
      
    }
}
}

</script>

<style scoped lang="scss">
#detail{
  background: white;
  .scroll{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 265px;
  }
  .header{
    z-index: 10;
  }
  .icon-like{
      position: absolute;
      right: 0;
      top: 0;
      line-height: 188px;
      padding: 0 80px;
  }
  .like{
    padding-bottom: 100px;
  }
  .buy{
    width: 100%;
    height: 263px;
    border-top: 3px solid #F7F7F7;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .money{
      margin-left: 83px;
      display: flex;
      align-items: center;
      span:nth-of-type(1){
        font-size: 50px;
        color: #737573;
        font-weight: bold;
      }
      span:nth-of-type(2){
        font-size: 33px;
        color: #C6C7C6;
        text-decoration: line-through;
        margin-left: 10px;
      }
      span:nth-of-type(3){
        font-size: 40px;
        color: #737573;
      }
    }
    .btn{
      background: #FF595A;
      width: 330px;
      height: 168px;
      line-height: 168px;
      text-align: center;
      font-size: 46px;
      font-weight: bold;
      color: #FFFFFF;
      margin-right: 72px;
      border-radius: 20px;
      
    }
    
    
  }
  
}
</style>