import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Home from "../views/Home"

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [


  {
    path: '/:titolo/:id/:code',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
