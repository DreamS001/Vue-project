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
import buydetail from '../components/Home/Buy/buydetail.vue'

import buycomment from '../components/Home/Buy/buycomment.vue'
import goodsdesc from '../components/Home/Buy/goodsdesc.vue'
const router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', meta: { title: '首页' }, component: home },
        { path: '/menber', meta: { title: '会员中心' }, component: menber },
        { path: '/shopcar', meta: { title: '购物车' }, component: shopcar },
        { path: '/search', meta: { title: '搜索' }, component: search },
        { path: '/news', meta: { title: '新闻资讯' }, component: news },
        { path: '/buy', meta: { title: '商品购买' }, component: buy },
        { path: '/contact', meta: { title: '联系我们' }, component: contact },
        { path: '/feedback', meta: { title: '留言反馈' }, component: feedback },
        { path: '/video', meta: { title: '视频专区' }, component: video },
        { path: '/share', meta: { title: '图片分享' }, component: share },
        { name: 'newsdetail', meta: { title: '新闻详情' }, path: '/news/:id', component: newsdetail, props: true },
        { name: 'sharedetail', meta: { title: '图片详情' }, path: '/share/:id', component: sharedetail, props: true },
        { name: 'buydetail', meta: { title: '商品详情' }, path: '/buy/:id', component: buydetail, props: true },
        { name: 'buycomment', meta: { title: '商品评论' }, path: '/buydetail/buycomment/:id', component: buycomment, props: true },
        { name: 'goodsdesc', meta: { title: '商品介绍' }, path: '/buydetail/goodsdesc/:id', component: goodsdesc, props: true }
    ]
})

router.afterEach((to, from) => {
    // console.log(to)
    document.title = to.meta.title
})
export default router