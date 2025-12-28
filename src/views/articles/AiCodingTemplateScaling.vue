<template>
  <div class="article-page">
    <!-- Article Header -->
    <header class="article-header">
      <div class="container">
        <div class="article-meta">
          <span class="category">AI 协作开发</span>
          <span class="date">2024年12月</span>
          <span class="read-time">15 分钟阅读</span>
        </div>
        <h1>AI Coding Template 项目规模化开发探讨</h1>
        <p class="subtitle">——会议纪要</p>
      </div>
    </header>

    <!-- Article Content -->
    <article class="article-content">
      <div class="container container-sm">
        <!-- 项目背景 -->
        <div class="info-box">
          <p><strong>项目背景：</strong>基于 <a href="https://github.com/oowanghuan/ai-coding-template" target="_blank">ai-coding-template</a> 进行 AI 辅助开发</p>
          <p><strong>主要议题：</strong>复杂业务场景下的功能拆解、大文档管理、API 契约驱动开发及 AI 协作最佳实践</p>
          <p><strong>参会人员：</strong>王欢、胥克谦、小鱼儿、付权智</p>
        </div>

        <hr />

        <h2>一、会议核心背景</h2>

        <p>本次会议主要复盘了使用 AI Coding 流程开发不同量级项目时的差异。从简单的<strong>个人工具（如 HR 招聘小工具）</strong>扩展到<strong>企业级复杂系统（如印尼头部达人管理系统）</strong>时，原有的"Context -> Spec -> Demo -> Tech Design"标准流程遇到了因业务复杂度激增带来的挑战。</p>

        <hr />

        <h2>二、核心开发流程回顾</h2>

        <p>王欢总结了目前团队采用的标准 AI 开发流：</p>
        <ul>
          <li><strong>Context 编写：</strong>描述业务背景</li>
          <li><strong>Spec 编写：</strong>定义具体需求规格</li>
          <li><strong>Demo 制作：</strong>生成原型交互</li>
          <li><strong>Tech Design（技术设计）：</strong>包含 API 设计、数据库设计、组件拆分等</li>
        </ul>

        <hr />

        <h2>三、核心观点与痛点分析</h2>

        <h3>1. 规模差异带来的"质变"</h3>

        <div class="comparison-grid">
          <div class="comparison-card success">
            <h4>小工具模式（顺利）</h4>
            <ul>
              <li><strong>案例：</strong>HR 招聘工具</li>
              <li><strong>复杂度：</strong>仅约 3 个核心页面（上传简历、状态处理、Pipeline 整理）</li>
              <li><strong>Spec 规模：</strong>500 行以内</li>
              <li><strong>体验：</strong>AI 处理流畅，无明显瓶颈</li>
            </ul>
          </div>

          <div class="comparison-card challenge">
            <h4>企业级系统模式（挑战）</h4>
            <ul>
              <li><strong>案例：</strong>印尼达人及内容管理系统</li>
              <li><strong>数据量级：</strong>月均 30 万达人，600 万+ 视频条目</li>
              <li><strong>业务链条：</strong>涉及素材筛选、广告投放池管理、审批流、投放跟踪等长链路</li>
              <li><strong>Spec 规模：</strong>单一功能模块 Spec 迅速膨胀至 2000+ 行</li>
            </ul>
          </div>
        </div>

        <h3>2. Spec 膨胀与拆解的悖论</h3>

        <p>当 Spec 超过 2000 行时，为了方便多人协作和 AI 理解，团队尝试将功能拆得更细（Splitting），但这引发了新的问题：</p>

        <div class="insight-card warning">
          <h4>拆解过细导致 UI 碎片化</h4>
          <p><strong>现象：</strong>将监控、中选、投放等功能拆解为不同文档开发。</p>
          <p><strong>问题：</strong>用户实际使用场景是聚合的（一个页面可能包含 4-5 个功能模块）。</p>
          <p><strong>副作用：</strong>页面组件被拆得过碎，导致组件间通讯（Component Communication）逻辑变得极度复杂，AI 难以处理这种跨组件的高频交互。</p>
        </div>

        <h3>3. 数据一致性挑战（Naming Conflicts）</h3>

        <p>在从 Mock 数据（Demo 阶段）转向真实 API 和数据库设计（Tech Design 阶段）时，由于拆解导致了上下文割裂：</p>

        <ul>
          <li><strong>前端命名：</strong>倾向于展示逻辑，例如 <code>creatorname</code></li>
          <li><strong>后端/数据库命名：</strong>倾向于存储逻辑，例如 <code>username</code></li>
          <li><strong>AI 的困境：</strong>当系统庞大且字段繁多时，AI 难以自动对齐这些在不同阶段、不同文档中产生的命名差异，导致联调成本上升</li>
        </ul>

        <hr />

        <h2>四、解决方案与最佳实践（胥克谦分享）</h2>

        <p>针对上述痛点，会议提出了系统性的解决方案，核心逻辑是<strong>"抓大放小，契约优先"</strong>。</p>

        <h3>1. 架构拆分原则：微服务/领域驱动</h3>

        <div class="principle-box">
          <h4>按业务领域拆分，而非按 UI 拆分</h4>
          <p>不要纠结于一个复杂页面怎么拆，而是先识别背后的业务实体。例如：</p>
          <ul>
            <li>用户与权限系统（直接复用成熟开源方案）</li>
            <li>CRM 系统（代理商、校区、运营机构）</li>
            <li>财务/分账系统</li>
            <li>分发/投放服务</li>
          </ul>
        </div>

        <div class="principle-box">
          <h4>前端聚合，后端解耦</h4>
          <p>后端按微服务提供独立 API，前端页面只是不同 API 的聚合调用。这样可以将复杂的单体需求化解为多个清晰的 API 定义任务。</p>
        </div>

        <h3>2. 开发流程重构：API 契约优先 (Contract First)</h3>

        <p>为了解决前后端割裂和 AI 乱写 Mock 数据的问题，建议采用以下流程：</p>

        <div class="flow-steps">
          <div class="flow-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h5>定义 API 契约 (Interface Freeze)</h5>
              <p>在写代码前，先让 AI 规划并"敲死" API 接口（URL、参数、返回值）。</p>
            </div>
          </div>
          <div class="flow-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h5>生成 Mock Server</h5>
              <p>基于契约，让 AI 快速生成一个简版的 Mock Server（或使用 Excel/JSON 模拟）。</p>
            </div>
          </div>
          <div class="flow-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h5>并行开发</h5>
              <p><strong>前端：</strong>基于确定的 API 和 Mock Server 开发，AI 编写代码时有明确的数据源，杜绝 Hardcode Mock 数据。</p>
              <p><strong>后端：</strong>依据 API 手册实现逻辑，保证输入输出符合契约即可。</p>
            </div>
          </div>
        </div>

        <h3>3. 需求梳理技巧：AI 角色模拟 (Simulation)</h3>

        <p>针对"需求写不清楚"的问题（如小鱼儿提到的多状态机流转），建议在写 Spec 之前增加 <strong>Chat & Simulation</strong> 环节：</p>

        <ul>
          <li><strong>多轮对话澄清：</strong>先在 Web 端与 AI 进行 20-30 轮对话，理清业务细节。</li>
          <li><strong>角色扮演测试：</strong>让 AI 扮演真实用户（如博主、运营），在虚拟方案中走一遍流程，生成"体验反馈"和"困惑点"。</li>
          <li><strong>多视角评审：</strong>开启多个 AI 会话分别扮演不同角色，汇总意见后生成最终 PRD。</li>
        </ul>

        <blockquote>
          不要拍脑袋定需求，先让 AI 模拟运行一遍。
        </blockquote>

        <h3>4. 大文档管理与 Token 优化</h3>

        <p>针对几万行架构文档的读取与维护：</p>

        <div class="tech-card">
          <h4>读取技巧（Header-based）</h4>
          <p>不让 AI 通读全文，利用 Markdown 的结构化特性，先读标题（H1-H3），定位到具体章节后再读取详细内容，节省 Token 且精准。</p>
        </div>

        <div class="tech-card">
          <h4>写入技巧（Todo List & Diff）</h4>
          <ul>
            <li>将大任务拆解为 Todo List，逐个段落执行。</li>
            <li><strong>修订文档 (Revision Doc)：</strong>修改时，不重写全文，而是生成"修订文档/Diff"（如：替换第 X 行到第 Y 行的内容，或插入新段落），利用二进制/块操作思维管理文档。</li>
          </ul>
        </div>

        <div class="tech-card">
          <h4>版本管理</h4>
          <ul>
            <li><strong>主文档 + Changelog：</strong>保持主文档为最新状态，同时维护一份 Changelog 记录变更原因。</li>
            <li><strong>修订过程文档：</strong>在开发过程中使用中间态的修订文档，定期（如里程碑节点）将其合并（Merge）回主架构文档。</li>
          </ul>
        </div>

        <h3>5. 质量保障：交叉测试 (Cross-Testing)</h3>

        <ul>
          <li><strong>避免上下文污染：</strong>开发者自测或同 Session 测试容易有思维惯性。</li>
          <li><strong>多进程/多模型测试：</strong>使用不同的 AI Session（甚至不同的 IDE，如 Cursor vs CloudCode）加载纯净环境进行测试，能发现更多问题。</li>
          <li><strong>自动化测试流：</strong>让 AI 生成测试报告，按优先级（P0-P3）生成修复计划并逐个执行。</li>
        </ul>

        <hr />

        <h2>五、总结与管理哲学</h2>

        <div class="philosophy-section">
          <div class="philosophy-card">
            <h4>管理者的角色：抓大放小</h4>
            <ul>
              <li><strong>人（管理者）</strong>负责定义关键节点（Key Nodes）、状态流转、角色权限和 API 契约。</li>
              <li><strong>AI</strong> 负责填充细节代码和文档。</li>
              <li>不需要人去读每一行 Spec，Spec 的核心作用是作为 AI 的<strong>存档点 (Save Point)</strong>，用于上下文丢失时的恢复（Recovery）。</li>
            </ul>
          </div>

          <div class="philosophy-card highlight">
            <h4>文档即程序</h4>
            <p>在 AI 时代，高质量的文档（Spec/Context）和清晰的 API 定义才是真正的"源代码"，代码本身只是编译产物。</p>
            <p><strong>必须像管理代码一样管理文档</strong>（Git 版本控制、命名规范、Changelog）。</p>
          </div>
        </div>

        <hr />

        <h2>六、后续行动建议</h2>

        <ol class="action-list">
          <li>制定严格的<strong>文档命名与目录规范</strong>（ID化管理）。</li>
          <li>尝试新开发链路：
            <div class="flow-chain">
              <span>Chat</span>
              <span class="arrow">→</span>
              <span>Role-Play Simulation</span>
              <span class="arrow">→</span>
              <span>Spec</span>
              <span class="arrow">→</span>
              <span>API Contract</span>
              <span class="arrow">→</span>
              <span>Mock Server</span>
              <span class="arrow">→</span>
              <span>Code</span>
            </div>
          </li>
        </ol>

        <blockquote class="conclusion">
          规模化不是简单的复制粘贴，而是需要重新思考 AI 协作的边界与颗粒度。<br />
          文档即程序，契约即规范。
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

