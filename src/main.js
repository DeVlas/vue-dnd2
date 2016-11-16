import Vue from 'vue'
import App from './App'
import VueDnD2 from './vue-dnd2'
import VueShortkey from 'vue-shortkey'

Vue.use(VueDnD2)
Vue.use(VueShortkey)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
