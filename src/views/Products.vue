<template>
  <div class="products-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>产品</h1>
        <p>我正在构建的 AI 时代开发工具和平台</p>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="section">
      <div class="container">
        <!-- Live Products -->
        <div class="products-section">
          <h2 class="section-label">
            <span class="dot live"></span>
            已上线
          </h2>

          <div class="product-card featured">
            <div class="product-content">
              <div class="product-header">
                <div class="product-icon">
                  <el-icon><Promotion /></el-icon>
                </div>
                <span class="product-status live">Live</span>
              </div>
              <h3>AI 时代团队转型蓝图</h3>
              <p class="product-desc">
                一份完整的指南，帮助开发团队理解 AI coding 带来的变革，重新定义角色分工、工作流程和协作方式。
                包含六大核心岗位定义、Spec 驱动开发流程、RACI 矩阵和实战模板。
              </p>
              <div class="product-features">
                <span class="feature-tag">Vue.js</span>
                <span class="feature-tag">Team Guide</span>
                <span class="feature-tag">Free</span>
              </div>
              <div class="product-actions">
                <a href="https://ai-coding-org.vercel.app" target="_blank" class="btn btn-primary">
                  访问项目
                  <el-icon><TopRight /></el-icon>
                </a>
                <a href="https://github.com/oowanghuan/ai-coding-org" target="_blank" class="btn btn-outline">
                  <el-icon><Link /></el-icon>
                  GitHub
                </a>
              </div>
            </div>
            <div class="product-preview">
              <img src="https://via.placeholder.com/500x300/667eea/ffffff?text=AI+Team+Blueprint" alt="AI 团队转型蓝图" />
            </div>
          </div>
        </div>

        <!-- Coming Soon -->
        <div class="products-section">
          <h2 class="section-label">
            <span class="dot coming"></span>
            即将推出
          </h2>

          <div class="products-grid">
            <div class="product-card mini">
              <div class="product-header">
                <div class="product-icon">
                  <el-icon><Connection /></el-icon>
                </div>
                <span class="product-status coming">Coming Soon</span>
              </div>
              <h3>AI 开发分包平台</h3>
              <p class="product-desc">
                连接 AI 开发者与需求方的平台。让精通 AI 协作开发的开发者可以更高效地接单，
                让需求方可以找到擅长 AI 开发的人才。
              </p>
              <div class="product-features">
                <span class="feature-tag">Marketplace</span>
                <span class="feature-tag">AI Developers</span>
              </div>
            </div>

            <div class="product-card mini">
              <div class="product-header">
                <div class="product-icon">
                  <el-icon><ChatDotRound /></el-icon>
                </div>
                <span class="product-status coming">Exploring</span>
              </div>
              <h3>数字分身</h3>
              <p class="product-desc">
                基于我的文章、理念和开发经验训练的 AI 助手。
                可以回答关于 AI 协作开发、团队转型、Prompt 工程等问题。
              </p>
              <div class="product-features">
                <span class="feature-tag">AI Assistant</span>
                <span class="feature-tag">RAG</span>
              </div>
            </div>

            <div class="product-card mini">
              <div class="product-header">
                <div class="product-icon">
                  <el-icon><ChatLineSquare /></el-icon>
                </div>
                <span class="product-status coming">Planning</span>
              </div>
              <h3>AI 开发社区</h3>
              <p class="product-desc">
                一个讨论 AI 时代开发实践的社区。分享经验、解答疑惑、探索最佳实践，
                共同推动 AI 协作开发的发展。
              </p>
              <div class="product-features">
                <span class="feature-tag">Community</span>
                <span class="feature-tag">Discussion</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Ideas -->
        <div class="products-section">
          <h2 class="section-label">
            <span class="dot idea"></span>
            想法库
          </h2>

          <div class="ideas-list">
            <div class="idea-item">
              <el-icon><Aim /></el-icon>
              <span>AI Pair Programming 工具 - 更好的人机协作 IDE 插件</span>
            </div>
            <div class="idea-item">
              <el-icon><Aim /></el-icon>
              <span>Spec 生成器 - 从需求文档自动生成结构化 Spec</span>
            </div>
            <div class="idea-item">
              <el-icon><Aim /></el-icon>
              <span>AI Code Review - 自动化代码审查和改进建议</span>
            </div>
            <div class="idea-item">
              <el-icon><Aim /></el-icon>
              <span>Prompt 模板市场 - 共享和发现高质量开发 Prompt</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>有想法想要合作？</h2>
          <p>如果你对这些产品感兴趣，或者有其他合作想法，欢迎联系我</p>
          <a href="mailto:hi@wanghuan.ai" class="btn btn-primary">
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
  Promotion,
  TopRight,
  Link,
  Connection,
  ChatDotRound,
  ChatLineSquare,
  Aim,
  Message
} from '@element-plus/icons-vue'
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

.products-section {
  margin-bottom: var(--spacing-3xl);
}

.section-label {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xl);
  color: var(--color-text-secondary);
}

.section-label .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot.live { background: #28c840; }
.dot.coming { background: #febc2e; }
.dot.idea { background: var(--color-primary); }

.product-card {
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-base);
  overflow: hidden;
  transition: all var(--transition-base);
}

.product-card:hover {
  box-shadow: var(--shadow-lg);
}

.product-card.featured {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.product-content {
  padding: var(--spacing-2xl);
}

.product-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-lg);
}

.product-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: var(--color-primary);
}

.product-status {
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
}

.product-status.live {
  background: rgba(40, 200, 64, 0.1);
  color: #28c840;
}

.product-status.coming {
  background: rgba(254, 188, 46, 0.1);
  color: #d9a100;
}

.product-card h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-md);
}

.product-desc {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
}

.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
}

.feature-tag {
  background: rgba(102, 126, 234, 0.1);
  color: var(--color-primary);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 500;
}

.product-actions {
  display: flex;
  gap: var(--spacing-md);
}

.product-preview {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl);
}

.product-preview img {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.product-card.mini {
  padding: var(--spacing-xl);
}

.product-card.mini h3 {
  font-size: var(--font-size-xl);
}

.ideas-list {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-base);
}

.idea-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  color: var(--color-text-secondary);
  border-bottom: 1px solid #f0f0f0;
}

.idea-item:last-child {
  border-bottom: none;
}

.idea-item .el-icon {
  color: var(--color-primary);
}

.cta-section {
  background: var(--color-bg-dark);
  color: white;
}

.cta-content {
  text-align: center;
}

.cta-content h2 {
  color: white;
  margin-bottom: var(--spacing-md);
}

.cta-content p {
  opacity: 0.8;
  margin-bottom: var(--spacing-xl);
}

@media (max-width: 968px) {
  .product-card.featured {
    grid-template-columns: 1fr;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .product-preview {
    order: -1;
  }
}
</style>
