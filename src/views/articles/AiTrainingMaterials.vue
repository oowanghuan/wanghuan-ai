<template>
  <div class="training-page">
    <!-- Header -->
    <header class="training-header">
      <div class="container">
        <div class="header-badge">
          <span class="badge-icon">🎓</span>
          <span>AI Commander Training Series</span>
        </div>
        <h1>AI 指挥官培训系列</h1>
        <p class="subtitle">从执行者到指挥官：掌握 AI 协作的核心心法与实战技能</p>
        <div class="header-stats">
          <div class="stat">
            <span class="stat-icon">📚</span>
            <span>4 个模块</span>
          </div>
          <div class="stat">
            <span class="stat-icon">🎧</span>
            <span>~2 小时音频</span>
          </div>
          <div class="stat">
            <span class="stat-icon">📄</span>
            <span>配套 PDF 讲义</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Course Overview -->
    <section class="course-overview">
      <div class="container container-md">
        <h2>课程概述</h2>
        <p class="overview-text">
          这套培训材料将帮助你从"用 AI 的人"转变为"指挥 AI 的人"。
          不是教你成为 AI 专家，而是帮你<strong>更清晰地工作、更好地决策、用 AI 作为杠杆而非借口</strong>。
        </p>
        <div class="core-principle">
          <span class="principle-icon">🎯</span>
          <span>核心原则：<strong>AI 执行，人类决策，责任永远在人</strong></span>
        </div>
        <div class="learning-path">
          <div class="path-item">
            <div class="path-number">0</div>
            <div class="path-content">
              <h4>建立共同语言</h4>
              <p>统一 AI 协作的核心概念和术语</p>
            </div>
          </div>
          <div class="path-arrow">→</div>
          <div class="path-item">
            <div class="path-number">1</div>
            <div class="path-content">
              <h4>转变思维模式</h4>
              <p>从执行者心态升级到指挥官心态</p>
            </div>
          </div>
          <div class="path-arrow">→</div>
          <div class="path-item">
            <div class="path-number">2</div>
            <div class="path-content">
              <h4>掌握作战策略</h4>
              <p>学习 AI 协作的战术和运营方法</p>
            </div>
          </div>
          <div class="path-arrow">→</div>
          <div class="path-item">
            <div class="path-number">3</div>
            <div class="path-content">
              <h4>标准化工作流</h4>
              <p>六步循环，形成可复用的工作模式</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modules -->
    <section class="modules-section">
      <div class="container container-md">
        <h2>课程模块</h2>

        <!-- Module 0 -->
        <div class="module-card">
          <div class="module-header">
            <div class="module-badge part0">Part 0</div>
            <div class="module-title">
              <h3>AI 工作流商业词汇</h3>
              <p class="module-subtitle">AI Workflow Business Vocabulary</p>
            </div>
          </div>
          <div class="module-desc">
            <p>建立共同语言，让团队所有人理解相同的概念、使用相同的术语。</p>
            <ul class="module-points">
              <li>什么是 "Prompt"？在工作中到底意味着什么</li>
              <li>什么是 "Context"？如何用工作语言理解它</li>
              <li>如何在没有技术恐惧的情况下思考 AI</li>
              <li>AI 协作的基础心智模型</li>
            </ul>
          </div>
          <div class="module-resources">
            <a :href="audioUrls.part0" target="_blank" class="resource-btn audio" :class="{ disabled: !audioUrls.part0 }">
              <span class="resource-icon">🎧</span>
              <span class="resource-text">
                <strong>音频讲解</strong>
                <small>33.1 MB · ~30 min</small>
              </span>
            </a>
            <a :href="pdfUrls.part0" target="_blank" class="resource-btn pdf" :class="{ disabled: !pdfUrls.part0 }">
              <span class="resource-icon">📄</span>
              <span class="resource-text">
                <strong>PDF 讲义</strong>
                <small>12.9 MB</small>
              </span>
            </a>
          </div>
        </div>

        <!-- Module 1 -->
        <div class="module-card">
          <div class="module-header">
            <div class="module-badge part1">Part 1</div>
            <div class="module-title">
              <h3>从执行者到指挥官</h3>
              <p class="module-subtitle">From Executor to Commander</p>
            </div>
          </div>
          <div class="module-desc">
            <p>当 AI 成为工作流的一部分时，你的角色如何转变。</p>
            <ul class="module-points">
              <li><strong>AI 执行，你决策</strong>——核心分工原则</li>
              <li>责任永远在人，不在工具</li>
              <li>从"做事的人"到"指挥做事的人"</li>
              <li>如何在心态上完成这个转变</li>
            </ul>
          </div>
          <div class="module-resources">
            <a :href="audioUrls.part1" target="_blank" class="resource-btn audio" :class="{ disabled: !audioUrls.part1 }">
              <span class="resource-icon">🎧</span>
              <span class="resource-text">
                <strong>音频讲解</strong>
                <small>31.2 MB · ~28 min</small>
              </span>
            </a>
            <a :href="pdfUrls.part1" target="_blank" class="resource-btn pdf" :class="{ disabled: !pdfUrls.part1 }">
              <span class="resource-icon">📄</span>
              <span class="resource-text">
                <strong>PDF 讲义</strong>
                <small>12.7 MB</small>
              </span>
            </a>
          </div>
        </div>

        <!-- Module 2 -->
        <div class="module-card">
          <div class="module-header">
            <div class="module-badge part2">Part 2</div>
            <div class="module-title">
              <h3>AI 指挥作战策略</h3>
              <p class="module-subtitle">AI Command Operational Strategy</p>
            </div>
          </div>
          <div class="module-desc">
            <p>如何在实际工作中与 AI 协作——具体的操作方法。</p>
            <ul class="module-points">
              <li>如何给 AI 分配任务</li>
              <li>如何迭代和优化 AI 的输出</li>
              <li>当 AI 出错时如何介入和纠正</li>
              <li>真实场景案例：品牌运营、短视频内容、产品销售</li>
            </ul>
          </div>
          <div class="module-resources">
            <a :href="audioUrls.part2" target="_blank" class="resource-btn audio" :class="{ disabled: !audioUrls.part2 }">
              <span class="resource-icon">🎧</span>
              <span class="resource-text">
                <strong>音频讲解</strong>
                <small>29 MB · ~26 min</small>
              </span>
            </a>
            <a :href="pdfUrls.part2" target="_blank" class="resource-btn pdf" :class="{ disabled: !pdfUrls.part2 }">
              <span class="resource-icon">📄</span>
              <span class="resource-text">
                <strong>PDF 讲义</strong>
                <small>12.5 MB</small>
              </span>
            </a>
          </div>
        </div>

        <!-- Module 3 -->
        <div class="module-card">
          <div class="module-header">
            <div class="module-badge part3">Part 3</div>
            <div class="module-title">
              <h3>标准 AI 工作循环与汇报</h3>
              <p class="module-subtitle">Standard AI Work Cycle & Reporting</p>
            </div>
          </div>
          <div class="module-desc">
            <p>AI 协作如何成为默认工作流，以及如何汇报工作成果。</p>
            <ul class="module-points">
              <li>六步标准工作循环：从任务定义到成果验收</li>
              <li>如何沟通和汇报 AI 协作的工作成果</li>
              <li>向上汇报的方法——管理层只关心结果，不关心工具</li>
              <li>将 AI 作为杠杆，而不是借口</li>
            </ul>
          </div>
          <div class="module-resources">
            <a :href="audioUrls.part3" target="_blank" class="resource-btn audio" :class="{ disabled: !audioUrls.part3 }">
              <span class="resource-icon">🎧</span>
              <span class="resource-text">
                <strong>音频讲解</strong>
                <small>27.3 MB · ~25 min</small>
              </span>
            </a>
            <a :href="pdfUrls.part3" target="_blank" class="resource-btn pdf" :class="{ disabled: !pdfUrls.part3 }">
              <span class="resource-icon">📄</span>
              <span class="resource-text">
                <strong>PDF 讲义</strong>
                <small>17 MB</small>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Use -->
    <section class="how-to-use">
      <div class="container container-md">
        <h2>如何使用这套材料</h2>
        <div class="use-steps">
          <div class="use-step">
            <div class="step-icon">🎧</div>
            <h4>先听音频</h4>
            <p>在通勤、运动、做家务时听，建立整体概念框架</p>
          </div>
          <div class="use-step">
            <div class="step-icon">📄</div>
            <h4>再看讲义</h4>
            <p>对照 PDF 讲义，深入理解关键概念和方法论</p>
          </div>
          <div class="use-step">
            <div class="step-icon">💻</div>
            <h4>最后实践</h4>
            <p>用 Claude Code + AI Coding Template 在真实项目中练习</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Resources -->
    <section class="related-section">
      <div class="container container-md">
        <h2>配套资源</h2>
        <div class="related-grid">
          <router-link to="/blog/claude-code-onboarding" class="related-card">
            <span class="related-icon">📖</span>
            <div class="related-content">
              <h4>Claude Code 入门指南</h4>
              <p>新同事必读的 AI 编程工具入门教程</p>
            </div>
            <span class="related-arrow">→</span>
          </router-link>
          <router-link to="/blog/ai-super-intern" class="related-card">
            <span class="related-icon">🧠</span>
            <div class="related-content">
              <h4>把 AI 当超级实习生</h4>
              <p>建立正确的 AI 协作心智模型</p>
            </div>
            <span class="related-arrow">→</span>
          </router-link>
          <a href="https://github.com/oowanghuan/ai-coding-template" target="_blank" class="related-card">
            <span class="related-icon">🛠️</span>
            <div class="related-content">
              <h4>AI Coding Template</h4>
              <p>团队 AI 协作开发框架模板</p>
            </div>
            <span class="related-arrow">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="training-footer">
      <div class="container container-md">
        <div class="footer-content">
          <p>有问题或建议？欢迎联系我</p>
          <a href="mailto:oowanghuan@gmail.com" class="contact-btn">
            <span>📧</span> oowanghuan@gmail.com
          </a>
        </div>
        <div class="back-link">
          <router-link to="/blog">← 返回博客</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const R2_BASE = 'https://pub-33689c7bd4e649ef8c405747dff3c92b.r2.dev'

