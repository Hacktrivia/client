import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RegisterPage from '@/components/RegisterPage'
import QuestionPage from '@/components/QuestionPage'
import ChatPage from '@/components/ChatPage'
import store from '@/store'

Vue.use(Router)

function requireAuth (to, from, next) {
  if (store.state.username === 'Some Name' || store.state.username === '') {
    next('/register')
  } else {
    console.log('home')
    next()
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage
    },
    {
      path: '/home',
      name: 'Home',
      component: QuestionPage,
      beforeEnter: requireAuth
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatPage
    }
  ]

})
