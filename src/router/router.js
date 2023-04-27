import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import Bascket from '@/views/Bascket.vue'

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/bascket',
    component: Bascket
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;