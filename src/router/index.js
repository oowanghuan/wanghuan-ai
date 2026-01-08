import { createRouter, createWebHistory } from 'vue-router'
import ParticleHome from '../views/ParticleHome.vue'
import Products from '../views/Products.vue'
import Blog from '../views/Blog.vue'
import About from '../views/About.vue'

// Articles
import AiThreeNonDeliverances from '../views/articles/AiThreeNonDeliverances.vue'
import AiCodingTemplateToWorkflow from '../views/articles/AiCodingTemplateToWorkflow.vue'
import AiPlanningAndReflection from '../views/articles/AiPlanningAndReflection.vue'
import AiCodingTemplateScaling from '../views/articles/AiCodingTemplateScaling.vue'
import ProfessionalDevelopersControl from '../views/articles/ProfessionalDevelopersControl.vue'
import AiSuperIntern from '../views/articles/AiSuperIntern.vue'
import AiSuperInternEn from '../views/articles/AiSuperInternEn.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ParticleHome
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
  },
  {
    path: '/blog/ai-coding-template-to-workflow',
    name: 'AiCodingTemplateToWorkflow',
    component: AiCodingTemplateToWorkflow
  },
  {
    path: '/blog/ai-planning-and-reflection',
    name: 'AiPlanningAndReflection',
    component: AiPlanningAndReflection
  },
  {
    path: '/blog/ai-coding-template-scaling',
    name: 'AiCodingTemplateScaling',
    component: AiCodingTemplateScaling
  },
  {
    path: '/blog/professional-developers-control',
    name: 'ProfessionalDevelopersControl',
    component: ProfessionalDevelopersControl
  },
  {
    path: '/blog/ai-super-intern',
    name: 'AiSuperIntern',
    component: AiSuperIntern
  },
  {
    path: '/blog/ai-super-intern-en',
    name: 'AiSuperInternEn',
    component: AiSuperInternEn
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
