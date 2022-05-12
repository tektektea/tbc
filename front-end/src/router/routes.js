
const routes = [
  {
    path: '/',
    component: () => import('layouts/FrontLayout.vue'),
    children: [
      { path: '', name:'home',component: () => import('pages/front/IndexPage.vue') },
      { path: 'about',name:'about', component: () => import('pages/front/AboutPage.vue') },
      { path: 'term', name:'term',component: () => import('pages/front/TermPage.vue') },
      { path: 'privacy',name:'privacy', component: () => import('pages/front/PrivacyPage.vue') },
      { path: 'contact',name:'contact', component: () => import('pages/front/ContactPage.vue') },
      { path: 'booking',name:'booking', component: () => import('pages/front/BookingPage.vue') },
      { path: 'events',name:'events', component: () => import('pages/front/EventsPage.vue') },
    ]
  },
  {
    path:'/login',name:'login',component:()=>import('pages/front/LoginPage.vue')
  },
  {
    path: '/admin',
    component: () => import('layouts/BackLayout.vue'),
    children: [
      { path: '', name:'dashboard',component: () => import('pages/back/DashboardPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
