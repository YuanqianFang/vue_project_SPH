import { reqCartList } from "@/api";

const state ={};
const mutations ={};
const actions = {
    async getCartList(){
        let result = await reqCartList();
        if(result.code == 200){
            
        }
    }
};
const getters = {}
export default{
    state, 
    mutations,
    actions,
    getters
}