import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import toast from './components/common/toast/index'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

// 使用fastclick插件解决移动端点击300ms延迟的问题
FastClick.attach(document.body);
// 使用vuelazyload进行图片懒加载  此插件也有其他功能  可传入options设定
Vue.use(VueLazyLoad , {
  // 使用loading属性添加加载时的占位图 js使用图片可以通过require导入
  loading:require('assets/img/common/loading.png')
})

Vue.config.productionTip = false
// 用Vue.use去调用里面的install
Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

Vue.prototype.$bus = new Vue();
