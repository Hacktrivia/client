// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase'
import $ from 'jquery'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyCUqzGCmX0P6n71XY0T9FNp0n3jT3r-4mQ',
  authDomain: 'hacktrivia-91a4b.firebaseapp.com',
  databaseURL: 'https://hacktrivia-91a4b.firebaseio.com',
  projectId: 'hacktrivia-91a4b',
  storageBucket: 'hacktrivia-91a4b.appspot.com',
  messagingSenderId: '1027360734967'
}

firebase.initializeApp(config)
Vue.prototype.$fbdb = firebase.database()
Vue.prototype.$jq = $

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