const audioUrls = reactive({
  part0: `${R2_BASE}/Part_0_Treat_AI_Like_a_Super_New_Colleague.m4a`,
  part1: `${R2_BASE}/Part_1_Master_the_AI_Commander_Mindset.m4a`,
  part2: `${R2_BASE}/Part_2_Your_Phantom_Promotion_to_AI_Commander.m4a`,
  part3: `${R2_BASE}/Part_3_-_The_6-Step_Standard_AI_Work_Cycle.m4a`,
})

const pdfUrls = reactive({
  part0: `${R2_BASE}/Part%200%20AI_Workflow_Business_Vocabulary.pdf`,
  part1: `${R2_BASE}/Part%201%20From_Executor_to_Commander.pdf`,
  part2: `${R2_BASE}/Part%202%20AI_Command_Operational_Strategy.pdf`,
  part3: `${R2_BASE}/Part%203%20Standard_AI_Work_Cycle.pdf`,
})
</script>

<style scoped>
.training-page {
  background: #fafafa;
  min-height: 100vh;
}

/* Header */
.training-header {
  background: linear-gradient(135deg, #1e1e2e 0%, #2d2b55 50%, #1a1a2e 100%);
  color: white;
  padding: 120px 0 80px;
  text-align: center;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 14px;
  margin-bottom: 24px;
}

.badge-icon {
  font-size: 18px;
}

.training-header h1 {
  font-size: 3rem;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #fff 0%, #c4b5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.training-header .subtitle {
  font-size: 1.25rem;
  color: rgba(196, 181, 253, 0.9);
  margin-bottom: 32px;
}

.header-stats {
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

.stat-icon {
  font-size: 18px;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.container-md {
  max-width: 900px;
}

/* Course Overview */
.course-overview {
  padding: 80px 0;
  background: white;
}

.course-overview h2 {
  text-align: center;
  margin-bottom: 24px;
  font-size: 2rem;
}

.overview-text {
  text-align: center;
  font-size: 1.125rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto 24px;
  line-height: 1.8;
}

.core-principle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 16px 32px;
  border-radius: 12px;
  margin: 0 auto 48px;
  max-width: 600px;
  font-size: 15px;
  color: #92400e;
}

.principle-icon {
  font-size: 24px;
}

.core-principle strong {
  color: #78350f;
}

.learning-path {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.path-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #f8fafc;
  padding: 20px;
  border-radius: 16px;
  min-width: 180px;
}

.path-number {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  flex-shrink: 0;
}

.path-content h4 {
  font-size: 14px;
  margin-bottom: 4px;
}

.path-content p {
  font-size: 12px;
  color: #64748b;
  margin: 0;
}

.path-arrow {
  color: #cbd5e1;
  font-size: 24px;
}

/* Modules Section */
.modules-section {
  padding: 80px 0;
}

.modules-section h2 {
  text-align: center;
  margin-bottom: 48px;
  font-size: 2rem;
}

.module-card {
  background: white;
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.module-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.module-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
}

.module-badge {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  flex-shrink: 0;
}

.module-badge.part0 {
  background: #fef3c7;
  color: #92400e;
}

.module-badge.part1 {
  background: #dbeafe;
  color: #1e40af;
}

.module-badge.part2 {
  background: #f3e8ff;
  color: #6b21a8;
}

.module-badge.part3 {
  background: #d1fae5;
  color: #065f46;
}

.module-title h3 {
  font-size: 1.5rem;
  margin-bottom: 4px;
}

.module-subtitle {
  color: #64748b;
  font-size: 14px;
  font-style: italic;
  margin: 0;
}

.module-desc {
  margin-bottom: 24px;
}

.module-desc p {
  color: #475569;
  line-height: 1.8;
  margin: 0 0 12px 0;
}

.module-points {
  list-style: none;
  padding: 0;
  margin: 0;
}

.module-points li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 8px;
  color: #64748b;
  font-size: 14px;
  line-height: 1.6;
}

.module-points li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #8b5cf6;
}

