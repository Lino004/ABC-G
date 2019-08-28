import Vue from 'vue'
import Router from 'vue-router'
import AuthRequired from '@/utils/AuthRequired'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "app" */ './views/app'),
    redirect: '/app/',
    beforeEnter: AuthRequired,
    children: [
      {
        path: 'app/',
        component: () => import(/* webpackChunkName: "abc" */ './views/app/abc/Start')
      },
      {
        path: 'app/second-menu',
        component: () => import(/* webpackChunkName: "second-menu" */ './views/app/secondMenu'),
        redirect: '/app/second-menu/second',
        children: [
          { path: 'second', component: () => import(/* webpackChunkName: "second-menu" */ './views/app/secondMenu/Second') }
        ]
      },
      {
        path: 'app/eleves',
        component: () => import(/* webpackChunkName: "second-menu" */ './views/app/eleves'),
        redirect: '/app/eleves/list-eleves',
        children: [
          { path: 'second', component: () => import(/* webpackChunkName: "second-menu" */ './views/app/eleves/Second') },
          { path: 'list-eleves', component: () => import(/* webpackChunkName: "second-menu" */ './views/app/eleves/List') },
          { path: 'details-eleve/:id', component: () => import(/* webpackChunkName: "second-menu" */ './views/app/eleves/Details') }
        ]
      },
      {
        path: 'app/classes',
        component: () => import(/* webpackChunkName: "second-menu" */ './views/app/classes'),
        redirect: '/app/classes/',
        children: [
          { path: '', component: () => import(/* webpackChunkName: "second-menu" */ './views/app/classes/List') },
          { path: 'choisir-niveau', component: () => import(/* webpackChunkName: "second-menu" */ './views/app/classes/ChooseLevel') },
          { path: 'ajouter', component: () => import(/* webpackChunkName: "second-menu" */ './views/app/classes/Add') },
        ]
      },
      {
        path: 'app/matieres',
        component: () => import(/* webpackChunkName: "second-menu" */ './views/app/matieres'),
        redirect: '/app/matieres/',
        children: [
          { path: '', component: () => import(/* webpackChunkName: "second-menu" */ './views/app/matieres/List') },
          { path: 'choisir-niveau', component: () => import(/* webpackChunkName: "second-menu" */ './views/app/matieres/ChooseLevel') },
        ]
      },
      {
        path: 'app/single',
        component: () => import(/* webpackChunkName: "single" */ './views/app/single')
      }
    ]
  },
  { path: '/error', component: () => import(/* webpackChunkName: "error" */ './views/Error') },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ './views/user'),
    redirect: '/user/login',
    children: [
      { path: 'login', component: () => import(/* webpackChunkName: "user" */ './views/user/Login') },
      { path: 'register', component: () => import(/* webpackChunkName: "user" */ './views/user/Register') },
      { path: 'forgot-password', component: () => import(/* webpackChunkName: "user" */ './views/user/ForgotPassword') }
    ]
  },
  { path: '*', component: () => import(/* webpackChunkName: "error" */ './views/Error') }
]

const router = new Router({
  linkActiveClass: 'active',
  routes,
  mode: 'history'
})

export default router
