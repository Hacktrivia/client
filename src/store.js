import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    arrMessage: [

    ],
    userId: ``,
    username: ``,
    userScore: ``,
    isActive: ``,
    question: ``,
    answer: ``,
    lastndexQuestion: 3,
    arrUser: [

    ]
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
    },
    getLastndexQuestion: state => {
      return state.lastndexQuestion
    },
    getArrUser: state => {
      return state.arrUser
    },
    getUserScore: state => {
      return state.userScore
    }
  },
  mutations: {
    setUserId (state, payload) {
      state.userId = payload
    },
    setUsername (state, payload) {
      state.username = payload
    },
    setUserScore (state, payload) {
      state.userScore = payload
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
    },
    setArrUser (state, payload) {
      state.arrUser = payload
    }
  },
  actions: {
    saveUser (context, payload) {
      context.commit('setUsername', payload)
      context.commit('setUserScore', 0)
      firebase.database().ref().child('users/').push({ username: payload, score: 0 }).then((newUser) => {
        console.log(newUser.key)
        context.commit('setUserId', newUser.key)
      })
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
    },
    getScore (context) {
      firebase.database().ref().child('users').on('value', (snapshot) => {
        let arrUser = Object.values(snapshot.val())
        context.commit('setArrUser', arrUser)
      })
      // firebase.database().ref().child(`users/${context.state.userId}/score`).once('value', function (snapshot) {
      //   context.commit('setUserScore', snapshot.val())
      // })
    },
    addScore (context) {
      let score = context.state.userScore
      let newScore = String(parseInt(score) + 1)
      console.log(context.state.userId)
      firebase.database().ref().child(`users/${context.state.userId}/score`).set(newScore)
      context.commit('setUserScore', newScore)
    }
  }
})

export default store
