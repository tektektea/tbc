
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
      { path: 'events',name:'events', component: () => import('pages/front/events/EventsPage.vue') },
      { path: 'gallery',name:'gallery', component: () => import('pages/front/GalleryPage.vue') },
      { path: 'events/:id',name:'event:detail', component: () => import('pages/front/events/EventDetailPage.vue') },
    ]
  },
  {
    path:'/login',name:'login',component:()=>import('pages/front/LoginPage.vue')
  },
  {
    path: '/admin',
    component: () => import('layouts/BackLayout.vue'),
    children: [
      { path: '', name:'dashboard',component: () => import('pages/backend/DashboardPage.vue') },
      { path: 'media', name:'media:list',component: () => import('pages/backend/media/MediaListPage.vue') },
      { path: 'media/upload', name:'media:upload',component: () => import('pages/backend/media/UploadPage.vue') },


      { path: 'vehicles', name:'vehicle:list',component: () => import('pages/backend/vehicle/VehiclesPage.vue') },
      { path: 'vehicles/create', name:'vehicle:create',component: () => import('pages/backend/vehicle/CreateVehiclePage.vue') },
      { path: 'vehicles/:id/edit', name:'vehicle:edit',component: () => import('pages/backend/vehicle/EditVehiclePage.vue') },


      { path: 'gallery', name:'gallery:list',component: () => import('pages/backend/gallery/GalleryPage.vue') },

      { path: 'contact', name:'contact:detail',component: () => import('pages/backend/contact/ContactPage.vue') },
      { path: 'contact/edit', name:'contact:edit',component: () => import('pages/backend/contact/EditContactPage.vue') },

      { path: 'about', name:'about:detail',component: () => import('pages/backend/about/AboutPage.vue') },
      { path: 'about/edit', name:'about:edit',component: () => import('pages/backend/about/EditAboutPage.vue') },

      { path: 'term', name:'term:detail',component: () => import('pages/backend/term/TermPage.vue') },
      { path: 'term/edit', name:'term:edit',component: () => import('pages/backend/term/EditTermPage.vue') },

      { path: 'privacy', name:'privacy:detail',component: () => import('pages/backend/privacy/PrivacyPage.vue') },
      { path: 'privacy/edit', name:'privacy:edit',component: () => import('pages/backend/privacy/EditPrivacyPage.vue') },

      { path: 'testimonials', name:'testimonial:list',component: () => import('pages/backend/testimonial/TestimonialsPage.vue') },
      { path: 'testimonials/create', name:'testimonial:create',component: () => import('pages/backend/testimonial/CreateTestimonialPage.vue') },
      { path: 'testimonials/:id/edit', name:'testimonial:edit',component: () => import('pages/backend/testimonial/EditTestimonialPage.vue') },

      { path: 'events', name:'event:list',component: () => import('pages/backend/event/EventsPage.vue') },
      { path: 'events/create', name:'event:create',component: () => import('pages/backend/event/CreateEventPage.vue') },
      { path: 'events/:id/edit', name:'event:edit',component: () => import('pages/backend/event/EditEventPage.vue') },

      { path: 'accounts', name:'account:list',component: () => import('pages/backend/account/AccountListPage.vue') },
      { path: 'contact-request', name:'contact-request:list',component: () => import('pages/backend/contact-request/ContactRequestsPage.vue') },
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
