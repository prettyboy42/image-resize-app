import { RouteConfig } from 'vue-router';
import MyLayoutLogin from 'layouts/MyLayoutLogin.vue';

const Error = () => import('pages/Error.vue');
const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/forbidden',
    name: 'Forbidden',
    component: Error,
    meta: { error403: true }
  },
  {
    path: '/not-found',
    name: 'NotFound',
    component: Error,
    meta: { error404: true }
  },
  {
    path: '/login',
    component: MyLayoutLogin,
    children: [{ path: '', component: () => import('pages/Login.vue') }]
  },
  {
    path: '/register',
    component: MyLayoutLogin,
    children: [{ path: '', component: () => import('pages/Register.vue') }]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
