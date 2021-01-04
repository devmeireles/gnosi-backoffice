/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '@/views/app';
import Dashboard from '@/views/app/dashboard';
import Catalogues from '@/views/app/catalogues';
import Categories from '@/views/app/categories';
import Auth from '@/views/auth';
import Login from '@/views/auth/login';
import consts from '@/static/js/consts';
import StorageService from '@/services/LocalStorageService';

Vue.use(VueRouter);

const guardValidToken = async () => {
  const token = await StorageService.get('token');
  console.log(token);
  if (!token) {
    return false;
  }

  return true;
};

const backofficeGuards = async (to, from, next) => {
  const result = await guardValidToken();
  console.log(result);
  if (!result) {
    next({ name: consts.ROUTES.LOGIN.NAME });
    return;
  }

  next(true);
};

const routes = [
  {
    path: consts.ROUTES.AUTH.PATH,
    name: consts.ROUTES.AUTH.NAME,
    component: Auth,
    children: [
      {
        alias: consts.ROUTES.AUTH.PATH,
        path: consts.ROUTES.LOGIN.PATH,
        name: consts.ROUTES.LOGIN.NAME,
        component: Login,
        meta: { namespace: 'route-auth', permission: 'ALL' },
      },
    ],
  },
  {
    path: '/app',
    component: App,
    beforeEnter: backofficeGuards,
    children: [
      {
        path: consts.ROUTES.DASHBOARD.PATH,
        name: consts.ROUTES.DASHBOARD.NAME,
        component: Dashboard,
        meta: { namespace: 'route-dashboard', permission: 'DASHBOARD.VIEW' },
      },
      {
        path: consts.ROUTES.CATALOGUES.PATH,
        name: consts.ROUTES.CATALOGUES.NAME,
        component: Catalogues,
        meta: { namespace: 'route-catalogues', permission: 'DASHBOARD.VIEW' },
      },
      {
        path: consts.ROUTES.CATEGORIES.PATH,
        name: consts.ROUTES.CATEGORIES.NAME,
        component: Categories,
        meta: { namespace: 'route-categories', permission: 'DASHBOARD.VIEW' },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
