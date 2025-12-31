<template>
  <div class="article-page">
    <!-- Article Header -->
    <header class="article-header">
      <div class="container">
        <div class="article-meta">
          <span class="category">AI 编程观察</span>
          <span class="date">2024年12月</span>
          <span class="read-time">8 分钟阅读</span>
        </div>
        <h1>专业软件开发者不靠感觉，靠掌控</h1>
        <p class="subtitle">—— Hacker News 热议：AI 编程时代，开发者的角色正在转变</p>
      </div>
    </header>

    <!-- Article Content -->
    <article class="article-content">
      <div class="container container-sm">
        <!-- 帖子背景 -->
        <div class="info-box">
          <p><strong>原始来源：</strong><a href="https://news.ycombinator.com/item?id=46437391" target="_blank">Hacker News #46437391</a></p>
          <p><strong>核心观点：</strong>Professional software developers don't vibe, they control</p>
          <p><strong>讨论背景：</strong>一篇关于 AI 编程代理（Agentic coding）和开发者实际工作方式的研究/观察</p>
        </div>

        <hr />

        <h2>一、主要内容与观点总结</h2>

        <h3>1. 原始研究/调查背景</h3>

        <p>有一篇近期论文/调查（问卷+观察）分析了软件工程师使用大型语言模型 (LLM) 进行编码的实际表现。研究对象大多使用的是 GPT-5、Claude Sonnet 4 系列模型，<strong>还不包括最新更强的模型版本</strong>。</p>

        <h3>2. AI 编码的技术变化</h3>

        <div class="comparison-grid">
          <div class="comparison-card success">
            <h4>新一代模型的优势</h4>
            <ul>
              <li>GPT-5.2、Claude Opus/4.5 等新模型</li>
              <li>比过去更能处理大问题、更强大</li>
              <li>可以处理更复杂的代码生成任务</li>
            </ul>
          </div>

          <div class="comparison-card challenge">
            <h4>仍存在的问题</h4>
            <ul>
              <li>有时候会写出冗余、复杂、不合理的代码</li>
              <li>错误的循环、深层嵌套</li>
              <li>权限验证失误等</li>
            </ul>
          </div>
        </div>

        <h3>3. 专业开发者 vs "黑箱 AI"</h3>

        <p>不少评论聚焦于一个长期辩论：<strong>AI 能自动写代码，但——</strong></p>

        <div class="insight-card success">
          <h4>AI 的优势场景</h4>
          <ul>
            <li>对小工程、脚手架、API 或模板代码很有效</li>
            <li>能加快生产力、生成基础结构和 boilerplate</li>
            <li>对整体设计与逻辑有很大帮助</li>
          </ul>
        </div>

        <div class="insight-card warning">
          <h4>AI 的局限性</h4>
          <ul>
            <li>在大型复杂系统、大规模多团队协作系统上仍不够成熟</li>
            <li>AI 生成的代码往往需要人来审查、修正、架构把控</li>
            <li>AI 并不能替代深厚领域知识和工程经验</li>
            <li>不能很好理解业务意图和系统边界条件</li>
          </ul>
        </div>

        <blockquote>
          这也正是帖子的核心观点：AI 并不是让程序员"感觉更好"，而是需要程序员去<strong>控制、指导、审查、约束</strong>它输出的内容。
        </blockquote>

        <hr />

        <h2>二、观点分歧与辩论焦点</h2>

        <div class="debate-section">
          <div class="debate-card">
            <div class="debate-label skeptic">质疑派</div>
            <p>过去人工编写的代码"更干净、更有逻辑"，AI 代码常出现设计缺陷。仅依赖 AI 会让人的编码能力退化。</p>
          </div>

          <div class="debate-card">
            <div class="debate-label optimist">乐观派</div>
            <p>AI 自动化既是趋势，也是一种生产力工具。人类工程师更需要把精力放在设计、抽象、架构上。</p>
          </div>

          <div class="debate-card">
            <div class="debate-label neutral">中立派</div>
            <p>有时候需要 AI 生成代码，但仍由专业工程师负责策划整体方向与质量把控。</p>
          </div>
        </div>

        <hr />

        <h2>三、我的评价</h2>

        <p>这个讨论反映了一个正在进行中的行业现实：</p>

        <h3>1. AI 编码是工具，而不是替代者</h3>

        <p>LLM 的编码能力确实显著提高，可以解决大量繁琐、重复性工作，但：</p>

        <ul>
          <li>它仍缺乏对"业务本质"的深刻理解</li>
          <li>它的输出质量参差不齐</li>
          <li>需要程序员审查、架构决策、测试、约束和维护</li>
        </ul>

        <div class="principle-box">
          <h4>核心结论</h4>
          <p><strong>职业开发者的价值从写代码向监督代码、评估代码、架构控制转移。</strong></p>
          <p>这也正是帖子标题想表达的核心 —— 专业工程师「不只靠感觉，而是靠掌控和控制」。</p>
        </div>

        <h3>2. 对不同规模项目的适用性不同</h3>

        <div class="comparison-grid">
          <div class="comparison-card success">
            <h4>AI 效果显著的场景</h4>
            <ul>
              <li>小项目或边缘功能</li>
              <li>原型开发和 MVP</li>
              <li>模板代码和脚手架</li>
              <li>单一功能模块</li>
            </ul>
          </div>

          <div class="comparison-card challenge">
            <h4>需要人工主导的场景</h4>
            <ul>
              <li>大规模系统</li>
              <li>跨部门协作</li>
              <li>复杂边界逻辑</li>
              <li>长期维护项目</li>
            </ul>
          </div>
        </div>

        <blockquote>
          AI 不可能替代软件工程经验，但能显著增强执行效率。
        </blockquote>

        <h3>3. 对程序员技能的影响</h3>

        <div class="comparison-grid">
          <div class="comparison-card success">
            <h4>正向影响</h4>
            <ul>
              <li>提升个人生产力</li>
              <li>减少重复劳动</li>
              <li>帮助快速原型设计</li>
            </ul>
          </div>

          <div class="comparison-card challenge">
            <h4>潜在风险</h4>
            <ul>
              <li>造成对底层逻辑的依赖性</li>
              <li>降低对算法、架构深度理解的驱动力</li>
              <li>让人对 AI 过度信任产生误判风险</li>
            </ul>
          </div>
        </div>

        <div class="principle-box highlight">
          <h4>给程序员的建议</h4>
          <p>程序员更应该提升<strong>"AI 监督、审查、约束与架构设计"</strong>的能力，而不是仅仅依赖生成代码。</p>
        </div>

        <hr />

        <h2>四、总结要点</h2>

        <div class="summary-table">
          <table>
            <thead>
              <tr>
                <th>方面</th>
                <th>观点</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AI 编码能力</td>
                <td>明显提高，但仍有错误和不合理输出</td>
              </tr>
              <tr>
                <td>大规模系统开发</td>
                <td>还不能完全靠 AI 完成</td>
              </tr>
              <tr>
                <td>软件工程师角色</td>
                <td>正从"写代码"转向"指导/控制 AI 产出"</td>
              </tr>
              <tr>
                <td>技能要求</td>
                <td>更强调监督、审查、架构设计等高级技能</td>
              </tr>
            </tbody>
          </table>
        </div>

        <blockquote class="conclusion">
          在 AI 时代，专业开发者的价值不在于能写多少代码，<br />
          而在于能多好地<strong>掌控</strong> AI 产出的代码质量与方向。
        </blockquote>
      </div>
    </article>

    <!-- Article Footer -->
    <footer class="article-footer">
      <div class="container container-sm">
        <div class="author-card">
          <div class="author-avatar">W</div>
          <div class="author-info">
            <h4>Wang Huan</h4>
            <p>AI 时代的探索者与实践者，每天与 AI 一起写代码。</p>
          </div>
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
  color: white;
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-4);
}

