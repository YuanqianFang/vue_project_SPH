//路由配置
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push
//第一个参数： 告诉原来push方法 你往哪里跳转（传递哪些参数）
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

//重写replace
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}




export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{
                //用于判断Footer组件是否显示
                show:true
            }
        },
        {
            ///:keyword
            path:'/search',
            component:Search,
            meta:{
                show:true
            },
            name:"search"
        },
        {
            path:'/login',
            component:Login,
            meta:{
                show:false
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                show:false
            }
        },
        //重定向，在项目跑起来的时候，访问/,立马让他定向到首页
        {
            path:'*',
            redirect:'/home'
        }
    ]
})