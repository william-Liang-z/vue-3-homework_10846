import Vue from 'vue'
import Router from 'vue-router'

import jinduTower from '@/components/pro1/jinduTower'
import jinduLiving from '@/components/pro1/jinduLiving'

// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/app1',
      // name: 'app1',
      component: () => import('@/components/app1'),
      children: [
        {
          path: 'jinduTower',
          component: () => import('@/components/pro1/jinduTower')
        },
        {
          path: 'jinduLiving',
          component: () => import('@/components/pro1/jinduLiving')
        },
        {
          path: '*',
          redirect: 'jinduTower'
        },
      ]
    },
    {
      path: '/app2',
      name: 'app2',
      component: () => import('@/components/app2')
    },
    {
      path: '*',
      redirect: '/app1/jinduTower'
    }
  ],
  linkActiveClass: 'selected'
})
