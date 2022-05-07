import requests from "./request.js";


export const reqCategoryList = () => requests({url:'/product/getBaseCategoryList',
                                            method:'get'})


import mockRequests from "./mockAjax"

export const reqGetBannerList = ()=> mockRequests({url:'/banner',method:'get'})


export const reqFloorList = () => mockRequests.get('/floor')

export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params})