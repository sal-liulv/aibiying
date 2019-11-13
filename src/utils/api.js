// 管理api
export const HOST = 'http://www.littleemmayang.com:8000';

/*
商品列表接口
参数：id
*/
const GOODS_LIST_API = '/api/home/catelist/itemlist';

/*
商品详情接口
参数：id
*/
const GOODS_DETAIL_API = '/api/item/detail';

/*
登录接口
post
参数：id
*/
const LOGIN_API = '/api/user/login';

export default {
  GOODS_LIST_API,
  GOODS_DETAIL_API,
  LOGIN_API
}
