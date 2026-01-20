<template>
  <div class="article-page">
    <!-- Article Header -->
    <header class="article-header">
      <div class="container">
        <div class="article-meta">
          <span class="category">AI 协作开发</span>
          <span class="date">2026年1月</span>
          <span class="read-time">20 分钟阅读</span>
        </div>
        <h1>写给新同事：Claude Code + AI Coding Template 入门指南</h1>
        <p class="subtitle">从零开始，让你第一天就能和 AI 一起写代码</p>
      </div>
    </header>

    <!-- Article Content -->
    <article class="article-content">
      <div class="container container-sm">
        <!-- 开场白 -->
        <p>嗨，欢迎加入团队！</p>

        <p>你可能已经听说过我们团队"有点不一样"——我们每天都在和 AI 一起写代码。不是偶尔问问 ChatGPT，而是<strong>把 AI 当成真正的编程伙伴</strong>，让它帮我们写代码、写文档、做测试。</p>

        <p>这篇文章会手把手教你两件事：</p>

        <div class="two-things">
          <div class="thing-card">
            <h4>第一，Claude Code</h4>
            <p>Anthropic 官方出的 AI 编程工具，直接在终端里和 AI 对话写代码。</p>
          </div>
          <div class="thing-card">
            <h4>第二，AI Coding Template</h4>
            <p>我们团队的人机协作开发框架，让 AI 协作变得可重复、可交付。</p>
          </div>
        </div>

        <blockquote class="highlight-quote">
          <strong>核心理念：人类决策 + AI 执行 + 质量把控</strong>
        </blockquote>

        <hr />

        <h2>一、Claude Code 是什么？</h2>

        <p>简单来说，Claude Code 是一个<strong>命令行 AI 助手</strong>，它能：</p>

        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">📖</div>
            <h4>读懂你的代码</h4>
            <p>自动理解项目结构、文件关系、代码逻辑</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">✏️</div>
            <h4>帮你写代码</h4>
            <p>新增功能、修复 Bug、重构代码，它都能干</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔧</div>
            <h4>执行命令</h4>
            <p>运行测试、构建项目、执行 Git 操作</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h4>搜索分析</h4>
            <p>在代码库中搜索、分析依赖关系</p>
          </div>
        </div>

        <h3>和普通 ChatGPT 的区别</h3>

        <div class="comparison-grid">
          <div class="comparison-card old">
            <h4>普通 ChatGPT</h4>
            <ul>
              <li>你要手动复制粘贴代码</li>
              <li>它不知道你项目的上下文</li>
              <li>生成的代码要你自己放到文件里</li>
              <li>不能帮你跑命令</li>
            </ul>
          </div>
          <div class="comparison-card new">
            <h4>Claude Code</h4>
            <ul>
              <li><strong>直接读你的文件</strong>，自动理解</li>
              <li><strong>知道整个项目结构</strong>和代码关系</li>
              <li><strong>直接写入文件</strong>，改好就生效</li>
              <li><strong>帮你执行命令</strong>，一气呵成</li>
            </ul>
          </div>
        </div>

        <hr />

        <h2>二、10 分钟安装 Claude Code</h2>

        <h3>Step 1：安装</h3>

        <div class="code-block">
          <div class="code-header">Terminal</div>
          <pre><code># 使用 npm 安装（推荐）
npm install -g @anthropic-ai/claude-code

# 或者使用 Homebrew (macOS)
brew install claude-code</code></pre>
        </div>

        <h3>Step 2：登录认证</h3>

        <div class="code-block">
          <div class="code-header">Terminal</div>
          <pre><code># 启动 Claude Code
claude

# 首次运行会提示登录
# 按照提示完成 Anthropic 账号认证即可</code></pre>
        </div>

        <h3>Step 3：在项目目录启动</h3>

        <div class="code-block">
          <div class="code-header">Terminal</div>
          <pre><code># 进入你的项目目录
cd your-project

