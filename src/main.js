// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyCGM4cmlDvgfAR5rN1g32TiBoxEGLuD594',
  authDomain: 'wpmc-2ac20.firebaseapp.com',
  databaseURL: 'https://wpmc-2ac20.firebaseio.com',
  projectId: 'wpmc-2ac20',
  storageBucket: 'wpmc-2ac20.appspot.com',
  messagingSenderId: '734084490649'
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
