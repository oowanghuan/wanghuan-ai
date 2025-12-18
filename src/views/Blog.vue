<template>
  <div class="blog-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>博客</h1>
        <p>AI 协作开发的实战经验与思考</p>
      </div>
    </section>

    <!-- Blog Content -->
    <section class="section">
      <div class="container">
        <!-- Featured Post -->
        <div class="featured-post">
          <div class="post-image">
            <div class="featured-icon">
              <span>🧠</span>
            </div>
          </div>
          <div class="post-content">
            <div class="post-meta">
              <span class="post-category">AI 深度对话</span>
              <span class="post-date">2024年12月19日</span>
              <span class="post-badge new">NEW</span>
            </div>
            <h2>AI 规划能力与自我反思机制：一次深度对话</h2>
            <p>
              在开发 AI 协作开发框架过程中，关于 AI 如何思考、规划和自我校验的探讨。
              AI 自己是怎么做规划的？我们设计的这些流程，和 AI 内部的思考过程有什么关系？
            </p>
            <router-link to="/blog/ai-planning-and-reflection" class="btn btn-primary">
              阅读全文
              <el-icon><ArrowRight /></el-icon>
            </router-link>
          </div>
        </div>

        <!-- Categories -->
        <div class="categories">
          <button
            v-for="cat in categories"
            :key="cat.id"
            :class="['category-btn', { active: activeCategory === cat.id }]"
            @click="activeCategory = cat.id"
          >
            {{ cat.name }}
          </button>
        </div>

        <!-- Posts Grid -->
        <div class="posts-grid">
          <article v-for="post in filteredPosts" :key="post.id" class="post-card">
            <div class="post-card-image">
              <div class="placeholder-image small">
                <el-icon><Document /></el-icon>
              </div>
            </div>
            <div class="post-card-content">
              <div class="post-meta">
                <span class="post-category">{{ post.category }}</span>
                <span class="post-date">{{ post.date }}</span>
              </div>
              <h3>{{ post.title }}</h3>
              <p>{{ post.excerpt }}</p>
              <router-link v-if="post.isInternal" :to="post.link" class="read-more">
                阅读更多 <el-icon><ArrowRight /></el-icon>
              </router-link>
              <a v-else :href="post.link" target="_blank" class="read-more">
                阅读更多 <el-icon><ArrowRight /></el-icon>
              </a>
            </div>
          </article>
        </div>

        <!-- Coming Soon Notice -->
        <div class="coming-soon-notice">
          <el-icon><Edit /></el-icon>
          <div>
            <h4>更多文章即将发布</h4>
            <p>我正在整理更多关于 AI 协作开发的实战经验，敬请期待</p>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="newsletter">
          <h3>订阅更新</h3>
          <p>第一时间获取新文章和产品更新</p>
          <form class="newsletter-form" @submit.prevent="handleSubscribe">
            <el-input
              v-model="email"
              placeholder="your@email.com"
              size="large"
            >
              <template #prefix>
                <el-icon><Message /></el-icon>
              </template>
            </el-input>
            <el-button type="primary" size="large" native-type="submit">
              订阅
            </el-button>
          </form>
          <p class="newsletter-note">暂未开通，敬请期待</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Document, TopRight, ArrowRight, Edit, Message } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const email = ref('')
const activeCategory = ref('all')

const categories = [
  { id: 'all', name: '全部' },
  { id: 'ai-coding', name: 'AI 协作开发' },
  { id: 'ai-dialogue', name: 'AI 深度对话' },
  { id: 'team', name: '团队转型' },
  { id: 'tools', name: '工具与实践' },
  { id: 'thoughts', name: '思考' }
]

