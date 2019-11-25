import api from '../utils/api';
import http from '../utils/Http';

const state = {
  likeList:[],
  listId: [],
  tag:0,//0 重新渲染list  1 添加收藏  2 删除收藏
}

const getters = {
}

const mutations = {
  setLikeList(state,value){
    state.likeList = value;
  },
  setListId(state,value){
    state.listId = value;
    
  },
  setTag(state,value){
    state.tag = value;
  },
}
 
const actions = {
  // 添加到收藏
  async likeAdd(context,value){
    const {data:result }= await http.post(api.LIKE_ADD,{
      type:value[0],
      city:value[1],
      city_id:value[2],
      prince:value[3],
      name:value[4],
    });
    
    context.commit('setTag',value[5]);
  },

  // 删除收藏
  async likeDelete(context,value){
    let id = JSON.stringify(value[0])
    const {data:result }= await http.get(api.LIKE_DELETE,{city_id:id});
    context.commit('setTag',value[1]);
  },

  // 查询收藏的内容
  async likeFind(context,value){
    const {data:result}= await http.get(api.LIKE_FIND);
    let {data:res} = result;
    let cityId = res? res.map(item=>item.city_id) : [];
    context.commit('setLikeList',res);
    context.commit('setListId',cityId);
    console.log(cityId);
    context.commit('setTag',0);
  },
}




export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}