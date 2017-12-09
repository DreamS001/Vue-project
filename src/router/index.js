//引入Vue
import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router'
//使用Router
Vue.use(VueRouter)
    //引入组件
import home from '../components/Home/home.vue'
import menber from '../components/Menber/menber.vue'
import shopcar from '../components/Shopcar/shopcar.vue'
import search from '../components/Search/search.vue'
import news from '../components/Home/News/news.vue'
import buy from '../components/Home/buy/buy.vue'
import contact from '../components/Home/contact/contact.vue'
import feedback from '../components/Home/feedback/feedback.vue'
import video from '../components/Home/video/video.vue'
import share from '../components/Home/share/share.vue'

import newsdetail from '../components/Home/News/newsdetail.vue'
import sharedetail from '../components/Home/Share/sharedetail.vue'
export default new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/menber', component: menber },
        { path: '/shopcar', component: shopcar },
        { path: '/search', component: search },
        { path: '/news', component: news },
        { path: '/buy', component: buy },
        { path: '/contact', component: contact },
        { path: '/feedback', component: feedback },
        { path: '/video', component: video },
        { path: '/share', component: share },
        { name: 'newsdetail', path: '/news/:id', component: newsdetail, props: true },
        { name: 'sharedetail', path: '/share/:id', component: sharedetail, props: true }
    ]
})