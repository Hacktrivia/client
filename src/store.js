import Vue from 'vue'
import Vuex from 'vuex'
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
    }
  },
  actions: {
    createUser (context, payload) {
      context.commit('setName', payload)
    }
  }
})

export default store