const posts = ref([
  {
    id: -2,
    title: 'AI 规划能力与自我反思机制：一次深度对话',
    excerpt: '在开发 AI 协作开发框架过程中，关于 AI 如何思考、规划和自我校验的探讨。AI 自己是怎么做规划的？',
    category: 'AI 深度对话',
    categoryId: 'ai-dialogue',
    date: '2024年12月19日',
    link: '/blog/ai-planning-and-reflection',
    isInternal: true,
    isNew: true
  },
  {
    id: -1,
    title: '从 AI Coding Template 到人机协同 Workflow',
    excerpt: '我们是如何把 AI 变成"可执行的同事"的 —— 把 AI 纳入一个可复制、可扩展的工作流程里。',
    category: 'AI 协作开发',
    categoryId: 'ai-coding',
    date: '2024年12月',
    link: '/blog/ai-coding-template-to-workflow',
    isInternal: true
  },
  {
    id: 0,
    title: 'AI 的三不渡',
    excerpt: '写给 AI Coding 时代的先行者 —— 无缘者不渡、无信者不渡、无愿者不渡。AI 将渡的是愿意自渡的人。',
    category: '思考',
    categoryId: 'thoughts',
    date: '2024年12月',
    link: '/blog/ai-three-non-deliverances',
    isInternal: true
  },
  {
    id: 1,
    title: '为什么传统开发模式在 AI 时代失效了',
    excerpt: '探讨 AI coding 带来的三个核心变化：编码成本趋零、瓶颈转移、协作模式重构。',
    category: '团队转型',
    categoryId: 'team',
    date: '2024年12月',
    link: 'https://ai-coding-org.vercel.app/why-change'
  },
  {
    id: 2,
    title: 'AI Product Engineer：新时代的核心角色',
    excerpt: '详解 AI PE 的职责、能力要求和工作方式，为什么它是连接需求和实现的关键。',
    category: 'AI 协作开发',
    categoryId: 'ai-coding',
    date: '2024年12月',
    link: 'https://ai-coding-org.vercel.app/deep-dive/ai-pe'
  },
  {
    id: 3,
    title: 'Spec 驱动开发：让 AI 更好地理解需求',
    excerpt: '如何写出 AI 能理解的结构化需求文档，提高 AI 生成代码的质量。',
    category: '工具与实践',
    categoryId: 'tools',
    date: '2024年12月',
    link: 'https://ai-coding-org.vercel.app/deep-dive/ai-pe-spec-template'
  },
  {
    id: 4,
    title: '架构师在 AI 时代的新定位',
    excerpt: '从写代码到定规则，架构师如何成为 AI 开发的"规则制定者"。',
    category: '团队转型',
    categoryId: 'team',
    date: '2024年12月',
    link: 'https://ai-coding-org.vercel.app/deep-dive/architect-kickoff'
  }
])

const filteredPosts = computed(() => {
  if (activeCategory.value === 'all') return posts.value
  return posts.value.filter(p => p.categoryId === activeCategory.value)
})

const handleSubscribe = () => {
  ElMessage.info('订阅功能即将开通，敬请期待！')
  email.value = ''
}
</script>

<style scoped>
.page-hero {
  background: var(--gradient-primary);
  color: white;
  padding: 140px 0 80px;
  text-align: center;
}

.page-hero h1 {
  color: white;
  font-size: var(--font-size-5xl);
  margin-bottom: var(--spacing-md);
}

.page-hero p {
  font-size: var(--font-size-xl);
  opacity: 0.9;
}

/* Featured Post */
.featured-post {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  background: white;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--spacing-3xl);
}

.post-image {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.placeholder-image {
  height: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  color: white;
  opacity: 0.5;
}

.placeholder-image.small {
  min-height: 200px;
  font-size: 48px;
}

.featured-icon {
  height: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 120px;
}

.post-badge {
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
}

.post-badge.new {
  background: var(--color-accent-500);
  color: white;
}

.post-content {
  padding: var(--spacing-2xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.post-meta {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.post-category {
  background: rgba(102, 126, 234, 0.1);
  color: var(--color-primary);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
}

.post-date {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
}

.post-content h2 {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-md);
}

.post-content > p {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-xl);
}

/* Categories */
.categories {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
}

.category-btn {
  background: white;
  border: 1px solid #e0e0e0;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.category-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.category-btn.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
}

/* Posts Grid */
.posts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
}

.post-card {
  background: white;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-base);
  transition: all var(--transition-base);
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.post-card-image {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%);
}

.post-card-content {
  padding: var(--spacing-xl);
}

.post-card h3 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);
}

.post-card p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--color-primary);
  font-weight: 500;
  font-size: var(--font-size-sm);
}

/* Coming Soon Notice */
.coming-soon-notice {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  padding: var(--spacing-xl);
  border-radius: var(--radius-xl);
  margin-bottom: var(--spacing-3xl);
  border: 2px dashed rgba(102, 126, 234, 0.3);
}

.coming-soon-notice .el-icon {
  font-size: 32px;
  color: var(--color-primary);
}

.coming-soon-notice h4 {
  margin-bottom: var(--spacing-xs);
}

.coming-soon-notice p {
  color: var(--color-text-secondary);
  margin: 0;
}

/* Newsletter */
.newsletter {
  background: var(--color-bg-dark);
  color: white;
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  text-align: center;
}

.newsletter h3 {
  color: white;
  margin-bottom: var(--spacing-sm);
}

.newsletter > p {
  opacity: 0.8;
  margin-bottom: var(--spacing-xl);
}

.newsletter-form {
  display: flex;
  gap: var(--spacing-md);
  max-width: 400px;
  margin: 0 auto var(--spacing-md);
}

.newsletter-form .el-input {
  flex: 1;
}

.newsletter-note {
  font-size: var(--font-size-sm);
  opacity: 0.5;
  margin: 0;
}

@media (max-width: 768px) {
  .featured-post {
    grid-template-columns: 1fr;
  }

  .posts-grid {
    grid-template-columns: 1fr;
  }

  .newsletter-form {
    flex-direction: column;
  }
}
</style>
