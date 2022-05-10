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