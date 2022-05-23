//路由配置
import VueRouter from "vue-router";
import Vue from "vue";
import store from "@/store";
Vue.use(VueRouter);

import routes from "./routes";
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push
//第一个参数： 告诉原来push方法 你往哪里跳转（传递哪些参数）
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

//重写replace
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

let router = new VueRouter({
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    //路由跳转时，设置滚动条为最上方
    return { y: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  if (token) {
    if (to.path == "/login" || to.path == "/register") {
      next("/");
    } else {
      if (name) {
        next();
      } else {
        try {
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
          await store.dispatch("userLogout");
          next("/login");
        }
      }
    }
  } else {
    //未登录 暂时放行
    next();
  }
});

export default router;
