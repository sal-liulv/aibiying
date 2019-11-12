import api from '../utils/api';
import http from '../utils/Http';


const state = {
  homeContent: [],
  homeDetail: [],
  isLoading: false,
};
const getters = {

};

const mutations = {
  // 设置首页的数据
  setHomeContent(state, value){
    state.homeContent = value;
  },
  // 设置首页详情
  setHomeDetail(state, value){
    state.homeDetail = value;
  },
  setLoading(state, value){
    state.isLoading = value;
  }
};


const actions = {
  // 请求首页列表数据
  async requestHomeContent(context){
    // 显示loading
    // context.commit('setLoading', true);
    // 发送请求
    const {data:result }= await http.get(api.HOME_LIST);
    const {explore_tabs} = result;
    const {sections} = explore_tabs[0];
    

    const homeContent = sections.slice(0,2).map(items=>{
      return{
        title : items.title,
        subtitle : items.subtitle,
        city: [] && items.hot_destinations_metadata.map(city=>({
          name: city.name,
        })),
        list: items.listings.map(list=>({
          id: list.listing.id,
          type:list.listing.space_type,
          city:list.listing.localized_city,
          title: list.listing.name,
          picture:list.listing.picture_url,
          prince_now:list.pricing_quote.rate_with_service_fee.amount_formatted,
          prince_ago:list.pricing_quote.rate_without_discount,
        }))
      }
    })
    // console.log(homeContent);

    context.commit('setHomeContent', homeContent);
  },






};




export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}