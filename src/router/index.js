import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import News from "../components/News";
import Messages from "../components/Messages";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/news',
      name:'News',
      component: News
    },
    {
      path:'/messages',
      name:'Messages',
      component:Messages,
    }
  ],
  mode:"history",
})
