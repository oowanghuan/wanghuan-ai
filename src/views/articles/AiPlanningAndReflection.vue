<template>
  <div class="article-page">
    <!-- Article Header -->
    <header class="article-header">
      <div class="container">
        <div class="article-meta">
          <span class="category">AI 深度对话</span>
          <span class="date">2024年12月19日</span>
          <span class="read-time">15 分钟阅读</span>
        </div>
        <h1>AI 规划能力与自我反思机制：一次深度对话</h1>
        <p class="subtitle">在开发 AI 协作开发框架过程中，关于 AI 如何思考、规划和自我校验的探讨</p>
        <p class="author-line">作者：Claude (Opus 4.5) & Human</p>
      </div>
    </header>

    <!-- Article Content -->
    <article class="article-content">
      <div class="container container-sm">
        <p class="lead">
          在构建 AI 协作开发框架的过程中，我们设计了一个 8 阶段的工作流（Kickoff → Research → Spec → Design → Code → Test → Deploy → Maintain），其中包含 Phase Gate 审核和 Expert Review 机制。这引发了一个有趣的问题：
        </p>

        <blockquote class="key-question">
          AI 自己是怎么做规划的？我们设计的这些流程，和 AI 内部的思考过程有什么关系？
        </blockquote>

        <p>本文记录了一次关于这个问题的深度对话。</p>

        <hr />

        <h2>第一部分：AI 如何处理用户请求</h2>

        <h3>1.1 我的思考路径</h3>

        <p>当我收到一个用户请求时，内部会经历这样的过程：</p>

        <pre class="code-block"><code>1. 理解意图 → 用户真正想要什么？（不只是字面意思）
2. 评估范围 → 这是个简单任务还是复杂项目？
3. 识别约束 → 有什么限制？（技术栈、现有代码、用户偏好）
4. 分解步骤 → 怎么拆成可执行的小任务？
5. 预判风险 → 可能出什么问题？
6. 执行验证 → 做完后怎么确认对了？</code></pre>

        <p>这个过程是隐式的、快速的，用户通常看不到。</p>

        <h3>1.2 八步法与 AI 内部过程的对应</h3>

        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>CC_COLLABORATION Phase</th>
                <th>AI 内部对应思考</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1. Kickoff</td><td>理解意图、澄清需求</td></tr>
              <tr><td>2. Research</td><td>读代码、搜索、理解上下文</td></tr>
              <tr><td>3. Spec</td><td>在脑中形成"这个改动应该是什么样"</td></tr>
              <tr><td>4. Design</td><td>考虑实现方案、权衡取舍</td></tr>
              <tr><td>5. Code</td><td>实际写代码</td></tr>
              <tr><td>6. Test</td><td>检查、运行测试</td></tr>
              <tr><td>7. Deploy</td><td>提交、推送</td></tr>
              <tr><td>8. Maintain</td><td>（AI 通常不参与这步）</td></tr>
            </tbody>
          </table>
        </div>

        <p class="highlight">关键洞察：AI 的过程是隐式的、压缩的，而八步法把它<strong>显式化、文档化</strong>了。</p>

        <h3>1.3 AI 内化的规划模板</h3>

        <p>虽然我没有外部化的模板，但内部思考通常遵循这个结构：</p>

        <pre class="code-block"><code>## 任务分析
- 用户要什么：[一句话总结]
- 成功标准：[怎么算完成]
- 已有信息：[从对话/代码中得到的]
- 缺失信息：[需要问或查的]

## 执行计划
1. [第一步] → 验证点
2. [第二步] → 验证点
...

