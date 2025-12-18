import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Blog from '../views/Blog.vue'
import About from '../views/About.vue'

// Articles
import AiThreeNonDeliverances from '../views/articles/AiThreeNonDeliverances.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // Articles
  {
    path: '/blog/ai-three-non-deliverances',
    name: 'AiThreeNonDeliverances',
    component: AiThreeNonDeliverances
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
