import Vue from 'vue'

//引入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8899/api/'
Vue.prototype.$http = axios
Vue.prototype.axios = axios
    //引入mui样式
import '../../statics/css/mui.css'
import '../../statics/fonts/mui.ttf'

//引入mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'