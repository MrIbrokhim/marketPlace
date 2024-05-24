import { createRouter, createWebHashHistory } from 'vue-router'
import Home  from '../views/Home.vue'
import Products from '../views/Products.vue'
 

const routes = [
  {
    path:'/home',
    name:'home',
    component: Home
  },
  {
    path:'/products',
    name:'Products',
    component:Products
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router