# 启动 Claude Code
claude</code></pre>
        </div>

        <div class="tip-box">
          <h4>小贴士</h4>
          <p>Claude Code 会自动扫描当前目录，理解你的项目结构。所以<strong>一定要在项目根目录启动</strong>！</p>
        </div>

        <hr />

        <h2>三、Claude Code 常用命令速查</h2>

        <p>进入 Claude Code 后，你可以直接用自然语言和它对话，但也有一些快捷命令：</p>

        <div class="command-table">
          <div class="command-row header">
            <span class="cmd">命令</span>
            <span class="desc">说明</span>
          </div>
          <div class="command-row">
            <span class="cmd">/help</span>
            <span class="desc">查看帮助</span>
          </div>
          <div class="command-row">
            <span class="cmd">/clear</span>
            <span class="desc">清除当前对话历史</span>
          </div>
          <div class="command-row">
            <span class="cmd">/compact</span>
            <span class="desc">压缩上下文，释放 token</span>
          </div>
          <div class="command-row">
            <span class="cmd">/cost</span>
            <span class="desc">查看本次会话的 token 消耗</span>
          </div>
          <div class="command-row">
            <span class="cmd">/doctor</span>
            <span class="desc">诊断环境问题</span>
          </div>
          <div class="command-row">
            <span class="cmd">Ctrl+C</span>
            <span class="desc">中断当前操作</span>
          </div>
          <div class="command-row">
            <span class="cmd">Esc → Esc</span>
            <span class="desc">退出 Claude Code</span>
          </div>
        </div>

        <hr />

        <h2>四、AI Coding Template 是什么？</h2>

        <p>好，Claude Code 你已经会用了。但问题来了：</p>

        <div class="question-list">
          <div class="question-item">"AI 生成的代码质量怎么保证？"</div>
          <div class="question-item">"怎么让 AI 理解复杂的业务需求？"</div>
          <div class="question-item">"多人协作时，AI 怎么保持一致？"</div>
          <div class="question-item">"上下文丢失了怎么恢复？"</div>
        </div>

        <p>这就是 <strong>AI Coding Template</strong> 要解决的问题——<br/>它是一套<strong>经过实战验证的 AI 协作开发框架</strong>。</p>

        <div class="project-link">
          <a href="https://github.com/oowanghuan/ai-coding-template" target="_blank">
            <span class="icon">📦</span>
            <span class="text">github.com/oowanghuan/ai-coding-template</span>
            <span class="arrow">→</span>
          </a>
        </div>

        <h3>核心解决的问题</h3>

        <div class="problem-solution">
          <div class="problem-card">
            <div class="problem-header">
              <span class="icon">😰</span>
              <span class="title">问题：AI 一路狂奔到错误终点</span>
            </div>
            <div class="solution">
              <span class="arrow">→</span>
              <span class="text"><strong>Phase Gate 机制</strong>：每个阶段设置质量关卡，必须通过才能进入下一步</span>
            </div>
          </div>

          <div class="problem-card">
            <div class="problem-header">
              <span class="icon">🤔</span>
              <span class="title">问题：AI 自己写自己审，容易自嗨</span>
            </div>
            <div class="solution">
              <span class="arrow">→</span>
              <span class="text"><strong>独立评审</strong>：引入另一个 AI（如 GPT-4）做交叉评审，避免自审偏差</span>
            </div>
          </div>

          <div class="problem-card">
            <div class="problem-header">
              <span class="icon">💨</span>
              <span class="title">问题：上下文丢失，AI 忘了之前说的</span>
            </div>
            <div class="solution">
              <span class="arrow">→</span>
              <span class="text"><strong>标准化文档</strong>：持久化关键信息到文档，随时可以恢复上下文</span>
            </div>
          </div>

          <div class="problem-card">
            <div class="problem-header">
              <span class="icon">🎭</span>
              <span class="title">问题：AI 乱猜字段名，前后端对不上</span>
            </div>
            <div class="solution">
              <span class="arrow">→</span>
              <span class="text"><strong>契约验证</strong>：用 contract_resolver 查询真实 API，不让 AI 瞎编</span>
            </div>
          </div>
        </div>

        <hr />

        <h2>五、8 阶段工作流：从想法到上线</h2>

        <p>AI Coding Template 把开发过程拆成 8 个阶段，每个阶段都有明确的产出：</p>

        <div class="phase-timeline">
          <div class="phase-item">
            <div class="phase-number">0</div>
            <div class="phase-content">
              <h4>Foundation（基础设施）</h4>
              <p>配置项目环境、安装依赖、设置 CI/CD</p>
            </div>
          </div>

          <div class="phase-item">
            <div class="phase-number">1</div>
            <div class="phase-content">
              <h4>Kickoff（启动）</h4>
              <p>明确功能目标、收集背景信息、写 Context 文档</p>
            </div>
          </div>

          <div class="phase-item highlight">
            <div class="phase-number">2</div>
            <div class="phase-content">
              <h4>Spec（规格）⭐ 最重要</h4>
              <p>写清楚"要做什么"，这是 AI 理解需求的核心</p>
            </div>
          </div>

          <div class="phase-item">
            <div class="phase-number">3</div>
            <div class="phase-content">
              <h4>Demo（原型）</h4>
              <p>快速生成可交互的原型，验证交互逻辑</p>
            </div>
          </div>

          <div class="phase-item">
            <div class="phase-number">4</div>
            <div class="phase-content">
              <h4>Design（设计）</h4>
              <p>技术方案设计：API、数据库、组件拆分</p>
            </div>
          </div>

          <div class="phase-item">
            <div class="phase-number">5</div>
            <div class="phase-content">
              <h4>Code（编码）</h4>
              <p>AI 执行编码，人类 Review</p>
            </div>
          </div>

          <div class="phase-item">
            <div class="phase-number">6</div>
            <div class="phase-content">
              <h4>Test（测试）</h4>
              <p>自动化测试 + 手动验收</p>
            </div>
          </div>

          <div class="phase-item">
            <div class="phase-number">7</div>
            <div class="phase-content">
              <h4>Deploy（部署）</h4>
              <p>上线发布、监控告警</p>
            </div>
          </div>
        </div>

        <blockquote>
          <strong>核心原则：先 Spec 后 Code。</strong><br/>
          没有清晰的 Spec，AI 写出来的代码大概率不是你想要的。
        </blockquote>

        <hr />

        <h2>六、Slash 命令：你的日常工作流</h2>

        <p>AI Coding Template 提供了一系列 Slash 命令，让你的工作流标准化：</p>

        <div class="slash-commands">
          <div class="slash-group">
            <h4>每日工作流</h4>
            <div class="slash-item">
              <code>/start-day</code>
              <span>开始新的一天，自动加载昨天的上下文</span>
            </div>
            <div class="slash-item">
              <code>/end-day</code>
              <span>结束工作，自动保存今天的进度和上下文</span>
            </div>
          </div>

          <div class="slash-group">
            <h4>功能开发</h4>
            <div class="slash-item">
              <code>/new-feature [name]</code>
              <span>创建新功能，自动生成目录结构和文档模板</span>
            </div>
            <div class="slash-item">
              <code>/phase-gate</code>
              <span>检查当前阶段是否可以通过</span>
            </div>
          </div>

          <div class="slash-group">
            <h4>文档与契约</h4>
            <div class="slash-item">
              <code>/contract-resolver</code>
              <span>查询真实 API 接口定义，避免字段猜测</span>
            </div>
            <div class="slash-item">
              <code>/expert-review</code>
              <span>调用独立 AI 进行交叉评审</span>
            </div>
          </div>
        </div>

        <hr />

        <h2>七、实战演示：用 AI 开发一个功能</h2>

        <p>让我们用一个真实例子走一遍流程——<strong>给用户列表页添加搜索功能</strong>。</p>

        <h3>Step 1：创建功能</h3>

        <div class="code-block">
          <div class="code-header">Claude Code</div>
          <pre><code>/new-feature user-search</code></pre>
        </div>

        <p>这会自动生成：</p>

        <div class="file-tree">
          <div class="tree-item folder">docs/user-search/</div>
          <div class="tree-item file">├── context.md</div>
          <div class="tree-item file">├── spec.md</div>
          <div class="tree-item file">├── design.md</div>
          <div class="tree-item file">└── test-plan.md</div>
        </div>

        <h3>Step 2：写 Spec（最关键）</h3>

        <p>在 <code>spec.md</code> 里写清楚需求：</p>

        <div class="code-block">
          <div class="code-header">docs/user-search/spec.md</div>
          <pre><code># 用户搜索功能 Spec

