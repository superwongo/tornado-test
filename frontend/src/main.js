import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.use(ElementUI)

import 'normalize.css'
import 'font-awesome/css/font-awesome.css'
import '~styles/index.scss'
import '~styles/animation.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

