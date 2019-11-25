import api from '../utils/api';
import http from '../utils/Http';


const state = {
  main_isLoading:false,//首页的加载状态
  homeContent: [],//首页数据
  homeDetail: [],//房屋详情数据
  isLoading: false,//请求数据的状态
  people_img:'',//屋主头像
  device:{},//房子装置信息
  prince_now:'',//现格
  prince_ago:'',//原价
  homeComment:[],//用户评论
  commentNum:'',//评论的条数
  loaderComment: '',//评论加载的状态
  homeLike:[],//猜你喜欢
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
  },
  setPeople_img(state, value){
    state.people_img = value;
  },
  setDevice(state, value){
    state.device = value;
  },
  setPrice(state, value){
    state.prince_now = value[0];
    value[1] ?  state.prince_ago = value[1] : state.prince_ago = ''
  },
  // 请求评论数据之前先清空
  deleteComment(state,value){
    state.homeComment = [];
  },
  // 请求评论数据
  setHomeComment(state, value){
    state.homeComment.push(...value);
    let result = [];
    let obj = {};
    for(let i =0; i < state.homeComment.length; i++){//去掉重复的第一条数据
       if(!obj[state.homeComment[i].id]){
          result.push(state.homeComment[i]);
          obj[state.homeComment[i].id] = true;
        }
      }
    state.homeComment = result;

  },
  setCommentNum(state,value){//评论的总数
    state.commentNum = value;
  },
  setLoaderComment(state,value){
    state.loaderComment = value;
  },
  setHomeLike(state,value){
    state.homeLike = value;
  },
  main_setLoading(state,value){
    state.main_isLoading = value;
  },
  
};

const actions = {
  // 请求首页列表数据
  async requestHomeContent(context){
    // 显示loading
    context.commit('main_setLoading', true);
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
          people_img:list.listing.user.picture_url,
          device:{
            guest_label:list.listing.guest_label,
            bedroom_label:list.listing.bedroom_label,
            bed_label:list.listing.bed_label,
            bathroom_label:list.listing.bathroom_label,
          },
        }))
      }
    })
    context.commit('setHomeContent', homeContent);
    context.commit('main_setLoading', false);
  },

  // 请求详情数据
  async requestHomeDetail(context,id){
    context.commit('setLoading',true);  
    const {data:result }= await http.get(api.HOME_DETAIL,{id:id});
    let res = result.indexOf('campaignEntryText');
    res = JSON.parse(result.substring(res - 2,result.length - 15));
    context.commit('setHomeDetail',res);
    context.commit('setLoading',false);
  },
  
  // 请求评论数据
  async requestHomeComment(context,value){
    context.commit('setLoaderComment','加载中......');
    const {data:result }= await http.get(api.HOME_COMMENT,{id:value[0],offset:value[1],limit:value[2]});
    context.commit('setHomeComment',[...result.reviews]);
    context.commit('setCommentNum',result.metadata.reviews_count)
    context.commit('setLoaderComment','阅读更多');
  },

  // 猜你喜欢
  async requestHomeLike(context,value){
    const {data:result} = await http.get(api.HOME_LIKE,{id:value})
    let res = result.similar_listings;
    
    let homeLike = (res instanceof Array) && res.map(list=>({
      id: list.listing.id,
      type:list.listing.space_type,
      city:list.listing.localized_city,
      title: list.listing.name,
      picture:list.listing.picture_url,
      prince_now:list.pricing_quote.rate.amount_formatted,
      people_img:list.listing.user.picture_url,
      device:{
        guest_label:list.listing.guest_label,
        bedroom_label:list.listing.bedroom_label,
        bed_label:list.listing.bed_label,
        bathroom_label:list.listing.bathroom_label,
      },
    }))
    context.commit('setHomeLike',homeLike)
  }

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}