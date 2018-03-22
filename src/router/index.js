import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RegisterPage from '@/components/RegisterPage'
import QuestionPage from '@/components/QuestionPage'

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
    }
  ]
})
