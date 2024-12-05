const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/prva', component: () => import('pages/PrvaPage.vue') },
      { path: '/druga', component: () => import('pages/DrugaPage.vue') },
      { path: '/treca', component: () => import('pages/TrecaPage.vue') }
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
