import api from '../utils/api'
import Http from '../utils/Http'

//密码登录（静默登录，登录即注册）
export const requestLoginByPassword = async(tel,password)=>{
    let result = await Http.post(api.LOGIN_API,{tel,type:'password',value:password});
    if(result.data.code === 0){
        return null;
    }else{
        return result.data.message;
    }
}


export default{
    requestLoginByPassword
}