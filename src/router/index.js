import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const guest = (to, from, next) => {
  if (!localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/");
  }
};
const auth = (to, from, next) => {
  if (localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/login");
  }
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: '/loggedout',
    name: 'LoggedOut',
    beforeEnter: guest,
    component: () => import(/* webpackChunkName: "loggedout" */ "@/views/LoggedOut.vue")
  },
  {
    path: '/orderhistory',
    name: 'OrderHistory',
    beforeEnter: auth,
    component: () => import(/* webpackChunkName: "OrderHistory" */ "@/views/OrderHistory.vue")
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: () => import(/* webpackChunkName: "Favourites" */ "@/views/Favourites.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