## 功能描述
在用户列表页顶部添加搜索框，支持按用户名和邮箱实时搜索。

## 用户故事
- 作为运营人员，我希望能快速找到特定用户，以便查看和处理其信息。

## 功能需求
1. 搜索框位于列表页顶部
2. 支持按用户名模糊匹配
3. 支持按邮箱精确匹配
4. 输入时实时过滤，无需点击搜索按钮
5. 搜索结果高亮匹配文字

## 边界情况
- 空搜索词：显示全部用户
- 无匹配结果：显示"未找到相关用户"
- 搜索词过短（&lt;2字符）：不触发搜索

## 验收标准
- [ ] 搜索响应时间 < 200ms
- [ ] 支持中英文搜索
- [ ] 移动端适配正常</code></pre>
        </div>

        <h3>Step 3：让 AI 读取并开始编码</h3>

        <div class="code-block">
          <div class="code-header">Claude Code</div>
          <pre><code>请阅读 docs/user-search/spec.md，然后帮我实现这个搜索功能。
先给我一个技术方案，确认后再写代码。</code></pre>
        </div>

        <h3>Step 4：Review & 迭代</h3>

        <p>AI 写完后，你来 Review：</p>

        <div class="code-block">
          <div class="code-header">Claude Code</div>
          <pre><code>帮我检查一下这个搜索功能：
