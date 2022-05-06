import Vue from 'vue'
import App from './App.vue'
//三级联动组件（全局组件）
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
//引入路由
import router from '@/router'
//引入仓库
import store from './store'

import {reqCategoryList} from '@/api'
reqCategoryList()

import mock from '@/mock/mockServe'

import "swiper/css/swiper.css" 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由
  router,
  store
}).$mount('#app')
