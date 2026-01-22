<template>
  <div class="article-page">
    <!-- Article Header -->
    <header class="article-header">
      <div class="container">
        <div class="article-meta">
          <span class="category">方法论</span>
          <span class="date">2026年1月</span>
          <span class="read-time">8 分钟阅读</span>
        </div>
        <h1>Spec-Driven 开发：让 AI 帮你从需求到代码</h1>
        <p class="subtitle">整理自胥老师的实战经验分享</p>
      </div>
    </header>

    <!-- Article Content -->
    <article class="article-content">
      <div class="container container-sm">
        <!-- 开场白 -->
        <p>大多数开发者的日常：产品经理丢来一句话需求，你边猜边写，写完被说"这不是我要的"，改，再改，再再改。</p>

        <p>有没有一种方式，能在写代码之前就把事情想清楚，让 AI 帮你生成的代码一次就对？</p>

        <p>有。叫 <strong>Spec-Driven 开发</strong>。</p>

        <hr />

        <h2>什么是 Spec-Driven？</h2>

        <p>Spec 是 Specification 的缩写，意思是「规格说明」。</p>

        <blockquote class="highlight-quote">
          <strong>Spec-Driven 开发 = 先写清楚「要做什么」，再让 AI 帮你做。</strong>
        </blockquote>

        <p>听起来像废话？区别在于「写清楚」的程度：</p>

        <div class="comparison-table">
          <div class="comparison-row header">
            <div class="comparison-cell">传统方式</div>
            <div class="comparison-cell highlight">Spec-Driven</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">"做一个用户登录"</div>
            <div class="comparison-cell">登录方式、错误处理、安全要求、边界情况全部定义清楚</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">边写边想</div>
            <div class="comparison-cell">想清楚再写</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">AI 猜你要什么</div>
            <div class="comparison-cell">AI 按规格执行</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">反复修改</div>
            <div class="comparison-cell">一次到位</div>
          </div>
        </div>

        <p><strong>核心理念：把模糊的想法变成精确的规格，AI 执行规格比猜测意图靠谱得多。</strong></p>

        <hr />

        <h2>胥老师的实战：从零到 150 万字 Spec，只要 2 天</h2>

        <p>传统产品团队从需求到交付开发的 spec，通常需要 4-6 个月。</p>

        <div class="stats-box">
          <div class="stat-item">
            <span class="stat-number">2 天</span>
            <span class="stat-label">完成 150 万字完整 spec</span>
          </div>
          <div class="stat-vs">vs</div>
          <div class="stat-item">
            <span class="stat-number">4-6 个月</span>
            <span class="stat-label">传统团队所需时间</span>
          </div>
        </div>

        <p>怎么做到的？靠一套<strong>四层文档体系</strong>。</p>

        <hr />

        <h2>四层文档体系</h2>

        <!-- Layer 1 -->
        <div class="layer-card">
          <div class="layer-header">
            <span class="layer-number">1</span>
            <h3>想清楚「为什么做」</h3>
          </div>
          <div class="layer-content">
            <p>在写任何 spec 之前，先回答：</p>
            <ul>
              <li><strong>最佳实践是什么？</strong> 行业标杆是怎么做的？</li>
              <li><strong>我的特色创新是什么？</strong> 哪里要跟他们一样，哪里要不一样？</li>
            </ul>
            <p class="layer-output">产出：<strong>决策</strong></p>
            <div class="tip-box">
              <span class="tip-label">💡 胥老师的经验</span>
              <p>基本原理、所有创新，都是有最佳实践的，轮子是有人发明过的。大模型大大加速了调研这个过程。</p>
            </div>
          </div>
        </div>

        <!-- Layer 2 -->
        <div class="layer-card">
          <div class="layer-header">
            <span class="layer-number">2</span>
            <h3>想清楚「整体怎么搭」</h3>
          </div>
          <div class="layer-content">
            <p>确定技术方向和系统边界：</p>
            <ul>
              <li>前后端分离还是单体？</li>
              <li>核心模块怎么划分？</li>
              <li>模块之间怎么通信？</li>
            </ul>
            <p class="layer-output">产出：<strong>架构设计文档</strong></p>
            <div class="tip-box">
              <span class="tip-label">💡 胥老师的经验</span>
              <p>微服务天生是很好的垂直切分方式。他实际并行推进 12 个任务，其中一个是 3 个微服务之间的用户集成——如果没有已经完成的底层微服务，这种复杂集成根本想不清楚。</p>
            </div>
          </div>
        </div>

        <!-- Layer 3 -->
        <div class="layer-card">
          <div class="layer-header">
            <span class="layer-number">3</span>
            <h3>建立「全景知识库」</h3>
          </div>
          <div class="layer-content">
            <p>把业务逻辑完整地写下来：</p>
            <ul>
              <li>有哪些用户角色？</li>
              <li>有哪些核心流程？</li>
              <li>有哪些业务规则？</li>
            </ul>
            <p class="layer-output">产出：<strong>全景知识文档</strong>（AI 执行任务时的上下文）</p>
            <div class="tip-box">
              <span class="tip-label">💡 胥老师的经验</span>
              <p>文件名比内容更重要。需求变更时要更新所有相关文档，靠 AI 搜索容易漏，靠<strong>文件命名规范</strong>建立显式关联更可靠。</p>
            </div>
          </div>
        </div>

        <!-- Layer 4 -->
        <div class="layer-card">
          <div class="layer-header">
            <span class="layer-number">4</span>
            <h3>生成「可执行 Spec」</h3>
          </div>
          <div class="layer-content">
            <p>把全景知识拆解成可以直接交给 AI 执行的任务规格。</p>
            <p class="layer-output">产出：<strong>分阶段执行开发文档</strong>（可以直接喂给 Claude Code 生成代码）</p>
            <div class="tip-box">
              <span class="tip-label">💡 胥老师的经验</span>
              <p>不需要写到 Given-When-Then 那么细。AI 需要的是「对齐信息」——大量上下文压缩后的接口。随着 LLM 能力提升，压缩层次会越来越深。</p>
            </div>
          </div>
        </div>

        <hr />

        <h2>三个关键洞察</h2>

        <!-- Insight 1 -->
        <div class="insight-card">
          <div class="insight-number">一</div>
          <div class="insight-content">
            <h3>先分类，再选方法</h3>
            <p>开始之前先问自己：</p>
            <ul>
              <li><strong>项目型还是产品型？</strong></li>
              <li><strong>瀑布还是敏捷？</strong></li>
            </ul>
            <p>胥老师的实践是「<strong>前半程薄瀑布，后半程严格敏捷</strong>」：交付前把架构想清楚（敏捷迭代出不来完整架构），交付后严格敏捷响应变化。</p>
          </div>
        </div>

        <!-- Insight 2 -->
        <div class="insight-card">
          <div class="insight-number">二</div>
          <div class="insight-content">
            <h3>要「对齐」，不要「详细」</h3>
            <p>传统需求文档追求「详细」。AI 协作时代追求「<strong>对齐</strong>」——达成预期共识的最小必要信息。</p>
            <p>大模型的能力足够好时，能从对齐信息自动展开成开发代码。<strong>质量控制的重心从「写得详细」变成「对得准」。</strong></p>
          </div>
        </div>

        <!-- Insight 3 -->
        <div class="insight-card">
          <div class="insight-number">三</div>
          <div class="insight-content">
            <h3>最大的认知转变</h3>
            <blockquote>
              从传统大模型转到依赖大模型帮你判断「自己是否用好了」，是最大的认知差距。
            </blockquote>
            <p>AI 是你思考质量的镜子。当 spec 写得足够清晰时，AI 一次就能生成正确代码。如果总是需要大改，问题往往不在 AI，在 spec 不够清晰。</p>
          </div>
        </div>

        <hr />

        <h2>总结</h2>

        <div class="conclusion-box">
          <p class="conclusion-main">Spec-Driven 的本质：<strong>把「想清楚」这件事工程化</strong>。</p>
          <p>四层文档体系让「想清楚」变得有章可循，配合 AI 协作，把 4-6 个月的工作压缩到 2 天。</p>
          <p class="conclusion-highlight">效率差距不在工具，在方法论。</p>
        </div>

      </div>
    </article>

    <!-- Article Footer -->
    <footer class="article-footer">
      <div class="container container-sm">
        <div class="source-info">
          <p>整理自胥老师群聊分享 · 2026-01-17</p>
        </div>

        <div class="share-section">
          <p>觉得有启发？分享给同行者</p>
          <div class="share-buttons">
            <button class="share-btn" @click="copyLink">
              <el-icon><Link /></el-icon>
              复制链接
            </button>
          </div>
        </div>

        <div class="back-link">
          <router-link to="/blog">
            <el-icon><ArrowLeft /></el-icon>
            返回博客
          </router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { Link, ArrowLeft } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href)
  ElMessage.success('链接已复制')
}
</script>

