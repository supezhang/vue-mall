import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import fastClick from 'fastclick'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();//事件总线
Vue.filter('formatTime',function(val){
  var date = new Date(val*1000)
  const year = date.getFullYear()
  const month = date.getMonth()+1
  const day = date.getDate()
  const hour = date.getHours()<10?'0'+date.getHours():date.getHours()
  const minutes = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()
  const seconds = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds()
  return `${year}-${month}-${day} ${hour}:${minutes}`
})

Vue.use(VueLazyload,{
  loading: require('./assets/img/tabbar/Loading.png')
})
fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
