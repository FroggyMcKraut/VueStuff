// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#list1',
  components: { App },
  template: '<App/>'
})
new Vue({
    el: '#list2',
    components: { App },
    template: '<App/>'
})
