<template>
  <div class="about-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>关于我</h1>
        <p>AI 时代的探索者与实践者</p>
      </div>
    </section>

    <!-- About Content -->
    <section class="section">
      <div class="container">
        <div class="about-grid">
          <div class="about-main">
            <!-- Intro -->
            <div class="about-intro">
              <div class="avatar-large">
                <span>W</span>
              </div>
              <div class="intro-text">
                <h2>Wang Huan</h2>
                <p class="tagline">AI + Code = Future</p>
                <p class="bio">
                  我是一个热衷于探索 AI 与软件开发结合的实践者。
                  每天都在与 AI（Claude、GPT）一起写代码，寻找人机协作的最佳模式。
                </p>
              </div>
            </div>

            <!-- Story -->
            <div class="about-section">
              <h3>我的故事</h3>
              <p>
                作为一个软件开发者，我见证了 AI coding 从"玩具"到"生产力工具"的转变。
                2023 年开始，我尝试让 AI 深度参与到日常开发工作中——不只是写代码，
                而是从需求分析、架构设计到代码实现的全流程。
              </p>
              <p>
                在这个过程中，我发现了很多问题：传统的团队分工不再适用，
                "写代码"不再是瓶颈，而"说清楚要做什么"变成了最大的挑战。
                于是我开始思考和实践，如何让团队更好地适应 AI 时代。
              </p>
              <p>
                <strong>「AI 时代团队转型蓝图」</strong>就是这些思考的结晶。
                我希望通过分享我的经验和方法论，帮助更多团队平滑地过渡到 AI 驱动的开发模式。
              </p>
            </div>

            <!-- Beliefs -->
            <div class="about-section">
              <h3>我的信念</h3>
              <div class="beliefs-grid">
                <div class="belief-card">
                  <div class="belief-icon">🤖</div>
                  <h4>AI 是伙伴，不是替代品</h4>
                  <p>AI 放大人的能力，而不是取代人。关键是找到正确的协作方式。</p>
                </div>
                <div class="belief-card">
                  <div class="belief-icon">📝</div>
                  <h4>清晰表达比写代码更重要</h4>
                  <p>当 AI 能写代码，"说清楚要做什么"成为核心能力。</p>
                </div>
                <div class="belief-card">
                  <div class="belief-icon">🔄</div>
                  <h4>持续学习和适应</h4>
                  <p>AI 技术快速发展，保持学习和实验的心态至关重要。</p>
                </div>
                <div class="belief-card">
                  <div class="belief-icon">🌍</div>
                  <h4>分享创造价值</h4>
                  <p>把经验和方法论分享出来，让更多人受益。</p>
                </div>
              </div>
            </div>

            <!-- Currently -->
            <div class="about-section">
              <h3>我目前在做的事</h3>
              <ul class="current-list">
                <li>
                  <el-icon><Check /></el-icon>
                  每天用 AI 写代码，探索高效的人机协作模式
                </li>
                <li>
                  <el-icon><Check /></el-icon>
                  整理和分享 AI 协作开发的实战经验
                </li>
                <li>
                  <el-icon><Check /></el-icon>
                  构建「AI 时代团队转型蓝图」等产品
                </li>
                <li>
                  <el-icon><Check /></el-icon>
                  规划 AI 开发分包平台和社区
                </li>
              </ul>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="about-sidebar">
            <div class="sidebar-card">
              <h4>联系方式</h4>
              <ul class="contact-list">
                <li>
                  <el-icon><Message /></el-icon>
                  <a href="mailto:hi@wanghuan.ai">hi@wanghuan.ai</a>
                </li>
                <li>
                  <el-icon><Link /></el-icon>
                  <a href="https://github.com/oowanghuan" target="_blank">GitHub</a>
                </li>
              </ul>
            </div>

            <div class="sidebar-card">
              <h4>技术栈</h4>
              <div class="tech-tags">
                <span>Vue.js</span>
                <span>React</span>
                <span>Node.js</span>
                <span>Python</span>
                <span>Claude</span>
                <span>GPT</span>
                <span>Prompt Engineering</span>
              </div>
            </div>

            <div class="sidebar-card">
              <h4>最近在读</h4>
              <ul class="reading-list">
                <li>Anthropic 文档</li>
                <li>AI Agents 设计模式</li>
                <li>团队协作方法论</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>想要交流？</h2>
          <p>如果你也在实践 AI 协作开发，或者对我的项目感兴趣，欢迎联系我</p>
          <a href="mailto:hi@wanghuan.ai" class="btn btn-primary">
            <el-icon><Message /></el-icon>
            发送邮件
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Check, Message, Link } from '@element-plus/icons-vue'
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

.about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-3xl);
}

/* Main Content */
.about-intro {
  display: flex;
  gap: var(--spacing-xl);
  align-items: center;
  margin-bottom: var(--spacing-3xl);
  padding-bottom: var(--spacing-2xl);
  border-bottom: 1px solid #e0e0e0;
}

.avatar-large {
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
  flex-shrink: 0;
}

.intro-text h2 {
  margin-bottom: var(--spacing-xs);
}

.tagline {
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
}

.bio {
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.about-section {
  margin-bottom: var(--spacing-2xl);
}

.about-section h3 {
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-2xl);
}

.about-section p {
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
}

/* Beliefs */
.beliefs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.belief-card {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-base);
}

.belief-icon {
  font-size: 32px;
  margin-bottom: var(--spacing-md);
}

.belief-card h4 {
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-base);
}

.belief-card p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  margin: 0;
}

/* Current List */
.current-list {
  list-style: none;
}

.current-list li {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) 0;
  color: var(--color-text-secondary);
  border-bottom: 1px solid #f0f0f0;
}

.current-list li:last-child {
  border-bottom: none;
}

.current-list .el-icon {
  color: var(--color-primary);
  font-size: 18px;
}

/* Sidebar */
.about-sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.sidebar-card {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-base);
}

.sidebar-card h4 {
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
}

.contact-list {
  list-style: none;
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) 0;
}

.contact-list .el-icon {
  color: var(--color-text-light);
}

.contact-list a {
  color: var(--color-text-primary);
}

.contact-list a:hover {
  color: var(--color-primary);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tech-tags span {
  background: rgba(102, 126, 234, 0.1);
  color: var(--color-primary);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
}

.reading-list {
  list-style: none;
}

.reading-list li {
  padding: var(--spacing-sm) 0;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  border-bottom: 1px solid #f0f0f0;
}

.reading-list li:last-child {
  border-bottom: none;
}

/* CTA */
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
  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-intro {
    flex-direction: column;
    text-align: center;
  }

  .beliefs-grid {
    grid-template-columns: 1fr;
  }
}
</style>
