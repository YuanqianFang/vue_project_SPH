import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart"
import Trade from "@/pages/Trade"
import Pay from "@/pages/Pay"

export default [
  {
    path: "/pay",
    component: Pay,
    meta: {
      show: true,
    },
  },
  {
    path: "/trade",
    component: Trade,
    meta: {
      show: true,
    },
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: {
      show: true,
    },
  },
  {
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: AddCartSuccess,
    meta: {
      show: true,
    },
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: {
      //用于判断Footer组件是否显示
      show: true,
    },
  },
  {
    path: "/home",
    component: Home,
    meta: {
      //用于判断Footer组件是否显示
      show: true,
    },
  },
  {
    path: "/search/:keyword?",
    component: Search,
    meta: {
      show: true,
    },
    name: "search",
  },
  {
    path: "/login",
    component: Login,
    meta: {
      show: false,
    },
  },
  {
    path: "/register",
    component: Register,
    meta: {
      show: false,
    },
  },
  //重定向，在项目跑起来的时候，访问/,立马让他定向到首页
  {
    path: "*",
    redirect: "/home",
  },
];
