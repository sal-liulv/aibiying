import api from '../utils/api'
import Http from '../utils/Http'

// 请求首页列表数据
export const requestHomeContent = async ()=>{
  // 发送请求
  const result= await Http.get(api.HOME_LIST, {id: '1043000'});
  console.log(result);
  
}


export const requestHomeDetail = async (goodsId)=>{
  const {data} = await Http.get(api.HOME_DETAIL, {id: 2229878});
  // campaignEntryText
  let res = data.indexOf('campaignEntryText')
  res = data.substring(res - 2,data.length - 15);
  console.log(JSON.parse(res));

}




export default {
  requestHomeContent,
  requestHomeDetail
}