// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDVifyUHN915I1fkxhxeim1KiYCF4oh_II',
  authDomain: 'triviack.firebaseapp.com',
  databaseURL: 'https://triviack.firebaseio.com',
  projectId: 'triviack',
  storageBucket: 'triviack.appspot.com',
  messagingSenderId: '184111905079'
}

firebase.initializeApp(config)
Vue.prototype.$fbdb = firebase.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
