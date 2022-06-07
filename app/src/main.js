import Vue from "vue";
import App from "./App.vue";
//三级联动组件（全局组件）
import TypeNav from "@/components/TypeNav";
//引入轮播图组件
import Carousel from "@/components/Carousel";
//分页器组件
import Pagination from "@/components/Pagination";

import { Button, MessageBox } from "element-ui";
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name,Button);
//element ui 注册组件的时候，还可以挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//引入路由
import router from "@/router";
//引入仓库
import store from "./store";

import { reqCategoryList } from "@/api";
reqCategoryList();

import mock from "@/mock/mockServe";
import "swiper/css/swiper.css";

//引入所有请求函数
import * as API from "@/api";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  //注册路由
  router,
  store,
}).$mount("#app");
