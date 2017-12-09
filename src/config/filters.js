import Vue from 'vue'
//过滤器 格式化时间
import moment from 'moment'
Vue.filter('fmtdate', (date, fmtStr) => {
    return moment(date).format(fmtStr)
})