  import { createRouter, createWebHistory } from 'vue-router'
  import DesktopView from '../views/Desktop.vue'
  import ContactsView from '../views/Contacts.vue'

  const routes = [
    {
      path: '/Desktop',
      name: 'Desktop',
      component: DesktopView,
      meta: { background: 'gradient' },
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: ContactsView,
      meta: { background: 'black'},
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { background: 'gradient' },
    },
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router
