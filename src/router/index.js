import Vue from 'vue'
import Router from 'vue-router'

import Login from "../components/Login";
import Home from "../components/Home";
import Welcome from "../components/Welcome";
import Users from "../components/Users";
import Roles from "../components/Roles";
import Rights from "../components/Rights";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect:'/welcome',
      children:[
        {
          path:'/welcome',
          component:Welcome
        },
        {
          path: '/users',
          component: Users
        },
        {
          path:'/roles',
          component:Roles
        },
        {
          path:'/rights',
          component:Rights
        }
      ]
    }
  ]
});

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next();
  }
  let token = window.sessionStorage.getItem("token");
  if (token === null) {
    return next('/login');
  }
  next();
});

export default router;
