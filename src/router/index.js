import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pokemon from '@/components/Pokemon'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon',
      component: Pokemon,
      props: true
    }
  ],
    mode: 'history'
})