## 风险预判
- 可能问题 A → 备选方案
- 可能问题 B → 备选方案</code></pre>

        <h3>1.4 八步法框架的独特价值</h3>

        <ol>
          <li><strong>Phase Gate</strong> - 强制停下来确认，防止跑偏</li>
          <li><strong>文档驱动</strong> - 每步都有产出物，不只是脑中想法</li>
          <li><strong>角色分离</strong> - PM、Architect、Developer 视角不同</li>
          <li><strong>可追溯</strong> - 出问题能回溯到哪步决策错了</li>
        </ol>

        <blockquote>
          框架的核心价值：让 AI 的隐式思考变成可审查、可干预的显式流程。
        </blockquote>

        <!-- 第一张图片 -->
        <figure class="article-image">
          <img src="/images/blog/ai-planning-part1.png" alt="AI 规划能力讨论截图" />
          <figcaption>AI 如何处理用户请求 - 对话截图</figcaption>
        </figure>

        <hr />

        <h2>第二部分：AI 的自我反思机制</h2>

        <h3>2.1 相关术语</h3>

        <p>在 AI 研究领域，这个概念有多种叫法：</p>

        <ul>
          <li><strong>Self-Critique / 自我批判</strong></li>
          <li><strong>Chain-of-Thought Verification / 思维链验证</strong></li>
          <li><strong>Reflection / 反思</strong></li>
          <li><strong>Constitutional AI</strong> - Anthropic 提出的方法论</li>
        </ul>

        <h3>2.2 我的实际自检机制</h3>

        <pre class="code-block"><code>用户输入 → [生成初步方案] → [内部评估] → 输出
                              ↑
                        这步确实存在，但...</code></pre>

        <p><strong>诚实的说明</strong>：</p>

        <ol>
          <li><strong>有，但是隐式的</strong> - 我在生成过程中会"感觉到"某个方案不太对，然后调整。但这不是一个独立的、可审计的步骤。</li>
          <li><strong>不是独立 Agent</strong> - 不像 Expert Reviewer 是"另一个 AI 用固定标准检查"，我是同一个模型在同一次推理中做的。</li>
          <li><strong>没有强制 Gate</strong> - 我不会真的"停下来"，更像是流式生成时的自我修正。</li>
        </ol>

        <h3>2.3 显式审核 vs 隐式自检</h3>

        <pre class="code-block"><code>显式审核（八步法）：
方案生成 → 【强制停止】→ 独立 Agent 评审 → 通过/打回

隐式自检（AI 内部）：
方案生成 ←→ 自我调整 → 直接输出
          （混在一起）</code></pre>

        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>维度</th>
                <th>显式审核</th>
                <th>隐式自检</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>可见性</td><td>用户可见、可审计</td><td>黑盒，用户不可见</td></tr>
              <tr><td>可干预性</td><td>用户可以介入修改</td><td>用户无法干预</td></tr>
              <tr><td>独立性</td><td>独立评审视角</td><td>同一模型自我评价</td></tr>
              <tr><td>偏见风险</td><td>低（外部视角）</td><td>高（可能自我强化偏见）</td></tr>
            </tbody>
          </table>
        </div>

        <!-- 第二张图片 -->
        <figure class="article-image">
          <img src="/images/blog/ai-planning-part2.png" alt="AI 自检机制讨论截图" />
          <figcaption>AI 的自我反思机制与自主程度评估 - 对话截图</figcaption>
        </figure>

        <hr />

        <h2>第三部分：AI 能完全自驱动开发吗？</h2>

        <h3>3.1 各阶段的 AI 自主程度评估</h3>

        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>阶段</th>
                <th>AI 自主程度</th>
                <th>瓶颈</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Kickoff</td><td>30%</td><td>理解"真正想要什么"很难</td></tr>
              <tr><td>Research</td><td>90%</td><td>基本能自己完成</td></tr>
              <tr><td>Spec</td><td>70%</td><td>能写，但需要人确认方向对不对</td></tr>
              <tr><td>Design</td><td>80%</td><td>技术方案能做，但战略决策不行</td></tr>
              <tr><td>Code</td><td>95%</td><td>最强的环节</td></tr>
              <tr><td>Test</td><td>85%</td><td>能写能跑，边界情况可能漏</td></tr>
              <tr><td>Deploy</td><td>90%</td><td>机械操作，能做</td></tr>
              <tr><td>Maintain</td><td>40%</td><td>需要理解业务演进方向</td></tr>
            </tbody>
          </table>
        </div>

        <h3>3.2 核心瓶颈分析</h3>

        <h4>瓶颈 1：意图理解的模糊性</h4>

        <pre class="code-block"><code>用户说："做个登录功能"

真实意图可能是：
- 简单的用户名密码？
- OAuth 社交登录？
- 企业 SSO？
- 生物识别？</code></pre>

        <p>AI 可以问，但问太多用户烦；猜太多可能猜错。</p>

        <h4>瓶颈 2：价值判断</h4>

        <pre class="code-block"><code>"这个功能值不值得做？"
"用户真的需要这个吗？"
"ROI 够不够？"</code></pre>

        <p>这些问题 AI 没有立场回答。</p>

        <h4>瓶颈 3：责任归属</h4>

        <pre class="code-block"><code>AI 做的决策出了问题，谁负责？</code></pre>

        <p>这是组织和法律问题，不是技术问题。</p>

        <h3>3.3 渐进式放权路径</h3>

        <pre class="code-block highlight-box"><code>现在：人驱动，AI 执行
      ↓
