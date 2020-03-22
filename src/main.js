import Vue from 'vue'
import App from './App.vue'
import './common/stylus/index.styl'
import Router from "./router/index"
import attachFastClick from 'fastclick'
attachFastClick.attach(document.body);//解决移动端300ms点击延迟

Vue.config.productionTip = false;//解决移动端300ms点击延迟

new Vue({
  render: h => h(App),
  router:Router
}).$mount('#app')
