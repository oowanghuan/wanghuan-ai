<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-icon">W</span>
            <span class="logo-text">Wang Huan</span>
          </div>
          <p class="footer-desc">
            探索 AI 时代的开发方式，分享实战经验与产品。
          </p>
        </div>

        <div class="footer-links">
          <div class="footer-column">
            <h4>导航</h4>
            <router-link to="/">首页</router-link>
            <router-link to="/products">产品</router-link>
            <router-link to="/blog">博客</router-link>
            <router-link to="/about">关于</router-link>
          </div>

          <div class="footer-column">
            <h4>项目</h4>
            <a href="https://ai-coding-org.vercel.app" target="_blank">AI 团队转型蓝图</a>
            <span class="coming-soon">AI 开发分包平台 (即将推出)</span>
            <span class="coming-soon">数字分身 (规划中)</span>
          </div>

          <div class="footer-column">
            <h4>联系</h4>
            <a href="mailto:hi@wanghuan.ai">hi@wanghuan.ai</a>
            <a href="https://github.com/oowanghuan" target="_blank">GitHub</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Wang Huan. All rights reserved.</p>
        <p class="built-with">Built with AI + Vue.js</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: var(--color-bg-dark);
  color: white;
  padding: var(--spacing-3xl) 0 var(--spacing-xl);
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-3xl);
  padding-bottom: var(--spacing-2xl);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand .logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-weight: 700;
  font-size: var(--font-size-xl);
  color: white;
  margin-bottom: var(--spacing-md);
}

.footer-brand .logo-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  border-radius: var(--radius-lg);
  font-weight: 700;
}

.footer-desc {
  color: rgba(255, 255, 255, 0.7);
  max-width: 300px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.footer-column h4 {
  color: white;
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-md);
}

.footer-column a,
.footer-column .coming-soon {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: var(--spacing-xs) 0;
  transition: color var(--transition-fast);
}

.footer-column a:hover {
  color: white;
}

.footer-column .coming-soon {
  font-style: italic;
  opacity: 0.5;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-xl);
  color: rgba(255, 255, 255, 0.5);
  font-size: var(--font-size-sm);
}

.built-with {
  font-style: italic;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .footer-bottom {
    flex-direction: column;
    gap: var(--spacing-sm);
    text-align: center;
  }
}
</style>
