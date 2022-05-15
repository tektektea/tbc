
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
    beforeEach: (to, from) => {
      console.log("admin route ",to)
    },
    children: [
      { path: '', name:'dashboard',component: () => import('pages/backend/DashboardPage.vue') ,meta:{protected:true}},
      { path: 'media', name:'media:list',component: () => import('pages/backend/media/MediaListPage.vue'),meta:{protected:true} },
      { path: 'media/upload', name:'media:upload',component: () => import('pages/backend/media/UploadPage.vue'),meta:{protected:true} },


      { path: 'vehicles', name:'vehicle:list',component: () => import('pages/backend/vehicle/VehiclesPage.vue'),meta:{protected:true} },
      { path: 'vehicles/create', name:'vehicle:create',component: () => import('pages/backend/vehicle/CreateVehiclePage.vue') ,meta:{protected:true}},
      { path: 'vehicles/:id/edit', name:'vehicle:edit',component: () => import('pages/backend/vehicle/EditVehiclePage.vue'),meta:{protected:true} },


      { path: 'gallery', name:'gallery:list',component: () => import('pages/backend/gallery/GalleryPage.vue'),meta:{protected:true} },

      { path: 'contact', name:'contact:detail',component: () => import('pages/backend/contact/ContactPage.vue') ,meta:{protected:true}},
      { path: 'contact/edit', name:'contact:edit',component: () => import('pages/backend/contact/EditContactPage.vue'),meta:{protected:true} },

      { path: 'about', name:'about:detail',component: () => import('pages/backend/about/AboutPage.vue') ,meta:{protected:true}},
      { path: 'about/edit', name:'about:edit',component: () => import('pages/backend/about/EditAboutPage.vue') ,meta:{protected:true}},

      { path: 'term', name:'term:detail',component: () => import('pages/backend/term/TermPage.vue'),meta:{protected:true} },
      { path: 'term/edit', name:'term:edit',component: () => import('pages/backend/term/EditTermPage.vue'),meta:{protected:true} },

      { path: 'privacy', name:'privacy:detail',component: () => import('pages/backend/privacy/PrivacyPage.vue'),meta:{protected:true} },
      { path: 'privacy/edit', name:'privacy:edit',component: () => import('pages/backend/privacy/EditPrivacyPage.vue'),meta:{protected:true} },

      { path: 'testimonials', name:'testimonial:list',component: () => import('pages/backend/testimonial/TestimonialsPage.vue'),meta:{protected:true} },
      { path: 'testimonials/create', name:'testimonial:create',component: () => import('pages/backend/testimonial/CreateTestimonialPage.vue') ,meta:{protected:true}},
      { path: 'testimonials/:id/edit', name:'testimonial:edit',component: () => import('pages/backend/testimonial/EditTestimonialPage.vue'),meta:{protected:true} },

      { path: 'events', name:'event:list',component: () => import('pages/backend/event/EventsPage.vue'),meta:{protected:true} },
      { path: 'events/create', name:'event:create',component: () => import('pages/backend/event/CreateEventPage.vue'),meta:{protected:true} },
      { path: 'events/:id/edit', name:'event:edit',component: () => import('pages/backend/event/EditEventPage.vue'),meta:{protected:true} },

      { path: 'accounts', name:'account:list',component: () => import('pages/backend/account/AccountListPage.vue'),meta:{protected:true} },
      { path: 'contact-request', name:'contact-request:list',component: () => import('pages/backend/contact-request/ContactRequestsPage.vue'),meta:{protected:true} },
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