1. 性能有没有问题？是否需要 debounce？
2. 中文搜索会不会有问题？
3. 有没有 XSS 风险？</code></pre>
        </div>

        <h3>Step 5：通过 Phase Gate</h3>

        <div class="code-block">
          <div class="code-header">Claude Code</div>
          <pre><code>/phase-gate</code></pre>
        </div>

        <p>系统会自动检查：必需产出物是否齐全、质量检查是否通过。</p>

        <hr />

        <h2>八、新人第一周 Checklist</h2>

        <p>为了帮你快速上手，这是你第一周应该完成的事情：</p>

        <div class="checklist">
          <div class="check-day">
            <h4>Day 1-2：环境搭建</h4>
            <ul>
              <li>安装 Claude Code 并完成认证</li>
              <li>Clone ai-coding-template 仓库</li>
              <li>阅读 README 和项目结构说明</li>
              <li>在一个小项目上试用 Claude Code</li>
            </ul>
          </div>

          <div class="check-day">
            <h4>Day 3-4：流程熟悉</h4>
            <ul>
              <li>用 /new-feature 创建一个练习功能</li>
              <li>完整走一遍 8 阶段流程</li>
              <li>体验 /start-day 和 /end-day 命令</li>
              <li>尝试 /expert-review 做一次交叉评审</li>
            </ul>
          </div>

          <div class="check-day">
            <h4>Day 5：实战参与</h4>
            <ul>
              <li>领取一个真实的小需求</li>
              <li>用 AI Coding Template 流程完成</li>
              <li>和团队成员做 Code Review</li>
              <li>总结遇到的问题和心得</li>
            </ul>
          </div>
        </div>

        <hr />

        <h2>九、常见问题 FAQ</h2>

        <div class="faq-section">
          <div class="faq-item">
            <h4>Q：AI 写的代码质量靠谱吗？</h4>
            <p>A：AI 写代码的质量取决于你给它的 Spec 质量。Spec 写得越清晰，AI 产出越好。这就是为什么我们强调<strong>"先 Spec 后 Code"</strong>。另外，Phase Gate 机制会在每个阶段做质量检查。</p>
          </div>

          <div class="faq-item">
            <h4>Q：上下文长度超限怎么办？</h4>
            <p>A：用 <code>/compact</code> 命令压缩上下文，或者用 <code>/end-day</code> 保存进度后重新开一个会话。标准化文档的好处就是——上下文随时可以从文档恢复。</p>
          </div>

          <div class="faq-item">
            <h4>Q：AI 生成的代码有错怎么办？</h4>
            <p>A：直接告诉它哪里错了，让它改。AI 很擅长根据反馈迭代。记住：你是 Driver，AI 是 Copilot。</p>
          </div>

          <div class="faq-item">
            <h4>Q：多人同时开发同一个功能怎么办？</h4>
            <p>A：用 PM Driver 编排，或者按领域拆分。文档要及时同步到 Git，保证大家看到的 Context 一致。</p>
          </div>
        </div>

        <hr />

        <h2>十、写在最后</h2>

        <p>AI 不会取代程序员，但<strong>会用 AI 的程序员会取代不会用的</strong>。</p>

        <p>AI Coding Template 的核心理念是：</p>

        <div class="principle-highlight">
          <strong>人类决策，AI 执行，质量把控</strong>
        </div>

        <p>你负责：</p>
        <ul>
          <li>定义"做什么"（Spec）</li>
          <li>判断"对不对"（Review）</li>
          <li>决定"行不行"（Phase Gate）</li>
        </ul>

        <p>AI 负责：</p>
        <ul>
          <li>写代码</li>
          <li>写文档</li>
          <li>跑测试</li>
          <li>执行重复性工作</li>
        </ul>

        <blockquote class="final-quote">
          把 AI 当成一个<strong>能力超强但需要你指导的超级实习生</strong>。<br/>
          带好它，它会让你的效率翻倍。
        </blockquote>

        <p>有任何问题，随时在群里问！</p>

        <p>祝你在 AI 协作开发的世界里玩得开心 🚀</p>
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
          <p>觉得有帮助？分享给其他新同事</p>
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
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-4);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
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

