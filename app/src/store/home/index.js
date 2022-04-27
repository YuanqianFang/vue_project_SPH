import { reqCategoryList } from "@/api"

const state = {
    categoryList:[]
}

const actions = {
    async categoryList({commit}){
        let result = await reqCategoryList();
        // console.log(result)
        if(result.code == 200){
            commit("CATEGORYLIST",result.data)
        }
    }
}


const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
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
