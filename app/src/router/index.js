//路由配置
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
        //重定向，在项目跑起来的时候，访问/,立马让他定向到首页
        {
            path:'*',
            redirect:'/home'
        }
    ]
})