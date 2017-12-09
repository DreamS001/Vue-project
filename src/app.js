//导入Vue
import Vue from 'vue'

//引入过滤器
import './config/filters.js'

//引入需要的插件
import './config/plugin.js'

import app from './app.vue'

//引入路由
import router from './router'
//创建Vue对象并挂载路由
let vm = new Vue({
    el: '#app',
    router,
    render(createElement) {
        return createElement(app)
    },
    created() {
        //拦截器
        this.axios.interceptors.request.use(function(config) {
            // Do something before request is sent
            this.$indicator.open('加载中...');
            return config;
        }.bind(this), function(error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor
        this.axios.interceptors.response.use(function(response) {
            // Do something with response data
            this.$indicator.close();
            return response;
        }.bind(this), function(error) {
            // Do something with response error
            return Promise.reject(error);
        });
    }
})