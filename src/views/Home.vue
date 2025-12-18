<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="container hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="greeting">Hi, I'm</span>
            <span class="name">Wang Huan</span>
          </h1>
          <p class="hero-subtitle">
            AI 时代的探索者与实践者
          </p>
          <p class="hero-desc">
            我相信 AI 正在重新定义软件开发的方式。在这里，我分享与 AI 协作开发的实战经验、
            探索 AI 驱动团队转型的最佳实践，以及我正在构建的产品。
          </p>
          <div class="hero-actions">
            <router-link to="/products" class="btn btn-primary">
              <el-icon><Box /></el-icon>
              查看产品
            </router-link>
            <router-link to="/blog" class="btn btn-outline">
              <el-icon><Document /></el-icon>
              阅读博客
            </router-link>
          </div>
        </div>
        <div class="hero-visual">
          <div class="avatar-container">
            <div class="avatar">
              <span>W</span>
            </div>
            <div class="orbit orbit-1">
              <span class="orbit-icon">AI</span>
            </div>
            <div class="orbit orbit-2">
              <span class="orbit-icon">Code</span>
            </div>
            <div class="orbit orbit-3">
              <span class="orbit-icon">Build</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What I Do Section -->
    <section class="section what-i-do">
      <div class="container">
        <div class="section-title">
          <h2>我在做什么</h2>
          <p>探索 AI 与软件开发的结合，构建实用的产品和方法论</p>
        </div>

        <div class="cards-grid">
          <div class="card feature-card">
            <div class="card-icon">
              <el-icon><Cpu /></el-icon>
            </div>
            <h3>AI 协作开发</h3>
            <p>
              每天与 AI（Claude、GPT）一起写代码，探索最高效的人机协作模式，
              从 Prompt 工程到代码审查的完整工作流。
            </p>
          </div>

          <div class="card feature-card">
            <div class="card-icon">
              <el-icon><DataAnalysis /></el-icon>
            </div>
            <h3>团队转型研究</h3>
            <p>
              研究 AI 时代开发团队的组织结构变革，定义新的角色分工和协作方式，
              帮助团队平滑过渡到 AI 驱动模式。
            </p>
          </div>

          <div class="card feature-card">
            <div class="card-icon">
              <el-icon><Opportunity /></el-icon>
            </div>
            <h3>产品构建</h3>
            <p>
              将研究成果转化为实际产品，包括团队转型指南、AI 开发工具、
              以及未来的 AI 开发分包平台。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Product -->
    <section class="section featured-product">
      <div class="container">
        <div class="featured-content">
          <div class="featured-info">
            <span class="featured-label">Featured Product</span>
            <h2>AI 时代团队转型蓝图</h2>
            <p>
              一份完整的指南，帮助开发团队理解 AI coding 带来的变革，
              重新定义角色分工、工作流程和协作方式。
            </p>
            <ul class="featured-points">
              <li>
                <el-icon><Check /></el-icon>
                六大核心岗位定义与职责
              </li>
              <li>
                <el-icon><Check /></el-icon>
                Spec 驱动的开发流程
              </li>
              <li>
                <el-icon><Check /></el-icon>
                RACI 矩阵与协作规范
              </li>
              <li>
                <el-icon><Check /></el-icon>
                实战案例与模板库
              </li>
            </ul>
            <a href="https://ai-coding-org.vercel.app" target="_blank" class="btn btn-primary">
              访问项目
              <el-icon><TopRight /></el-icon>
            </a>
          </div>
          <div class="featured-preview">
            <div class="preview-window">
              <div class="window-header">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <div class="preview-content">
                <div class="preview-sidebar">
                  <div class="sidebar-item active"></div>
                  <div class="sidebar-item"></div>
                  <div class="sidebar-item"></div>
                  <div class="sidebar-item"></div>
                </div>
                <div class="preview-main">
                  <div class="preview-title"></div>
                  <div class="preview-text"></div>
                  <div class="preview-text short"></div>
                  <div class="preview-cards">
                    <div class="preview-card"></div>
                    <div class="preview-card"></div>
                    <div class="preview-card"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Coming Soon -->
    <section class="section coming-soon-section">
      <div class="container">
        <div class="section-title">
          <h2>即将推出</h2>
          <p>正在规划和开发中的项目</p>
        </div>

        <div class="coming-soon-grid">
          <div class="coming-soon-card">
            <div class="coming-soon-icon">
              <el-icon><Connection /></el-icon>
            </div>
            <h3>AI 开发分包平台</h3>
            <p>连接 AI 开发者与需求方，让 AI 协作开发成为一种服务</p>
            <span class="status">规划中</span>
          </div>

          <div class="coming-soon-card">
            <div class="coming-soon-icon">
              <el-icon><ChatDotRound /></el-icon>
            </div>
            <h3>数字分身</h3>
            <p>基于我的文章和理念训练的 AI 助手，可以回答关于 AI 开发的问题</p>
            <span class="status">探索中</span>
          </div>

          <div class="coming-soon-card">
            <div class="coming-soon-icon">
              <el-icon><UserFilled /></el-icon>
            </div>
            <h3>社区讨论</h3>
            <p>一个讨论 AI 时代开发实践的社区，分享经验、解答疑惑</p>
            <span class="status">规划中</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>一起探索 AI 开发的未来</h2>
          <p>如果你也在实践 AI 协作开发，欢迎交流分享</p>
          <a href="mailto:hi@wanghuan.ai" class="btn btn-primary btn-large">
            <el-icon><Message /></el-icon>
            联系我
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  Box,
  Document,
  Cpu,
  DataAnalysis,
  Opportunity,
  Check,
  TopRight,
  Connection,
  ChatDotRound,
  UserFilled,
  Message
} from '@element-plus/icons-vue'
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-hero);
  opacity: 0.05;
  z-index: -1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.hero-title {
  font-size: 64px;
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
}

