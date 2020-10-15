import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/admin/Index.vue'
//import Edit from '../views/admin/Edit.vue'
//import List from '../views/admin/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/custom',
    name: 'Custom',
    component: () => import('../views/Custom.vue')
  },

  {
    path: '/admin',
    name: 'Admin',
    component: Index,
    //Child Routes
    children: [
      {
        path: "/edit",
        name: "Edit",
        component: () => import('../views/admin/Edit.vue')
      },
      {
        path: '/list',
        name: "List",
        component: () => import('../views/admin/List.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
