import requests from "./request.js";


export const reqCategoryList = () => requests({url:'/product/getBaseCategoryList',
                                            method:'get'})
