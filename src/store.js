import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    arrMessage: [

    ],
    id: ``,
    username: `Some Name`,
    score: ``,
    isActive: ``,
    question: ``,
    answer: ``
  },
  getters: {
    getQuestion: state => {
      return state.question
    },
    getAnswer: state => {
      return state.answer
    },
    getIsActive: state => {
      return state.isActive
    },
    getArrMessage: state => {
      return state.arrMessage
    }
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
    },
    setActive (state, payload) {
      state.isActive = payload
    },
    setQuestion (state, payload) {
      state.question = payload
    },
    setAnswer (state, payload) {
      state.answer = payload
    }
  },
  actions: {
    saveUser (context, payload) {
      // firebase.database.ref.child('isActive').set(messageText);
      // firebase.database().ref().child("").on('value', function(snapshot) {
      //   snapshot.val()
      // })
      firebase.database().ref('users/' + '2').set({
        username: payload
      })
      context.commit('setName', payload)
    },
    getChat (context) {
      firebase.database().ref().child('messages').on('value', (snapshot) => {
        let arrMsg = Object.values(snapshot.val()).reverse()
        context.commit('setArrMsg', arrMsg)
      })
    },
    getIsActive (context) {
      firebase.database().ref().child('isActive').on('value', function (snapshot) {
        let isActive = snapshot.val()
        context.commit('setActive', isActive)
      })
    },
    setIsActive (context, payload) {
      firebase.database().ref('isActive').set(payload)
      context.commit('setActive', payload)
    },
    loadQuestion (context) {
      firebase.database().ref().child('isActive').on('value', function (snapshot) {
        let isActive = snapshot.val()
        context.commit('setActive', isActive)
        firebase.database().ref().child(`Question/${isActive}`).on('value', function (questionSnapshot) {
          context.commit('setQuestion', questionSnapshot.val().Pertanyaan)
          context.commit('setAnswer', questionSnapshot.val().Jawaban)
        })
      })
    }
  }
})

export default store