.article-content blockquote.highlight-quote {
  background: var(--gradient-subtle);
  border-left-width: 4px;
  font-size: var(--font-size-xl);
  text-align: center;
  padding: var(--spacing-8);
  font-style: normal;
}

.article-content blockquote.final-quote {
  background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
  color: white;
  border-left: none;
  font-style: normal;
  font-size: var(--font-size-xl);
  text-align: center;
  padding: var(--spacing-10);
  border-radius: var(--radius-xl);
}

.article-content blockquote.final-quote strong {
  color: white;
}

.article-content strong {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
}

.article-content code {
  background: var(--color-neutral-100);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-family: 'Fira Code', monospace;
  font-size: 0.9em;
  color: var(--color-primary);
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

/* Two Things */
.two-things {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-6);
  margin: var(--spacing-6) 0;
}

.thing-card {
  background: white;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
}

.thing-card h4 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-3);
}

.thing-card p {
  margin: 0;
  font-size: var(--font-size-base);
}

/* Feature Grid */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-4);
  margin: var(--spacing-6) 0;
}

.feature-card {
  background: white;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--spacing-5);
  text-align: center;
}

.feature-icon {
  font-size: 32px;
  margin-bottom: var(--spacing-3);
}

.feature-card h4 {
  margin-bottom: var(--spacing-2);
  font-size: var(--font-size-base);
}

.feature-card p {
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
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

.comparison-card.old {
  border-left: 4px solid #94a3b8;
}

.comparison-card.new {
  border-left: 4px solid #10b981;
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

/* Code Block */
.code-block {
  background: #1e1e2e;
  border-radius: var(--radius-xl);
  overflow: hidden;
  margin: var(--spacing-6) 0;
}

.code-header {
  background: #313244;
  color: #cdd6f4;
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--font-size-sm);
  font-family: 'Fira Code', monospace;
}

.code-block pre {
  margin: 0;
  padding: var(--spacing-5);
  overflow-x: auto;
}

.code-block code {
  background: transparent;
  color: #cdd6f4;
  font-family: 'Fira Code', monospace;
  font-size: var(--font-size-sm);
  line-height: 1.6;
  padding: 0;
}

/* Tip Box */
.tip-box {
  background: #ecfdf5;
  border-left: 4px solid #10b981;
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
  padding: var(--spacing-5);
  margin: var(--spacing-6) 0;
}

.tip-box h4 {
  color: #059669;
  margin-bottom: var(--spacing-2);
}

.tip-box p {
  margin: 0;
  font-size: var(--font-size-base);
  color: #065f46;
}

/* Command Table */
.command-table {
  background: var(--color-neutral-50);
  border-radius: var(--radius-xl);
  overflow: hidden;
  margin: var(--spacing-6) 0;
}

.command-row {
  display: grid;
  grid-template-columns: 140px 1fr;
  padding: var(--spacing-4) var(--spacing-5);
  border-bottom: 1px solid var(--color-border-light);
}

.command-row:last-child {
  border-bottom: none;
}

.command-row.header {
  background: var(--color-neutral-100);
  font-weight: var(--font-weight-semibold);
}

.command-row .cmd {
  font-family: 'Fira Code', monospace;
  color: var(--color-primary);
  font-size: var(--font-size-sm);
}

.command-row .desc {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

/* Question List */
.question-list {
  background: var(--color-neutral-50);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  margin: var(--spacing-6) 0;
}

.question-item {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  padding: var(--spacing-3) 0;
  border-bottom: 1px dashed var(--color-border-light);
}

.question-item:last-child {
  border-bottom: none;
}

/* Project Link */
.project-link {
  margin: var(--spacing-6) 0;
}

.project-link a {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-5);
  background: linear-gradient(135deg, #1e1e2e 0%, #313244 100%);
  border-radius: var(--radius-xl);
  color: white;
  text-decoration: none;
  transition: all var(--transition-normal);
}

.project-link a:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.project-link .icon {
  font-size: 24px;
}

.project-link .text {
  flex: 1;
  font-family: 'Fira Code', monospace;
  font-size: var(--font-size-sm);
}

.project-link .arrow {
  font-size: 20px;
  opacity: 0.5;
}

/* Problem Solution */
.problem-solution {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  margin: var(--spacing-6) 0;
}

.problem-card {
  background: white;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--spacing-5);
}

.problem-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-3);
}

