
const routes = [
  {
    path: '/',
    component: () => import('layouts/FrontLayout.vue'),
    children: [
      { path: '', component: () => import('pages/front/IndexPage.vue') },
      { path: 'about', component: () => import('pages/front/AboutPage.vue') },
      { path: 'term', component: () => import('pages/front/TermPage.vue') },
      { path: 'privacy', component: () => import('pages/front/PrivacyPage.vue') },
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
