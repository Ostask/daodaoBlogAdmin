import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/public.scss'

import router from './router' //引入路由
import store from './vuex/store'

import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon);  

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store  
}).$mount('#app')
