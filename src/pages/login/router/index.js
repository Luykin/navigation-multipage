import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: () =>
        import ('components/login/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import ('components/register/register')
    },
    {
      path: '/retrieve-password',
      name: 'retrieve-password',
      component: () =>
        import ('components/retrieve-password/retrieve-password')
    },
    {
      path: '/modify-password',
      name: 'modify-password',
      component: () =>
        import ('components/modify-password/modify-password')
    }
  ]
})