.subtitle {
  font-size: var(--font-size-xl);
  opacity: 0.9;
}

/* Content */
.article-content {
  padding: var(--spacing-16) 0;
}

.article-content p {
  font-size: var(--font-size-lg);
  line-height: 1.9;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-6);
}

.article-content h2 {
  font-size: var(--font-size-2xl);
  margin-top: var(--spacing-12);
  margin-bottom: var(--spacing-6);
  color: var(--color-text-primary);
}

.article-content h3 {
  font-size: var(--font-size-xl);
  margin-top: var(--spacing-8);
  margin-bottom: var(--spacing-4);
  color: var(--color-text-primary);
}

.article-content h4 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-3);
  color: var(--color-text-primary);
}

.article-content hr {
  border: none;
  height: 1px;
  background: var(--color-border);
  margin: var(--spacing-12) 0;
}

.article-content blockquote {
  border-left: 4px solid var(--color-primary);
  padding: var(--spacing-4) var(--spacing-6);
  margin: var(--spacing-8) 0;
  background: var(--color-primary-50);
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
  color: var(--color-primary-800);
  font-style: italic;
}

.article-content blockquote.conclusion {
  background: var(--gradient-subtle);
  border-left-width: 4px;
  font-size: var(--font-size-xl);
  text-align: center;
  padding: var(--spacing-8);
}

