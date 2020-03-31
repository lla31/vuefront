import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//文本编辑器
import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
//文本编辑器
Vue.use(VueQuillEditor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
