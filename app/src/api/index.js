import requests from "./request.js";


export const reqCategoryList = () => requests({url:'/product/getBaseCategoryList',
                                            method:'get'})


import mockRequests from "./mockAjax"

export const reqGetBannerList = ()=> mockRequests({url:'/banner',method:'get'})


export const reqFloorList = () => mockRequests.get('/floor')

export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params})

export const reqGetCode = (phone) => requests({url:'/user/passport/sendCode/'+ phone ,method:'get'});

//注册
export const reqUserRegister = (data) => requests({url:'/user/passport/register',data,method:'post'})

//登录
export const reqUserLogin = (data) => requests({url:'/user/passport/login',data,method:'post'})
//用户信息
export const reqUserInfo = () => requests({url:'/user/passport/auth/getUserInfo',method:'get'})

//退出登录
export const reqLogout = ()=>requests({url:'/user/passport/logout',method:'get'})

//获取商品详情
export const reqGoodsInfo = (skuid)=>requests({url:`/item/${skuid}`,method:"get"})