.article-content h5 {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-2);
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

.insight-card.warning {
  border-left: 4px solid #f59e0b;
  background: #fffbeb;
}

.insight-card h4 {
  color: var(--color-text-primary);
}

.insight-card p {
  margin-bottom: var(--spacing-3);
  font-size: var(--font-size-base);
}

.insight-card p:last-child {
  margin-bottom: 0;
}

/* Principle Box */
.principle-box {
  background: white;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  margin: var(--spacing-6) 0;
}

.principle-box h4 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-3);
}

.principle-box p {
  margin-bottom: var(--spacing-4);
  font-size: var(--font-size-base);
}

.principle-box ul {
  margin: 0;
  padding-left: var(--spacing-5);
}

.principle-box li {
  font-size: var(--font-size-base);
}

/* Flow Steps */
.flow-steps {
  margin: var(--spacing-8) 0;
}

.flow-step {
  display: flex;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-6);
}

.step-number {
  width: 36px;
  height: 36px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
}

.step-content {
  flex: 1;
  padding-top: 4px;
}

.step-content p {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-2);
}

.step-content p:last-child {
  margin-bottom: 0;
}

/* Tech Card */
.tech-card {
  background: var(--color-neutral-50);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  margin: var(--spacing-4) 0;
}

.tech-card h4 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-3);
}

