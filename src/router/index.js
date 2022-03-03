import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '../views/SignUpView.vue'
import SignInView from '../views/SignInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signup',
      component: SignUpView,
      props: true
    },
    {
      path: '/success',
      name: 'signin',
      component: SignInView,
      props: true
    },
    
  ]
})

export default router
