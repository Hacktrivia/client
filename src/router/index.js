import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RegisterPage from '@/components/RegisterPage'
import QuestionPage from '@/components/QuestionPage'
import ChatPage from '@/components/ChatPage'

Vue.use(Router)

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
      component: QuestionPage
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatPage
    }
  ]
})
