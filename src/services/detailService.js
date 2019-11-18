import api from '../utils/api'
import Http from '../utils/Http'

export const requestDetailList =  async (id)=>{
  const {data:result }= await Http.get(api.HOME_DETAIL,{id:id});
  let res = result.indexOf('campaignEntryText');
  res = JSON.parse(result.substring(res - 2,result.length - 15));
  return res;
}