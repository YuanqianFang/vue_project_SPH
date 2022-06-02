import requests from "./request.js";

export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });

import mockRequests from "./mockAjax";

export const reqGetBannerList = () =>
  mockRequests({ url: "/banner", method: "get" });

export const reqFloorList = () => mockRequests.get("/floor");

export const reqGetSearchInfo = (params) =>
  requests({ url: "/list", method: "post", data: params });

export const reqGetCode = (phone) =>
  requests({ url: "/user/passport/sendCode/" + phone, method: "get" });

//注册
export const reqUserRegister = (data) =>
  requests({ url: "/user/passport/register", data, method: "post" });

//登录
export const reqUserLogin = (data) =>
  requests({ url: "/user/passport/login", data, method: "post" });
//用户信息
export const reqUserInfo = () =>
  requests({ url: "/user/passport/auth/getUserInfo", method: "get" });

//退出登录
export const reqLogout = () =>
  requests({ url: "/user/passport/logout", method: "get" });

//获取商品详情
export const reqGoodsInfo = (skuid) =>
  requests({ url: `/item/${skuid}`, method: "get" });

//将产品添加到购物车中
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post",
  });

//获取购物车列表数据接口
export const reqCartList = () =>
  requests({ url: "cart/cartList", method: "get" });

//删除购物车商品
export const reqDeleteCartById = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });

//修改购物车商品选中状态
export const reqUpdateCheckedById = (skuId, isChecked) =>
  requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });

//获取用户地址信息
export const reqUserAddress = () =>
  requests({
    url: "/user/userAddress/auth/findUserAddressList",
    method: "get",
  });

//获取订单内商品
export const reqOrderInfo = () =>
  requests({ url: "/order/auth/trade", method: "get" });

//提交订单
export const reqSubmitOrder = (tradeNo, data) =>
  requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: "post",
  });

//获取支付信息
export const reqPayInfo = (orderId) =>
  requests({ url: `/payment/weixin/createNative/${orderId}`, method: "get" });
