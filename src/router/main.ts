// 1. Define route components.
// These can be imported from other files
import Schedule from '../views/Schedule.vue';
import Login from '../views/Login.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', redirect: { name: 'login' } },
  { path: '/logout', redirect: { name: 'login' } },
  { path: '/login', name: 'login', component: Login },
  {
    path: '/schedule',
    name: 'schedule',
    component: Schedule,
    // meta: { requiresAuth: true },
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

router.beforeEach((to) => {
  const store = useAuthStore();
  if (to.meta.requiresAuth && !store.authenticated) return '/login';
});

export default router;
