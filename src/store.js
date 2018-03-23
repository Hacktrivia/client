import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    arrQuestion: [
      {
        q: 'Apa nama ibu kota Indonesia ? ',
        a: 'jakarta'
      }, {
        q: 'Apa nama ibu kota Belanda ? ',
        a: 'jakarta'
      }, {
        q: 'Apa nama ibu kota Bekasi ? ',
        a: 'jakarta'
      }
    ],
    id: ``,
    username: `Anonymous`,
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

  }
})

export default store
