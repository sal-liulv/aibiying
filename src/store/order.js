import api from '../utils/api';
import http from '../utils/Http';

const state = {
  orderData:[],
  flag:false,
  
}

const getters = {
}

const mutations = {
  setOrderData(state,value){
    state.orderData = value;
  },
  setFlag(state,value){
    state.flag = value;
  }
 
}
 
const actions = {
  async orderAdd(context,value){
    const {data:result }= await http.post(api.ORDER_ADD,{
      id:value.id,
      name:value.name,
      money:value.money,
      pic:value.pic,
      startData:value.startData,
      endData:value.endData,
      allData:value.allData,
    });
    context.commit('setFlag',true);
  },

  async findAdd(context,value){
    const {data:result }= await http.get(api.ORDER_FIND);
    let res = result.data;
    context.commit('setOrderData',res)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}