.hero-title .greeting {
  display: block;
  font-size: 24px;
  font-weight: 400;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-sm);
}

.hero-title .name {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: var(--font-size-2xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
}

.hero-desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
}

/* Hero Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-container {
  position: relative;
  width: 300px;
  height: 300px;
}

.avatar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-weight: 700;
  color: white;
  box-shadow: var(--shadow-xl);
}

.orbit {
  position: absolute;
  border: 2px dashed rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  animation: orbit 20s linear infinite;
}

.orbit-1 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.orbit-2 {
  width: 260px;
  height: 260px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-duration: 25s;
  animation-direction: reverse;
}

.orbit-3 {
  width: 320px;
  height: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-duration: 30s;
}

.orbit-icon {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--gradient-primary);
  color: white;
  padding: 8px 16px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

@keyframes orbit {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

/* What I Do Section */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.feature-card {
  text-align: center;
  padding: var(--spacing-2xl);
}

.card-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--spacing-lg);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: var(--color-primary);
}

.feature-card h3 {
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-xl);
}

.feature-card p {
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* Featured Product */
.featured-product {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
}

.featured-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.featured-label {
  display: inline-block;
  background: var(--gradient-primary);
  color: white;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
}

.featured-info h2 {
  margin-bottom: var(--spacing-md);
}

.featured-info > p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xl);
}

.featured-points {
  list-style: none;
  margin-bottom: var(--spacing-xl);
}

.featured-points li {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) 0;
  color: var(--color-text-secondary);
}

.featured-points .el-icon {
  color: var(--color-primary);
}

/* Preview Window */
.preview-window {
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
}

.window-header {
  display: flex;
  gap: 8px;
  padding: var(--spacing-md);
  background: #f5f5f5;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f57; }
.dot.yellow { background: #febc2e; }
.dot.green { background: #28c840; }

.preview-content {
  display: flex;
  height: 300px;
}

.preview-sidebar {
  width: 80px;
  background: var(--color-bg-dark);
  padding: var(--spacing-md);
}

.sidebar-item {
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-base);
  margin-bottom: var(--spacing-sm);
}

.sidebar-item.active {
  background: var(--color-primary);
}

.preview-main {
  flex: 1;
  padding: var(--spacing-lg);
}

.preview-title {
  height: 24px;
  width: 60%;
  background: #e0e0e0;
  border-radius: var(--radius-base);
  margin-bottom: var(--spacing-md);
}

.preview-text {
  height: 12px;
  background: #f0f0f0;
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-sm);
}

.preview-text.short {
  width: 80%;
}

.preview-cards {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
}

.preview-card {
  flex: 1;
  height: 100px;
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
  border-radius: var(--radius-base);
}

/* Coming Soon Section */
.coming-soon-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.coming-soon-card {
  background: white;
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-base);
  text-align: center;
  position: relative;
  border: 2px dashed rgba(102, 126, 234, 0.3);
}

.coming-soon-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto var(--spacing-lg);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: var(--color-primary);
}

.coming-soon-card h3 {
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-lg);
}

.coming-soon-card p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-md);
}

.coming-soon-card .status {
  display: inline-block;
  background: rgba(102, 126, 234, 0.1);
  color: var(--color-primary);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
}

/* CTA Section */
.cta-section {
  background: var(--gradient-primary);
  color: white;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  color: white;
  margin-bottom: var(--spacing-md);
}

.cta-content p {
  opacity: 0.9;
  margin-bottom: var(--spacing-xl);
  font-size: var(--font-size-lg);
}

.cta-section .btn-primary {
  background: white;
  color: var(--color-primary);
}

.btn-large {
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: var(--font-size-lg);
}

/* Responsive */
@media (max-width: 968px) {
  .hero-content,
  .featured-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-title {
    font-size: 48px;
  }

  .hero-desc {
    max-width: 100%;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-visual {
    order: -1;
  }

  .avatar-container {
    width: 250px;
    height: 250px;
  }

  .cards-grid,
  .coming-soon-grid {
    grid-template-columns: 1fr;
  }

  .featured-preview {
    order: -1;
  }
}
</style>
