import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";

const state = {
  cartList: [],
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const actions = {
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code == 200) {
      commit("GETCARTLIST", result.data);
    }
  },
  async deleteCartListById({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return "success";
    } else {
      return new Promise.reject(new Error("fail"));
    }
  },
  async updateChecked({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedById(skuId, isChecked);
    if (result.code == 200) {
      return "success";
    } else {
      return new Promise.reject(new Error("fail"));
    }
  },
  deleteAllCheckedCart({ dispatch, getters }) {
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach((element) => {
      let promise =
        element.isChecked == 1
          ? dispatch("deleteCartListById", element.skuId)
          : "";
      PromiseAll.push(promise);
    });
    return Promise.all(PromiseAll);
  },
  updateAllCartChecked({ dispatch, getters }, param) {
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach((element) => {
      let promise =
        element.isChecked != param
          ? dispatch("updateChecked", {
              skuId: element.skuId,
              isChecked: param,
            })
          : "";
      PromiseAll.push(promise);
    });
    return Promise.all(PromiseAll);
  },
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