.article-content strong {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
}

.article-content code {
  background: var(--color-neutral-100);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-family: monospace;
  font-size: 0.9em;
  color: var(--color-primary);
}

.article-content a {
  color: var(--color-primary);
  text-decoration: none;
}

.article-content a:hover {
  text-decoration: underline;
}

.article-content ul,
.article-content ol {
  margin: var(--spacing-6) 0;
  padding-left: var(--spacing-8);
}

.article-content li {
  font-size: var(--font-size-lg);
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-3);
}

/* Info Box */
.info-box {
  background: var(--color-neutral-50);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-8);
}

.info-box p {
  margin-bottom: var(--spacing-2);
  font-size: var(--font-size-base);
}

.info-box p:last-child {
  margin-bottom: 0;
}

/* Comparison Grid */
.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-6);
  margin: var(--spacing-6) 0;
}

.comparison-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  border: 1px solid var(--color-border-light);
}

.comparison-card.success {
  border-left: 4px solid #10b981;
}

.comparison-card.challenge {
  border-left: 4px solid #f59e0b;
}

.comparison-card h4 {
  margin-bottom: var(--spacing-4);
}

.comparison-card ul {
  margin: 0;
  padding-left: var(--spacing-5);
}

.comparison-card li {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-2);
}

/* Insight Card */
.insight-card {
  background: var(--color-neutral-50);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  margin: var(--spacing-6) 0;
}

.insight-card.success {
  border-left: 4px solid #10b981;
  background: #ecfdf5;
}

.insight-card.warning {
  border-left: 4px solid #f59e0b;
  background: #fffbeb;
}

.insight-card h4 {
  color: var(--color-text-primary);
}

.insight-card ul {
  margin: var(--spacing-3) 0 0;
  padding-left: var(--spacing-5);
}

.insight-card li {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-2);
}

/* Debate Section */
.debate-section {
  display: grid;
  gap: var(--spacing-4);
  margin: var(--spacing-6) 0;
}

.debate-card {
  background: white;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--spacing-5);
}

.debate-card p {
  margin: 0;
  font-size: var(--font-size-base);
}

.debate-label {
  display: inline-block;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  padding: 4px 10px;
  border-radius: var(--radius-full);
  margin-bottom: var(--spacing-3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.debate-label.skeptic {
  background: #fef2f2;
  color: #dc2626;
}

.debate-label.optimist {
  background: #ecfdf5;
  color: #059669;
}

.debate-label.neutral {
  background: #f0f9ff;
  color: #0284c7;
}

/* Principle Box */
.principle-box {
  background: white;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  margin: var(--spacing-6) 0;
}

.principle-box.highlight {
  background: var(--gradient-subtle);
  border: none;
}

.principle-box h4 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-3);
}

.principle-box p {
  margin-bottom: var(--spacing-3);
  font-size: var(--font-size-base);
}

.principle-box p:last-child {
  margin-bottom: 0;
}

/* Summary Table */
.summary-table {
  margin: var(--spacing-8) 0;
  overflow-x: auto;
}

.summary-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--color-border-light);
}

.summary-table th,
.summary-table td {
  padding: var(--spacing-4) var(--spacing-5);
  text-align: left;
  border-bottom: 1px solid var(--color-border-light);
}

.summary-table th {
  background: var(--color-neutral-50);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  font-size: var(--font-size-base);
}

.summary-table td {
  color: var(--color-text-secondary);
  font-size: var(--font-size-base);
}

.summary-table tr:last-child td {
  border-bottom: none;
}

/* Footer */
.article-footer {
  background: white;
  padding: var(--spacing-12) 0;
  border-top: 1px solid var(--color-border-light);
}

.author-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  padding: var(--spacing-6);
  background: var(--color-neutral-50);
  border-radius: var(--radius-xl);
  margin-bottom: var(--spacing-8);
}

.author-avatar {
  width: 64px;
  height: 64px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.author-info h4 {
  margin-bottom: var(--spacing-1);
}

.author-info p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  margin: 0;
}

.share-section {
  text-align: center;
  margin-bottom: var(--spacing-8);
}

.share-section > p {
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
  padding: var(--spacing-3) var(--spacing-5);
  background: var(--color-neutral-100);
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
}

.share-btn:hover {
  background: var(--color-primary-100);
  color: var(--color-primary);
}

.back-link {
  text-align: center;
}

.back-link a {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.back-link a:hover {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .article-header h1 {
    font-size: var(--font-size-2xl);
  }

  .article-meta {
    flex-wrap: wrap;
  }

  .comparison-grid {
    grid-template-columns: 1fr;
  }
}
</style>
