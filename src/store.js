import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    arrQuestion: [
      'Apa nama ibu kota Indonesia ? ',
      'Apa nama ibu kota Jerman ? ',
      'Apa nama ibu kota Belanda ? '
    ],
    id: ``,
    username: `Some Name`,
    score: ``
  },
  mutations: {
    setId (state, payload) {
      state.id = payload
    },
    setName (state, payload) {
      state.username = payload
    },
    setScore (state, payload) {
      state.score = payload
    },
    setArrMsg (state, payload) {
      state.arrMessage = payload
    }
  },
  getters: {
    getArrMessage: state => {
      return state.arrMessage
    }
  },
  actions: {
    getChat (context) {
      firebase.database().ref().child('messages').on('value', (snapshot) => {
        let arrMsg = Object.values(snapshot.val())
        context.commit('setArrMsg', arrMsg)
      })
    }
  }
})

export default store
