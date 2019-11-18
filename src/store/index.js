import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import like from './like'
import mineService, { requestCheckLogin } from '../services/mineService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: (localStorage.getItem('isLogin')==='true'?true:false)

  },
  mutations: {
    setIsLogin(state, value) {
      state.isLogin = value;
    }
  },
  actions: {
    handleLoginAction(context,value){
      //修改数据
      context.commit('setIsLogin',value);
      //保存登录状态
      localStorage.setItem('isLogin',value);
    },
    async checkLoginAction(context){
      //访问后台的登录状态是否过期
      let result  = await mineService.requestCheckLogin();
      //判断结果，设置和保存数据
      console.log(result);
      if(result === 0){
        context.dispatch('handleLoginAction',true);
      }else{
        context.dispatch('handleLoginAction',false);
      }
    }
  },
  modules: {
    home,
    like,
  }
})
