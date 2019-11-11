import api from '../utils/api'
import Http from '../utils/Http'

// 请求首页列表数据
export const requestHomeContent = async ()=>{
  // 发送请求
  const result= await Http.get(api.HOME_LIST, {id: '1043000'});
  console.log(result);
  
}


export const requestHomeDetail = async (goodsId)=>{
  const result = await Http.get(api.HOME_DETAIL, {id: goodsId});
  console.log(result);

}

export default {
  requestHomeContent,
  requestHomeDetail
}