.module-points li strong {
  color: #1e293b;
}

.module-resources {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.resource-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  flex: 1;
  min-width: 200px;
}

.resource-btn.audio {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  color: #92400e;
}

.resource-btn.audio:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);
}

.resource-btn.pdf {
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  color: #991b1b;
}

.resource-btn.pdf:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(248, 113, 113, 0.3);
}

.resource-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.resource-icon {
  font-size: 24px;
}

.resource-text {
  display: flex;
  flex-direction: column;
}

.resource-text strong {
  font-size: 14px;
}

.resource-text small {
  font-size: 12px;
  opacity: 0.8;
}

/* How to Use */
.how-to-use {
  padding: 80px 0;
  background: white;
}

.how-to-use h2 {
  text-align: center;
  margin-bottom: 48px;
  font-size: 2rem;
}

.use-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.use-step {
  text-align: center;
  padding: 32px;
  background: #f8fafc;
  border-radius: 20px;
}

.step-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.use-step h4 {
  margin-bottom: 8px;
}

.use-step p {
  color: #64748b;
  font-size: 14px;
  margin: 0;
}

/* Related Section */
.related-section {
  padding: 80px 0;
}

.related-section h2 {
  text-align: center;
  margin-bottom: 48px;
  font-size: 2rem;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.related-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: white;
  padding: 24px;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.related-card:hover {
  border-color: #8b5cf6;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.15);
  transform: translateY(-2px);
}

.related-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.related-content {
  flex: 1;
}

.related-content h4 {
  font-size: 14px;
  margin-bottom: 4px;
}

.related-content p {
  font-size: 12px;
  color: #64748b;
  margin: 0;
}

.related-arrow {
  color: #8b5cf6;
  font-size: 20px;
}

/* Footer */
.training-footer {
  padding: 60px 0;
  background: white;
  border-top: 1px solid #e2e8f0;
}

.footer-content {
  text-align: center;
  margin-bottom: 32px;
}

.footer-content p {
  color: #64748b;
  margin-bottom: 16px;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #1e1e2e;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background: #2d2b55;
  transform: translateY(-2px);
}

.back-link {
  text-align: center;
}

.back-link a {
  color: #64748b;
  text-decoration: none;
  font-size: 14px;
}

.back-link a:hover {
  color: #8b5cf6;
}

/* Responsive */
@media (max-width: 768px) {
  .training-header h1 {
    font-size: 2rem;
  }

  .header-stats {
    gap: 16px;
  }

  .learning-path {
    flex-direction: column;
  }

  .path-arrow {
    transform: rotate(90deg);
  }

  .path-item {
    width: 100%;
  }

  .module-resources {
    flex-direction: column;
  }

  .resource-btn {
    min-width: auto;
  }

  .use-steps,
  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