<style scoped>
.article-page {
  background: var(--color-bg-page);
}

/* Header */
.article-header {
  background: var(--gradient-primary);
  color: white;
  padding: 140px 0 80px;
  text-align: center;
}

.article-meta {
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-6);
  font-size: var(--font-size-sm);
  opacity: 0.9;
}

.article-meta .category {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: var(--radius-full);
}

.article-header h1 {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  margin-bottom: var(--spacing-4);
  line-height: 1.2;
}

.article-header .subtitle {
  font-size: var(--font-size-lg);
  opacity: 0.9;
}

/* Content */
.article-content {
  padding: var(--spacing-16) 0;
}

.article-content p {
  color: var(--color-text);
  line-height: 1.9;
  margin-bottom: var(--spacing-6);
}

.article-content h2 {
  color: var(--color-text);
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin: var(--spacing-12) 0 var(--spacing-6);
}

.article-content ul {
  margin-bottom: var(--spacing-6);
  padding-left: var(--spacing-6);
}

.article-content li {
  color: var(--color-text);
  line-height: 1.8;
  margin-bottom: var(--spacing-2);
}

.article-content hr {
  border: none;
  height: 1px;
  background: var(--color-border);
  margin: var(--spacing-12) 0;
}

/* Highlight Quote */
.highlight-quote {
  background: var(--color-bg-subtle);
  border-left: 4px solid var(--color-primary);
  padding: var(--spacing-6);
  margin: var(--spacing-8) 0;
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
}

