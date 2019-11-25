<template>
<div>
  <div class="page" id="mine">
    <div class="head" @click="editAction" v-if="isLogin">
      <h1 class="my-title">{{userName}}</h1>
      <div class="default-img">
        <span class="iconfont icon-wode"></span>
      </div>
    </div>
    <div class="head" @click="loginAction" v-else>
      <h1 class="my-title">注册/登录</h1>
      <div class="default-img">
        <span class="iconfont icon-wode"></span>
      </div>
    </div>
    
    <ul class="my-list">
      <li class="list-item" @click="goTravel">
        <span class="li-left">行程</span>
        <span class="li-right iconfont icon-xingcheng"></span>
      </li>
      <li class="list-item" @click="logoutAction">
        <span class="li-left" >退出登录</span>
        <span class="li-right iconfont icon-shezhi"></span>
      </li>
      <li class="list-item">
        <span class="li-left">获取帮助</span>
        <span class="li-right iconfont icon-bangzhu"></span>
      </li>
    </ul>
  </div>
    <!-- 子页面 -->
  <transition :enter-active-class="travelAnimate?'slideInRight':''" leave-active-class="slideOutRight">
      <component v-if="showPages" v-model="showPages" :is="pagesName" />
  </transition>
</div>
  
</template>

<script>
import store from '../../../store'
import mineService from '../../../services/mineService'
import Vue from 'vue'
import {mapState} from 'vuex'
import Travel from "../travel/travel";
// let userName = localStorage.getItem('user');
export default {
  components: {
    Travel
  },
  data() {
    return {
      showPages: false,
      pagesName: "Travel",
      travelAnimate:true,
      userName:'',
    };
  },
  computed:{
    ...mapState({
      isLogin:'isLogin'
    }),
  },
  created(){
      this.userName = localStorage.getItem('user');
      console.log(this.userName);
      this.$center.$on('toggleTravel',(value)=>{
      if(this.showPages&&value){
        this.travelAnimate = false;
      }else{
        this.travelAnimate = true;
      }
      this.showPages = value;
      this.pagesName = 'Travel';
    })
  },
  methods: {
    loginAction() {
      this.$center.$emit("toggleLogin", true);
    },
    async logoutAction(){
      //发送退出请求
      let result = await mineService.requestLogOut();
      //派发登录状态为false
      this.$store.dispatch('handleLoginAction',false);
    },
    editAction(){},
    goTravel() {
      this.showPages = true;
    }
  }
};
</script>

<style lang="scss" scoped>
#mine {
  padding: 70px 70px;
  box-sizing: border-box;
  .head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .my-title {
      font-weight: bold;
      font-size: 103px;
      color: #484848;
    }
    .default-img {
      width: 195px;
      height: 195px;
      border: 1px solid #b3e1dd;
      background: #b3e1dd;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      .icon-wode {
        font-size: 160px;
        color: #fff;
      }
    }
  }
  .my-list {
    margin-top: 180px;
    .list-item {
      width: 100%;
      border-bottom: 1px solid #ebebeb;
      display: flex;
      justify-content: space-between;
      line-height: 220px;
      .li-left {
        font-size: 60px;
        color: #484848;
      }
      .li-right {
        font-size: 60px;
      }
    }
  }
}
</style>