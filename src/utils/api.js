// 管理api
// export const HOST = 'http://www.littleemmayang.com:8000';

/*
首页列表接口
参数：id
*/
const HOME_LIST = '/api/home/content';

/*
房间详情接口
参数：id
*/
const HOME_DETAIL = '/api/home/detail';

/*
登录接口
post
参数：id
*/
const LOGIN_API = '/api/user/login';

/*
检查登录
参数：无
*/
const CHECK_LOGIN = '/api/user/check_login'

/*
退出登录
参数：无
*/
const LOGOUT_API = '/api/user/logout'
export default {
  HOME_LIST,
  HOME_DETAIL,
  LOGIN_API,
  CHECK_LOGIN,
  LOGOUT_API
}