.highlight-quote strong {
  color: var(--color-text);
}

/* Comparison Table */
.comparison-table {
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin: var(--spacing-8) 0;
  border: 1px solid var(--color-border);
}

.comparison-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.comparison-row.header {
  background: var(--color-bg-subtle);
}

.comparison-row.header .comparison-cell {
  font-weight: 600;
  color: var(--color-text);
}

.comparison-row.header .comparison-cell.highlight {
  color: var(--color-primary);
}

.comparison-cell {
  padding: var(--spacing-4);
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-secondary);
}

.comparison-row:last-child .comparison-cell {
  border-bottom: none;
}

.comparison-cell:first-child {
  border-right: 1px solid var(--color-border);
}

.comparison-cell:last-child {
  color: var(--color-text);
}

/* Stats Box */
.stats-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-8);
  background: var(--color-bg-card);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  margin: var(--spacing-8) 0;
  border: 1px solid var(--color-border);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-number {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-primary);
}

.stat-label {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-1);
}

.stat-vs {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  font-weight: 500;
}

/* Layer Cards */
.layer-card {
  background: var(--color-bg-card);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-6);
  border: 1px solid var(--color-border);
}

.layer-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-4);
}

.layer-number {
  width: 36px;
  height: 36px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.layer-header h3 {
  color: var(--color-text);
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin: 0;
}

.layer-content p {
  margin-bottom: var(--spacing-4);
}

.layer-content ul {
  margin-bottom: var(--spacing-4);
}

.layer-output {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

/* Tip Box */
.tip-box {
  background: var(--color-bg-subtle);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
  margin-top: var(--spacing-4);
}

.tip-label {
  font-weight: 600;
  color: var(--color-text);
  display: block;
  margin-bottom: var(--spacing-2);
}

.tip-box p {
  margin-bottom: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

/* Insight Cards */
.insight-card {
  display: flex;
  gap: var(--spacing-4);
  background: var(--color-bg-card);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-6);
  border: 1px solid var(--color-border);
}

.insight-number {
  width: 40px;
  height: 40px;
  background: var(--color-bg-subtle);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--color-primary);
  font-size: var(--font-size-lg);
  flex-shrink: 0;
}

.insight-content h3 {
  color: var(--color-text);
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-3);
}

.insight-content p {
  margin-bottom: var(--spacing-3);
}

.insight-content p:last-child {
  margin-bottom: 0;
}

.insight-content ul {
  margin: var(--spacing-2) 0;
}

.insight-content blockquote {
  border-left: 3px solid var(--color-primary);
  padding-left: var(--spacing-4);
  margin: var(--spacing-4) 0;
  color: var(--color-text);
  font-style: italic;
}

/* Conclusion */
.conclusion-box {
  background: var(--color-bg-subtle);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  text-align: center;
}

.conclusion-main {
  font-size: var(--font-size-lg);
  color: var(--color-text);
}

.conclusion-highlight {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0;
}

/* Footer */
.article-footer {
  background: var(--color-bg-card);
  padding: var(--spacing-12) 0;
  border-top: 1px solid var(--color-border);
}

.source-info {
  text-align: center;
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-8);
}

.share-section {
  text-align: center;
  margin-bottom: var(--spacing-8);
}

.share-section p {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-4);
}

.share-buttons {
  display: flex;
  justify-content: center;
  gap: var(--spacing-3);
}

.share-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-4);
  background: var(--color-bg-subtle);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.2s;
}

.share-btn:hover {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.back-link {
  text-align: center;
}

.back-link a {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}

.back-link a:hover {
  color: var(--color-primary);
}

/* Responsive */
@media (max-width: 640px) {
  .article-header {
    padding: 100px 0 60px;
  }

  .article-header h1 {
    font-size: var(--font-size-2xl);
  }

  .article-meta {
    flex-wrap: wrap;
    gap: var(--spacing-2);
  }

  .stats-box {
    flex-direction: column;
    gap: var(--spacing-4);
  }

  .stat-vs {
    transform: rotate(90deg);
  }

  .insight-card {
    flex-direction: column;
  }

  .comparison-row {
    grid-template-columns: 1fr;
  }

  .comparison-cell:first-child {
    border-right: none;
    border-bottom: 1px solid var(--color-border);
  }
}
</style>