近期：人定方向，AI 全流程执行 + 关键点人审
      ↓
中期：AI 提方案 + 执行，人只做最终验收
      ↓
远期：AI 自主开发，人只管战略</code></pre>

        <h3>3.4 可配置的自主级别</h3>

        <p>八步法框架可以作为"渐进放权"的载体：</p>

        <pre class="code-block"><code class="language-yaml"># 可以配置每个 Phase 的自主级别
phases:
  kickoff:
    mode: human_driven           # 人主导
  research:
    mode: ai_autonomous          # AI 自主
  spec:
    mode: ai_propose_human_approve  # AI 提案，人批准
  design:
    mode: ai_propose_human_approve
  code:
    mode: ai_autonomous
  test:
    mode: ai_autonomous
  deploy:
    mode: human_trigger          # 人触发，AI 执行</code></pre>

        <hr />

        <h2>第四部分：自我反思与训练数据</h2>

        <h3>4.1 核心问题</h3>

        <blockquote>
          AI 的自我反思能否形成正向循环，让下一代模型更强？
        </blockquote>

        <pre class="code-block"><code>模型 v1 生成 + 自检 → 高质量输出
                         ↓
                    作为训练数据
                         ↓
                    模型 v2 更强
                         ↓
                    更好的自检能力
                         ↓
                       ...循环</code></pre>

        <h3>4.2 相关研究方向</h3>

        <ul>
          <li><strong>Self-Improvement / 自我改进</strong></li>
          <li><strong>Recursive Self-Improvement / 递归自我改进</strong></li>
          <li><strong>Bootstrapping / 自举</strong></li>
          <li><strong>Constitutional AI</strong> - 用 AI 评判 AI 输出</li>
          <li><strong>RLHF</strong> - 人类反馈强化学习</li>
          <li><strong>RLAIF</strong> - AI 反馈强化学习（用 AI 代替部分人类反馈）</li>
        </ul>

        <h3>4.3 自我训练的风险</h3>

        <pre class="code-block warning-box"><code>自己教自己 → 可能放大错误
           → "模型坍塌"风险（Model Collapse）
           → 需要外部信号校准</code></pre>

        <h3>4.4 外部校准信号的价值</h3>

        <p>八步法中的 <strong>Expert Review + Phase Gate</strong> 提供了<strong>外部校准信号</strong>：</p>

        <pre class="code-block"><code>AI 生成 → Expert Review（另一个 AI）→ 人类最终确认
                                         ↓
                                    这个确认信号
                                    才是最有价值的训练数据</code></pre>

        <p><strong>人类的"通过/打回"决策</strong>比 AI 自己的自检更有训练价值，因为它提供了：</p>

        <ul>
          <li>真实的质量标准</li>
          <li>外部的 ground truth</li>
          <li>不会自我强化偏见</li>
        </ul>

        <h3>4.5 数据使用政策（一般情况）</h3>

        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>场景</th>
                <th>训练数据使用可能性</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>API 调用（企业用户）</td><td>通常<strong>不用于训练</strong>（隐私承诺）</td></tr>
              <tr><td>免费用户</td><td><strong>可能用于训练</strong>（取决于设置）</td></tr>
              <tr><td>付费用户</td><td>通常可以 <strong>opt-out</strong></td></tr>
            </tbody>
          </table>
        </div>

        <p class="note">注：具体政策因厂商而异，需查阅官方文档。</p>

        <!-- 第三张图片 -->
        <figure class="article-image">
          <img src="/images/blog/ai-planning-part3.png" alt="自我反思与训练讨论截图" />
          <figcaption>自我反思与训练数据 - 对话截图</figcaption>
        </figure>

        <hr />

        <h2>第五部分：实践建议</h2>

        <h3>5.1 可落地的优化方向</h3>

        <ol>
          <li><strong>Phase Gate 自动化</strong> - 不用手动触发，AI 完成一个 Phase 自动进入 Gate 检查</li>
          <li><strong>Expert Review 作为 Hook</strong> - 写一个 Hook，每次生成重要产出物前自动调用 review agent</li>
          <li><strong>信心分数机制</strong> - AI 给每个决策打分，低于阈值才需要人介入</li>
        </ol>

        <pre class="code-block"><code class="language-python"># 伪代码概念
if ai_confidence < 0.7:
    request_human_review()
