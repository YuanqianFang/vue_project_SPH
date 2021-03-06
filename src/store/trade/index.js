import { reqUserAddress, reqOrderInfo } from "@/api";
const state = {
  addressInfo: [],
  orderInfo: {},
};
const mutations = {
  GETUSERADDRESS(state, addressInfo) {
    state.addressInfo = addressInfo;
  },
  GETORDERINFO(state, orderInfo) {
    state.orderInfo = orderInfo;
  },
};
const actions = {
  //获取用户信息
  async getUserAddress({ commit }) {
    let result = await reqUserAddress();
    if (result.code == 200) {
      commit("GETUSERADDRESS", result.data);
    }
  },

  //获取订单内商品清单
  async getOrderInfo({ commit }) {
    let result = await reqOrderInfo();
    if (result.code == 200) {
      commit("GETORDERINFO", result.data);
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
