import * as VueRouter from 'vue-router'

import HomeLayout from '../components/home-layout.vue'
import Home from '../components/home.vue'
import Error404 from '../components/404.vue'
import About from '../components/about.vue'
import FAQ from '../components/faq.vue'
import Terms from '../components/terms.vue'
import RoomContainer from '../components/room-container.vue'
import Room from '../components/room.vue'
import CheckRoom from '../plugins/check.room'


const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      { path: '', component: Home, name: 'home'},
      { path: 'terms', component: Terms, name: 'terms'},
      { path: 'faq', component: FAQ, name: 'faq'},
      { path: 'about', component: About, name: 'about'},
    ]
  },

  {
    path: '/room',
    component: RoomContainer,
    name: 'room-index',
    beforeEnter: CheckRoom,
    children: [
      {path: ':room', component: Room, name: 'room', props: true, }
    ]
  },

  // {
  //   path: '/login',
  //   component: Login,
  // },
  // {
  //   path: '/registration',
  //   component: Registration,
  // },
  // {
  //   path: '/terms',
  //   component: Terms,
  // },
  // {
  //   path: '/faq',
  //   component: FAQ,
  // },
  // {
  //   path: '/about',
  //   component: About,
  // },
  // {
  //   path: '/dashboard',
  //   component: Dashboard,
  //   name: 'dashboard',
  //   beforeEnter: AuthGuard,
  //   children: [
  //     { path: '', component: DashboardIndex, name: 'dashboard-index'},
  //     { path: 'services', component: DashboardServices, name: 'dashboard-services', children: [
  //         {path: ':id', component: Service, name: 'service', props: true}
  //       ]
  //     },
  //     { path: 'vms', component: DashboardVMs, name: 'dashboard-vms', children: [
  //         {path: ':id', component: Vm, name: 'vm', props: true}
  //       ]
  //
  //     },
  //     { path: 'payments', component: DashboardPayments, name: 'dashboard-payments', children: [
  //         {path: 'success', component: DashboardPaymentSuccess, name: 'dashboard-payment-success'},
  //         {path: 'cancel', component: DashboardPaymentCancel, name: 'dashboard-payment-cancel'}
  //       ]
  //     },
  //
  //     { path: 'users', component: DashboardUsers, name: 'dashboard-users', beforeEnter: AdminGuard, children: [
  //         {path: ':id', component: DashboardUser, name: 'dashboard-user', props: true}
  //       ]
  //     },
  //     { path: 'profile', component: DashboardProfile, name: 'dashboard-profile', props: true},
  //     { path: 'showback', component: DashboardShowback, name: 'dashboard-showback', props: true}
  //   ],
  // },
  {
    path: '/:catchAll(.*)*', name: 'not-found', component: Error404,
  }
]

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory('/'),
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes, // short for `routes: routes`
  mode: 'history',

})