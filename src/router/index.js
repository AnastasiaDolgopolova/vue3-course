import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostPage.vue'),
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: () => import('../views/SinglePost.vue'),
    },
    {
      path: '/posts-store',
      name: 'post-store',
      component: () => import('../views/PostPageWithStore.vue'),
    },
    {
      path: '/posts-composition',
      name: 'post-composition',
      component: () => import('../views/PostPageCompositionAPI.vue'),
    },
  ],
})

export default router