.tech-card p {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-3);
}

.tech-card ul {
  margin: 0;
  padding-left: var(--spacing-5);
}

.tech-card li {
  font-size: var(--font-size-base);
}

/* Philosophy Section */
.philosophy-section {
  display: grid;
  gap: var(--spacing-6);
  margin: var(--spacing-8) 0;
}

.philosophy-card {
  background: white;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
}

.philosophy-card.highlight {
  background: var(--gradient-subtle);
  border: none;
}

.philosophy-card h4 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-4);
}

.philosophy-card p {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-3);
}

.philosophy-card ul {
  margin: 0;
  padding-left: var(--spacing-5);
}

.philosophy-card li {
  font-size: var(--font-size-base);
}

/* Action List */
.action-list {
  margin: var(--spacing-6) 0;
}

.action-list li {
  margin-bottom: var(--spacing-4);
}

/* Flow Chain */
.flow-chain {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-2);
  margin-top: var(--spacing-3);
  padding: var(--spacing-4);
  background: var(--color-neutral-50);
  border-radius: var(--radius-lg);
}

.flow-chain span {
  padding: var(--spacing-2) var(--spacing-3);
  background: white;
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-light);
}

.flow-chain .arrow {
  background: transparent;
  border: none;
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
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

  .flow-chain {
    flex-direction: column;
    align-items: flex-start;
  }

  .flow-chain .arrow {
    transform: rotate(90deg);
    padding: 0;
  }
}
</style>