.problem-header .icon {
  font-size: 24px;
}

.problem-header .title {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.solution {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  background: #ecfdf5;
  border-radius: var(--radius-lg);
}

.solution .arrow {
  color: #10b981;
  font-weight: bold;
}

.solution .text {
  font-size: var(--font-size-base);
  color: #065f46;
}

/* Phase Timeline */
.phase-timeline {
  margin: var(--spacing-8) 0;
  position: relative;
  padding-left: var(--spacing-8);
}

.phase-timeline::before {
  content: '';
  position: absolute;
  left: 18px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border-light);
}

.phase-item {
  display: flex;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-6);
  position: relative;
}

.phase-item.highlight .phase-number {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.phase-number {
  width: 36px;
  height: 36px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sm);
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.phase-content {
  padding-top: 4px;
}

.phase-content h4 {
  margin-bottom: var(--spacing-2);
  font-size: var(--font-size-base);
}

.phase-content p {
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
}

/* Slash Commands */
.slash-commands {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  margin: var(--spacing-6) 0;
}

.slash-group {
  background: var(--color-neutral-50);
  border-radius: var(--radius-xl);
  padding: var(--spacing-5);
}

.slash-group h4 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-4);
  font-size: var(--font-size-base);
}

.slash-item {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-4);
  padding: var(--spacing-3) 0;
  border-bottom: 1px dashed var(--color-border-light);
}

.slash-item:last-child {
  border-bottom: none;
}

.slash-item code {
  min-width: 180px;
  font-size: var(--font-size-sm);
}

.slash-item span {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
}

/* File Tree */
.file-tree {
  background: #1e1e2e;
  border-radius: var(--radius-xl);
  padding: var(--spacing-5);
  margin: var(--spacing-4) 0;
  font-family: 'Fira Code', monospace;
}

.tree-item {
  color: #cdd6f4;
  font-size: var(--font-size-sm);
  padding: var(--spacing-1) 0;
}

.tree-item.folder {
  color: #89b4fa;
}

.tree-item.file {
  padding-left: var(--spacing-2);
}

/* Checklist */
.checklist {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  margin: var(--spacing-6) 0;
}

.check-day {
  background: white;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
}

.check-day h4 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-4);
}

.check-day ul {
  margin: 0;
  padding-left: var(--spacing-5);
}

.check-day li {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-2);
}

/* FAQ */
.faq-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  margin: var(--spacing-6) 0;
}

.faq-item {
  background: var(--color-neutral-50);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
}

.faq-item h4 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-3);
}

.faq-item p {
  margin: 0;
  font-size: var(--font-size-base);
}

/* Principle Highlight */
.principle-highlight {
  background: var(--gradient-primary);
  color: white;
  padding: var(--spacing-6) var(--spacing-8);
  border-radius: var(--radius-xl);
  text-align: center;
  font-size: var(--font-size-2xl);
  margin: var(--spacing-8) 0;
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

  .comparison-grid,
  .two-things,
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .command-row {
    grid-template-columns: 1fr;
    gap: var(--spacing-2);
  }

  .slash-item {
    flex-direction: column;
    gap: var(--spacing-2);
  }

  .slash-item code {
    min-width: auto;
  }
}
</style>
