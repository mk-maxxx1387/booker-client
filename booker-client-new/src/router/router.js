import Vue from 'vue'
import Router from 'vue-router'
import Calendar from '@/components/Calendar.vue'
import Login from '@/components/Login.vue'
import AddEvent from '@/components/AddEvent.vue'
import Employee from "@/components/Employee.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login,
      beforeEnter: (to, from, next) =>{
        if(!localStorage.getItem('token')){
          next('/login');
        } else {
          
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/add-event',
      name: 'add-event',
      component: AddEvent,
      beforeEnter: (to, from, next) =>{
        if(!localStorage.getItem('token')){
          next('/login');
        }
      }
    }
  ]
})
