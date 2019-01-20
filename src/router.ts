import Vue from 'vue';
import Router from 'vue-router';
import App from './views/login/login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
    },
    {
      path: '/idnex',
      name: 'App',
      component: () => import(/* webpackChunkName: "about" */ './App.vue'),
    },{
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/login/register.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
