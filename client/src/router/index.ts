import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/posts',
    name: 'AllPosts',
    component: () =>
      import(/* webpackChunkName: "posts" */ '../views/AllPostsView.vue'),
    meta: {
      title: 'Posts',
    },
  },
  {
    path: '/create',
    name: 'NewPost',
    component: () =>
      import(/* webpackChunkName: "create" */ '../views/NewPostView.vue'),
    meta: {
      title: 'Create Post',
    },
  },
  {
    path: '/edit/:id',
    name: 'EditPost',
    component: () =>
      import(/* webpackChunkName: "edit" */ '../views/EditPostView.vue'),
    meta: {
      title: 'Edit Post',
    },
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () =>
      import(/* webpackChunkName: "post" */ '../views/PostView.vue'),
    meta: {
      title: 'Post',
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '404',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
