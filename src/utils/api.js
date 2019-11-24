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
房间评论接口
参数：id
*/
const HOME_COMMENT = '/api/home/comment'

/*
房间猜你喜欢接口
参数：id
*/
const HOME_LIKE = '/api/home/like'

/* 发送验证码
method:get
参数：tel */
const SEND_CODE_API = '/api/user/send_code';

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

/* 
添加收藏
post
参数：user_id  type  city  name  prince  (pic由后台获得)
*/
const LIKE_ADD = '/api/like/add'

/* 
查找收藏列表
get
参数：无 user_id
*/
const LIKE_FIND = '/api/like/find_by_user'

/* 
取消收藏
get
参数：无 user_id
*/
const LIKE_DELETE = '/api/like/delete_by_user'

/* 
添加订单
post
参数：user_id  id name money pic starData endData allData  (pic由后台获得)
*/
const ORDER_ADD = '/api/order/add'

/* 
查找收藏列表
get
参数：无 user_id
*/
const ORDER_FIND = '/api/order/find_by_user'



export default {
  HOME_LIST,
  HOME_DETAIL,
  HOME_COMMENT,
  HOME_LIKE,
  LOGIN_API,
  CHECK_LOGIN,
  LOGOUT_API,
  SEND_CODE_API,
  LIKE_ADD,
  LIKE_FIND,
  LIKE_DELETE,
  ORDER_ADD,
  ORDER_FIND,
  
}
