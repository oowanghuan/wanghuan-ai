<template>
  <div class="article-page">
    <!-- Article Header -->
    <header class="article-header">
      <div class="container">
        <div class="article-meta">
          <span class="category">AI 协作开发</span>
          <span class="date">2024年12月</span>
          <span class="read-time">10 分钟阅读</span>
        </div>
        <h1>从 AI Coding Template 到人机协同 Workflow</h1>
        <p class="subtitle">——我们是如何把 AI 变成"可执行的同事"的</p>
      </div>
    </header>

    <!-- Article Content -->
    <article class="article-content">
      <div class="container container-sm">
        <p class="lead">
          过去一年里，我们一直在做一件事：<br />
          不是"怎么更好地用 AI 写代码"，而是"怎么把 AI 纳入一个可复制、可扩展的工作流程里"。
        </p>

        <p>
          这件事最终沉淀成了一套我们内部称之为 AI Coding Template 的方法论，以及围绕它构建的一整套 <strong>Workflow + 看板 + 模板 + 工具</strong> 的体系。
        </p>

        <p>这篇文章，我想系统地讲清楚：</p>
        <ul>
          <li>我们到底在解决什么问题</li>
          <li>我们是怎么一步步走到今天这套结构的</li>
          <li>以及，在这套体系下，一个人应该如何和 AI 协作、被要求做什么</li>
        </ul>

        <hr />

        <h2>一、问题从哪里来：AI 很强，但"不会被用"</h2>

        <p>很多人第一次接触 Claude Code、Copilot、各种 AI Agent 时，都会有类似体验：</p>

        <ul>
          <li>AI 很聪明，但输出不稳定</li>
          <li>同样一个问题，不同人用，结果差异极大</li>
          <li>会用的人效率飞起，不会用的人反而更乱</li>
          <li>项目一复杂，AI 的"聪明"开始失控</li>
        </ul>

        <p>本质原因只有一个：</p>

        <blockquote>
          AI 没有被放进一个"固定的工作方式"里。
        </blockquote>

        <p>大多数人用 AI，还是停留在「对话层」：</p>
        <ul>
          <li>想到什么问什么</li>
          <li>需要什么临时编</li>
          <li>没有统一输入、没有统一输出</li>
        </ul>

        <p>这在个人玩玩时没问题，但一旦进入团队协作，就会彻底失效。</p>

        <hr />

        <h2>二、第一步：把"进展"从人脑里拿出来</h2>

        <p>我们最早做的事情，其实很简单：</p>

        <blockquote>
          把项目进展从"人脑"里，变成"结构化文件"。
        </blockquote>

        <p>于是有了：</p>
        <ul>
          <li>Progress / Log / Review 这类 YAML / MD 文档</li>
          <li>每天的进展都落在仓库里</li>
          <li>再通过一个看板，把 GitHub Repo 的内容实时展示出来</li>
        </ul>

        <p>这一步的意义不是"好看"，而是：</p>

        <p class="highlight">进度第一次不依赖"某个人记不记得"。</p>

        <p>但很快我们发现：<br />
        仅仅"记录进展"是不够的。</p>

        <hr />

        <h2>三、关键转折：我们要的不是记录，而是 Workflow</h2>

        <p>真正的转折点，是我们意识到一件事：</p>

        <blockquote>
          我们真正想固化的，不是结果，而是「做事的方式」。
        </blockquote>

        <p>于是，我们开始把所有事情 <strong>串成一个 Workflow</strong>。</p>

        <p>一个 Workflow，意味着什么？</p>
        <ul>
          <li>每一个节点都有明确的「目标」</li>
          <li>每一个节点都有固定的「输入 / 输出」</li>
          <li>每一个节点，都知道：
            <ul>
              <li>能用哪些模板</li>
              <li>能用哪些工具</li>
              <li>哪些是人做，哪些是 AI 做</li>
            </ul>
          </li>
        </ul>

        <p>比如一个 Kickoff 新 Feature 的流程，就会被拆成非常具体的步骤：</p>
        <ul>
          <li><strong>Start Date</strong>：初始化 Feature 目录</li>
          <li><strong>Context</strong>：明确为什么做、做什么、不做什么</li>
          <li><strong>Spec</strong>：定义清晰的功能规格</li>
          <li><strong>Demo / Review / Implement</strong>：逐步推进</li>
        </ul>

        <p>不是"你大概做一下"，而是"你按步骤走"。</p>

        <hr />

        <h2>四、再进一步：把「人做 / AI 做」明确拆开</h2>

        <p>当 Workflow 清晰之后，我们又往前走了一步：</p>

        <blockquote>
          每一个任务，都明确标注：这是人做的，还是 AI 做的。
        </blockquote>

        <ul>
          <li><strong>人做的事情</strong>：判断、决策、取舍、负责结果</li>
          <li><strong>AI 做的事情</strong>：生成、分析、校验、执行重复劳动</li>
        </ul>

        <p>甚至在 GUI 层面，我们做到了：</p>
        <ul>
          <li>在任务后面直接挂按钮</li>
          <li>点击按钮，命令直接传给 Claude Code CLI</li>
          <li>AI 在 CLI 里按既定规范执行</li>
        </ul>

        <p>到这里，AI 已经不再是"聊天对象"，而是：</p>

        <p class="highlight">被嵌入流程里的"执行单元"。</p>

        <hr />

        <h2>五、真正的核心：你要管理的不是 AI，而是"文档质量"</h2>

        <p>走到这一步，我们反而得出了一个非常反直觉的结论：</p>

        <blockquote>
          在这套体系里，最重要的不是 Prompt，而是文档。
        </blockquote>

        <p>你真正需要持续精进的，只有三类东西：</p>
        <ul>
          <li>Skills 的 MD 文档</li>
          <li>Sub-agent 的 MD 文档</li>
          <li>所有 Template 文档（Context / Spec / Review / Log）</li>
        </ul>

        <p>为什么？</p>

        <p>以 Context 文档为例：</p>
        <ul>
          <li>它不仅是信息的承载</li>
          <li>它决定了 AI 后续是否"理解正确"</li>
          <li>它还是不同流程节点、不同角色之间的边界定义</li>
        </ul>

        <p>一个好的 Context 文档，本质上是在做三件事：</p>
        <ul>
          <li><strong>对 AI</strong>：减少幻觉</li>
          <li><strong>对流程</strong>：减少返工</li>
          <li><strong>对人</strong>：减少扯皮</li>
        </ul>

        <p class="highlight">文档质量 = Workflow 稳定性。</p>

        <hr />

        <h2>六、抽象出来的本质：一种新的人机协同模式</h2>

        <p>到这里，其实已经和"Claude Code"本身关系不大了。</p>

        <p>无论背后是：</p>
        <ul>
          <li>Claude Code</li>
          <li>其他 AI Agent</li>
          <li>未来的新工具</li>
        </ul>

        <p>只要遵循同一个原则，都可以接进来：</p>

        <blockquote>
          机器不是自由发挥的，它必须按模板、按规范、按流程执行。
        </blockquote>

        <p>于是，我们得到了一种新的协同范式：</p>
        <ul>
          <li>先把流程梳理清楚</li>
          <li>再拆清楚：哪些是人做，哪些是机器做</li>
          <li>机器做的部分，用模板和规范锁死</li>
          <li>人负责判断、设计和兜底</li>
        </ul>

        <hr />

        <h2>七、这套体系下，对"人"的真实要求是什么？</h2>

        <p>很多人会问：<br />
        那人在这里会不会被 AI 取代？</p>

        <p>我的答案是：<br />
        <strong>不会，但要求会变得非常清晰，也非常残酷。</strong></p>

        <p>在这套体系下，一个新同事进来，我会这样要求他：</p>

        <div class="quote-list">
          <p>你要先理解这套底层逻辑</p>
          <p>明白 Workflow 是怎么跑的</p>
          <p>明白 AI 在哪里是"工具"，哪里是"同事"</p>
        </div>

        <p>然后我会告诉你：</p>

        <div class="quote-list">
          <p>你现在手上有 10 个任务</p>
          <p>其中 8 个，是我们已经和 AI 协作成熟的<br />你只需要按流程执行</p>
          <p>剩下 2 个，是没有模板、没有现成解法的<br />那是你真正创造价值的地方</p>
        </div>

        <hr />

        <h2>结语</h2>

        <p>AI Coding Template 表面上看是一堆：</p>
        <ul>
          <li>YAML</li>
          <li>MD</li>
          <li>Workflow</li>
          <li>看板</li>
          <li>CLI</li>
        </ul>

        <p>但它真正想解决的，从来不是"写代码更快"。</p>

        <p>而是：</p>

        <blockquote class="conclusion">
          在 AI 时代，如何把"做事的方法"本身变成资产。
        </blockquote>

        <p class="final">
          当方法被固化、被模板化、被流程化之后，<br />
          AI 才真正成为了可规模化协作的一部分。
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

.article-content ul {
  margin: var(--spacing-6) 0;
  padding-left: var(--spacing-8);
}

.article-content ul ul {
  margin: var(--spacing-2) 0;
}

.article-content li {
  font-size: var(--font-size-lg);
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-3);
}

.quote-list {
  background: var(--color-neutral-100);
  padding: var(--spacing-6);
  border-radius: var(--radius-xl);
  margin: var(--spacing-6) 0;
}

.quote-list p {
  font-style: italic;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-3);
  padding-left: var(--spacing-4);
  border-left: 2px solid var(--color-neutral-300);
}

.quote-list p:last-child {
  margin-bottom: 0;
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

.final {
  font-size: var(--font-size-xl);
  text-align: center;
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
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
}
</style>
