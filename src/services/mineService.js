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

//检查是否登录
export const requestCheckLogin = async()=>{
    let result = await Http.get(api.CHECK_LOGIN);
    return result.data.code;
}

//退出
export const requestLogOut = async()=>{
    let result = await Http.get(api.LOGOUT_API);
    return result.data.code;
}


export default{
    requestLoginByPassword,
    requestCheckLogin,
    requestLogOut
}