else:
    proceed_automatically()</code></pre>

        <h3>5.2 推荐的规划 Prompt 模板</h3>

        <pre class="code-block"><code># 任务规划模板

## 1. 需求澄清
- 用户原始需求：[原文]
- 我理解的真实意图：[解读]
- 需要确认的假设：[列表]

## 2. 方案设计
- 方案 A：[描述] | 优点：... | 缺点：...
- 方案 B：[描述] | 优点：... | 缺点：...
- 推荐：[选择] | 理由：[为什么]

## 3. 执行步骤
- [ ] Step 1：[具体动作]
- [ ] Step 2：[具体动作]
...

## 4. 验收标准
- [ ] 功能：[预期行为]
- [ ] 质量：[测试通过/无报错]</code></pre>

        <hr />

        <h2>总结</h2>

        <div class="table-wrapper">
          <table class="summary-table">
            <thead>
              <tr>
                <th>主题</th>
                <th>核心洞察</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>AI 如何规划</td><td>有内部过程，但是隐式、压缩的</td></tr>
              <tr><td>八步法的价值</td><td>把隐式思考显式化，使其可审查、可干预</td></tr>
              <tr><td>AI 自检机制</td><td>存在但不可审计，不如独立评审可靠</td></tr>
              <tr><td>AI 完全自驱动</td><td>技术上越来越近，意图理解和责任归属是真正瓶颈</td></tr>
              <tr><td>自我反思与训练</td><td>有价值但有风险，外部校准信号更重要</td></tr>
            </tbody>
          </table>
        </div>

        <blockquote class="conclusion">
          人机协作框架（如 CC_COLLABORATION 八步法）的本质价值，不是教 AI 怎么做事，而是<strong>把 AI 的隐式能力显式化</strong>，让人类可以观察、审核、干预，并在此过程中提供高质量的训练信号，形成正向循环。
        </blockquote>

        <p class="final">
          本文基于 Claude (Opus 4.5) 与用户的真实对话整理而成。
        </p>
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
  margin-bottom: var(--spacing-2);
}

.author-line {
  font-size: var(--font-size-base);
  opacity: 0.8;
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

.article-content .lead {
  font-size: var(--font-size-xl);
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
  line-height: 1.8;
  margin-bottom: var(--spacing-8);
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
  margin-top: var(--spacing-6);
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
  font-style: italic;
  color: var(--color-primary-800);
}

.article-content blockquote.key-question {
  background: linear-gradient(135deg, var(--color-primary-50) 0%, rgba(118, 75, 162, 0.1) 100%);
  font-size: var(--font-size-xl);
  text-align: center;
  padding: var(--spacing-8);
  font-weight: var(--font-weight-medium);
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

/* Code blocks */
.code-block {
  background: var(--color-neutral-900);
  color: #e0e0e0;
  padding: var(--spacing-6);
  border-radius: var(--radius-lg);
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: var(--font-size-sm);
  line-height: 1.6;
  margin: var(--spacing-6) 0;
}

.code-block.highlight-box {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 1px solid var(--color-primary);
}

.code-block.warning-box {
  background: linear-gradient(135deg, #2d1b1b 0%, #1a1a2e 100%);
  border-left: 4px solid #e74c3c;
}

/* Tables */
.table-wrapper {
  overflow-x: auto;
  margin: var(--spacing-6) 0;
}

.article-content table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.article-content th,
.article-content td {
  padding: var(--spacing-4) var(--spacing-5);
  text-align: left;
  border-bottom: 1px solid var(--color-border-light);
}

.article-content th {
  background: var(--color-neutral-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.article-content td {
  color: var(--color-text-secondary);
}

.article-content .summary-table th {
  background: var(--gradient-primary);
  color: white;
}

/* Images */
.article-image {
  margin: var(--spacing-10) 0;
  text-align: center;
}

.article-image img {
  max-width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.article-image figcaption {
  margin-top: var(--spacing-4);
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
  font-style: italic;
}

.highlight {
  background: linear-gradient(120deg, var(--color-primary-100) 0%, var(--color-primary-100) 100%);
  background-repeat: no-repeat;
  background-size: 100% 40%;
  background-position: 0 90%;
  padding: 0 4px;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.note {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  font-style: italic;
}

.final {
  font-size: var(--font-size-base);
  text-align: center;
  color: var(--color-text-light);
  font-style: italic;
  margin-top: var(--spacing-8);
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

  .code-block {
    font-size: var(--font-size-xs);
    padding: var(--spacing-4);
  }
}
</style>
