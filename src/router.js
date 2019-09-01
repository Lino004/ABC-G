import Vue from 'vue'
import Router from 'vue-router'
import AuthRequired from '@/utils/AuthRequired'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('./views/app'),
    redirect: '/app/',
    beforeEnter: AuthRequired,
    children: [
      {
        path: 'app/',
        component: () => import('./views/app/abc/Start')
      },
      {
        path: 'app/eleves',
        component: () => import('./views/app/eleves'),
        redirect: '/app/eleves/list-eleves',
        children: [
          { path: 'ajout-eleve', component: () => import('./views/app/eleves/Ajout') },
          { path: 'list-eleves', component: () => import('./views/app/eleves/List') },
          { path: 'details-eleve/:id', component: () => import('./views/app/eleves/Details') }
        ]
      },
      {
        path: 'app/parents',
        component: () => import('./views/app/parents'),
        redirect: '/app/parents/list-parents',
        children: [
          { path: 'ajout-parent', component: () => import('./views/app/parents/Ajout') },
          { path: 'list-parents', component: () => import('./views/app/parents/List') },
          { path: 'details-parent/:id', component: () => import('./views/app/parents/Details') }
        ]
      },
      {
        path: 'app/enseignants',
        component: () => import('./views/app/enseignants'),
        redirect: '/app/enseignants/list-enseignants',
        children: [
          { path: 'ajout-enseignant', component: () => import('./views/app/enseignants/Ajout') },
          { path: 'list-enseignants', component: () => import('./views/app/enseignants/List') },
          { path: 'details-enseignant/:id', component: () => import('./views/app/enseignants/Details') }
        ]
      },
      {
        path: 'app/emploi-de-temps',
        component: () => import('./views/app/emploiDeTemps/index')
      },
      {
        path: 'app/classes',
        component: () => import(/* webpackChunkName: "second-menu" */ './views/app/classes'),
        redirect: '/app/classes/',
        children: [
          { path: 'list/:level', component: () => import(/* webpackChunkName: "second-menu" */ './views/app/classes/List') },
          { path: '', component: () => import(/* webpackChunkName: "second-menu" */ './views/app/classes/ChooseLevel') },
          { path: 'ajouter', component: () => import(/* webpackChunkName: "second-menu" */ './views/app/classes/Add') }
        ]
      },
      {
        path: 'app/matieres',
        component: () => import(/* webpackChunkName: "second-menu" */ './views/app/matieres'),
        redirect: '/app/matieres/',
        children: [
          { path: 'list/:level', component: () => import(/* webpackChunkName: "second-menu" */ './views/app/matieres/List') },
          { path: '', component: () => import(/* webpackChunkName: "second-menu" */ './views/app/matieres/ChooseLevel') }
        ]
      }
    ]
  },
  { path: '/error', component: () => import('./views/Error') },
  {
    path: '/user',
    component: () => import('./views/user'),
    redirect: '/user/login',
    children: [
      { path: 'login', component: () => import('./views/user/Login') },
      { path: 'register', component: () => import('./views/user/Register') },
      { path: 'forgot-password', component: () => import('./views/user/ForgotPassword') }
    ]
  },
  { path: '*', component: () => import('./views/Error') }
]

const router = new Router({
  linkActiveClass: 'active',
  routes,
  mode: 'history'
})

export default router
