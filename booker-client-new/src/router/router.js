import Vue from 'vue'
import Router from 'vue-router'
import Calendar from '@/components/Calendar.vue'
import Login from '@/components/Login.vue'
import AddEvent from '@/components/AddEvent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'home',
      component: Calendar
    },
    {
      path: '/add-event',
      name: 'add-event',
      component: AddEvent
    }
  ]
})
