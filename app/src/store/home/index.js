import { reqCategoryList, reqGetBannerList} from "@/api"

const state = {
    categoryList:[],
    bannerList:[]
}

const actions = {
    async categoryList({commit}){
        let result = await reqCategoryList();
        // console.log(result)
        if(result.code == 200){
            commit("CATEGORYLIST",result.data)
        }
    },
    async reqGetBannerList({commit}){
        let result = await reqGetBannerList();
        if(result.code == 200){
            commit("GETBANNERLIST",result.data)
        }
    }
}


const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    }
}


const getters = {
    
}

export default{
    state,
    mutations,
    actions,
    getters
}
