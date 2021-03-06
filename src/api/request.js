import store from '@/store'
import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import "nprogress/nprogress.css"


const requests = axios.create({
   baseURL: '/api',
   timeout: 5000,
})

//请求拦截器
requests.interceptors.request.use((config)=>{
    if(store.state.detail.uuid){
        config.headers.userTempId = store.state.detail.uuid
    }
    if(store.state.user.token){
        config.headers.token = store.state.user.token
    }

    nprogress.start()
    return config
})


requests.interceptors.response.use((res)=>{
    nprogress.done()
    return res.data
},(error)=>{
    return Promise.reject(new Error('fail'))
})


export default requests