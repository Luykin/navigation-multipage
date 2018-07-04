import Vue from 'vue'
import Router from 'vue-router'
// import index from 'components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/download',
      name: 'management',
      component: () => import('components/download/download'),
      children: [{
        path: ':id',
        name: 'management',
        component: () => import('components/downloadPic/downloadPic')
      }]
    }
  ]
})
