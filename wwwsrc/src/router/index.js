import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Keeps from '../components/Keeps'
import store from '../store'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true}
      
    },
    {
      path: '/login',
      name: 'Login',
      component: Login

    },
    {
      path: '/keeps',
      name: 'Keeps',
      component: Keeps

    }
  ]
  
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     debugger
//     if (store.state.activeUser._id) {
//         redirect: to.fullPath
//         next()
//     }
//   } else {
//       path: '/login';
//       redirect: to.path
//       next()
//   }
// })
export default router 

