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

/*
登录接口
post
参数：id
*/
const LOGIN_API = '/api/user/login';

export default {
  HOME_LIST,
  HOME_DETAIL,
  HOME_COMMENT,
  HOME_LIKE
}
