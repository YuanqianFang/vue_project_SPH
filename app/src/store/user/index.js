//登录注册的模块
import { reqGetCode, reqUserInfo, reqUserLogin, reqUserRegister } from "@/api";
const state = {
  code: "",
  token: "",
  userInfo:{}
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state,userInfo){
      state.userInfo = userInfo
  }
};
const actions = {
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone);
    if (result.code == 200) {
      commit("GETCODE", result.data);
      return "OK";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
  //注册
  async userRegister({ commit }, user) {
    let result = await reqUserRegister(user);
    if (result.code == 200) {
      return "OK";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
  //登录
  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data);
    if (result.code == 200) {
      commit("USERLOGIN", result.data.token);
      return "OK";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },

  //获取用户信息
  async getUserInfo({commit}){
    let result = await reqUserInfo()
    if(result.code == 200){
        commit("GETUSERINFO",result.data)
        console.log(result)
        return 'OK'
    }else{
        return Promise.reject(new Error('fail'))
    }
  }


};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
