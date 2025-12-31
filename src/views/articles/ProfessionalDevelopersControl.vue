<template>
  <div class="article-page">
    <!-- Article Header -->
    <header class="article-header">
      <div class="container">
        <div class="article-meta">
          <span class="category">AI 编程观察</span>
          <span class="date">2024年12月</span>
          <span class="read-time">18 分钟阅读</span>
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

        <!-- 延伸：实战操作指南 -->
        <div class="extension-divider">
          <span>延伸阅读</span>
        </div>

        <h2>五、可落地操作指南</h2>

        <p>下面这份建议<strong>不是"AI 很厉害，用就完了"那一套</strong>，而是<strong>面向真实软件团队、真实复杂度、真实协作成本</strong>的「可落地操作指南」。按 <strong>团队层 / 流程层 / 个人层 / 技术层</strong> 四个层级来讲。</p>

        <div class="core-premise">
          <h3>一个前提共识（非常关键）</h3>
          <div class="premise-content">
            <p class="premise-title">AI 不是"自动写代码的员工"，而是"需要被严格管理的超级实习生"。</p>
            <div class="premise-grid">
              <div class="premise-item good">产出快 ✓</div>
              <div class="premise-item bad">自信但可能错 ✗</div>
              <div class="premise-item bad">不知道业务真实边界 ✗</div>
              <div class="premise-item bad">不知道"为什么不能这样做" ✗</div>
            </div>
            <p class="premise-conclusion">所以核心不是"让 AI 写"，而是：<strong>让 AI 在你设计好的"控制框架"里写</strong></p>
          </div>
        </div>

        <hr />

        <h3>团队层：先定「使用原则」，否则必翻车</h3>

        <p>建议直接写进团队规范的三条铁律：</p>

        <div class="iron-rules">
          <div class="iron-rule">
            <div class="rule-number">铁律 1</div>
            <div class="rule-content">
              <h4>AI 不拥有"最终决定权"</h4>
              <ul>
                <li>所有 AI 生成代码必须有人 Review</li>
                <li>必须能解释「为什么这样写」</li>
              </ul>
            </div>
          </div>

          <div class="iron-rule">
            <div class="rule-number">铁律 2</div>
            <div class="rule-content">
              <h4>AI 不做"需求解释者"</h4>
              <ul>
                <li>需求、边界、例外情况 → <strong>人写</strong></li>
                <li>AI 只做：执行、拆分、补全、对齐已有规范</li>
              </ul>
            </div>
          </div>

          <div class="iron-rule">
            <div class="rule-number">铁律 3</div>
            <div class="rule-content">
              <h4>AI 只在"确定性高"的区域放权</h4>
              <ul>
                <li>✅ CRUD / 表结构 / DTO / API glue</li>
                <li>⚠️ 业务核心逻辑</li>
                <li>❌ 资金、权限、风控、并发、结算</li>
              </ul>
            </div>
          </div>
        </div>

        <blockquote>
          如果你让 AI 自己"理解需求 + 设计方案 + 写代码"，那不是用 AI，是在<strong>赌运气</strong>。
        </blockquote>

        <hr />

        <h3>流程层：把 AI 放进流程，而不是"随便用"</h3>

        <p>推荐的「AI-in-the-Loop」标准流程：</p>

        <div class="phase-flow">
          <div class="phase-card phase-0">
            <div class="phase-header">
              <span class="phase-tag">Phase 0</span>
              <span class="phase-title">人定上下文（不可省略）</span>
            </div>
            <div class="phase-body">
              <p>由人完成：</p>
              <ul>
                <li><strong>目标</strong>：做什么 / 不做什么</li>
                <li><strong>成功标准</strong>：什么算完成</li>
                <li><strong>约束</strong>：性能 / 安全 / 兼容性 / 历史包袱</li>
                <li><strong>禁区</strong>：哪些方式绝对不能用</li>
              </ul>
              <p class="phase-note">这是 <strong>Context First</strong>，必须坚持。</p>
            </div>
          </div>

          <div class="phase-card phase-1">
            <div class="phase-header">
              <span class="phase-tag">Phase 1</span>
              <span class="phase-title">AI 做"拆解 & 执行方案草稿"</span>
            </div>
            <div class="phase-body">
              <p>让 AI 做这些事最划算：</p>
              <ul>
                <li>功能拆分</li>
                <li>模块边界建议</li>
                <li>数据结构草稿</li>
                <li>API 草案</li>
                <li>风险点列表（让它"自我找错"）</li>
              </ul>
              <p class="phase-warning">⚠️ 这一步的产物<strong>不是代码</strong>，而是<strong>可审阅的方案文本</strong></p>
            </div>
          </div>

          <div class="phase-card phase-2">
            <div class="phase-header">
              <span class="phase-tag">Phase 2</span>
              <span class="phase-title">人 Review & 收口（最关键）</span>
            </div>
            <div class="phase-body">
              <p>这个阶段必须由<strong>资深的人</strong>来做：</p>
              <ul>
                <li>删掉"看起来聪明但没必要"的复杂设计</li>
                <li>明确哪些模块允许 AI 自由写</li>
                <li>明确哪些模块必须人控细节</li>
                <li>冻结接口、字段、状态机</li>
              </ul>
              <p class="phase-warning">⚠️ 这一步做不好，后面 10 倍返工。</p>
            </div>
          </div>

          <div class="phase-card phase-3">
            <div class="phase-header">
              <span class="phase-tag">Phase 3</span>
              <span class="phase-title">AI 写代码（在围栏内）</span>
            </div>
            <div class="phase-body">
              <p>此时再让 AI 写代码，效果会明显提升。AI 非常擅长：</p>
              <ul>
                <li>把"已确定的结构"变成代码</li>
                <li>补齐重复逻辑</li>
                <li>按规范批量生成</li>
              </ul>
              <p><strong>但必须配套：</strong>lint / test / type / schema，明确"不允许 AI 自创规则"</p>
            </div>
          </div>

          <div class="phase-card phase-4">
            <div class="phase-header">
              <span class="phase-tag">Phase 4</span>
              <span class="phase-title">人做「意义型 Review」</span>
            </div>
            <div class="phase-body">
              <p>Review 的重点<strong>不要</strong>放在缩进、变量名，而是：</p>
              <ul>
                <li>这段逻辑<strong>是否真的符合业务意图</strong></li>
                <li>有没有隐藏状态</li>
                <li>有没有未来维护灾难</li>
                <li>有没有"AI 特有的坏味道"（过度抽象、假灵活）</li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <h3>个人层：不同能力的人，用法要完全不同</h3>

        <div class="role-cards">
          <div class="role-card junior">
            <div class="role-header">
              <span class="role-icon">👶</span>
              <span class="role-title">初级开发者</span>
            </div>
            <div class="role-body">
              <div class="role-section not-allowed">
                <h5>不允许</h5>
                <ul>
                  <li>直接 copy AI 代码上线</li>
                  <li>不理解就用</li>
                </ul>
              </div>
              <div class="role-section allowed">
                <h5>正确用法</h5>
                <ul>
                  <li>让 AI 解释代码</li>
                  <li>让 AI 写测试</li>
                  <li>让 AI 对比两种实现</li>
                </ul>
              </div>
              <p class="role-goal">目标：<strong>加速学习，不是替代思考</strong></p>
            </div>
          </div>

          <div class="role-card mid">
            <div class="role-header">
              <span class="role-icon">🧑‍💻</span>
              <span class="role-title">中级开发者</span>
            </div>
            <div class="role-body">
              <div class="role-section allowed">
                <h5>允许</h5>
                <ul>
                  <li>用 AI 写 60–70% 执行层代码</li>
                </ul>
              </div>
              <div class="role-section required">
                <h5>必须</h5>
                <ul>
                  <li>自己掌控模块边界</li>
                  <li>自己写核心判断逻辑</li>
                  <li>自己做最终 Review</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="role-card senior">
            <div class="role-header">
              <span class="role-icon">🧠</span>
              <span class="role-title">高级 / Architect</span>
            </div>
            <div class="role-body">
              <div class="role-section">
                <h5>AI 的角色是</h5>
                <ul>
                  <li>扩展你的认知边界</li>
                  <li>帮你枚举方案</li>
                  <li>帮你发现盲点</li>
                </ul>
              </div>
              <div class="role-section required">
                <h5>你做的事情是</h5>
                <ul>
                  <li>设计系统</li>
                  <li>决定 trade-off</li>
                  <li>拒绝"看起来很酷但没必要"的方案</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <h3>技术层：必须防住的 5 个"AI 陷阱"</h3>

        <div class="trap-list">
          <div class="trap-card">
            <div class="trap-header">
              <span class="trap-number">陷阱 1</span>
              <span class="trap-title">过度抽象病</span>
            </div>
            <div class="trap-body">
              <p>AI 非常爱：提前设计 extensibility、多层 interface / factory</p>
              <div class="trap-solution">
                <strong>对策：</strong>强制问一句：现在真的需要吗？
              </div>
            </div>
          </div>

          <div class="trap-card">
            <div class="trap-header">
              <span class="trap-number">陷阱 2</span>
              <span class="trap-title">假健壮性</span>
            </div>
            <div class="trap-body">
              <p>AI 会写很多 try/catch、fallback、default，但实际上掩盖 bug、难以排查</p>
              <div class="trap-solution">
                <strong>对策：</strong>宁可失败得响亮，也不要"悄悄错误"
              </div>
            </div>
          </div>

          <div class="trap-card">
            <div class="trap-header">
              <span class="trap-number">陷阱 3</span>
              <span class="trap-title">隐性状态污染</span>
            </div>
            <div class="trap-body">
              <p>常见问题：状态藏在闭包里、副作用不明显、生命周期不清晰</p>
              <div class="trap-solution">
                <strong>对策：</strong>状态显式化，禁止"魔法行为"
              </div>
            </div>
          </div>

          <div class="trap-card">
            <div class="trap-header">
              <span class="trap-number">陷阱 4</span>
              <span class="trap-title">业务边界理解错误</span>
            </div>
            <div class="trap-body">
              <p>AI 不知道：财务不可逆、权限不可猜、风控不可宽松</p>
              <div class="trap-solution">
                <strong>对策：</strong>这些模块：AI 只能辅助，不能主写
              </div>
            </div>
          </div>

          <div class="trap-card">
            <div class="trap-header">
              <span class="trap-number">陷阱 5</span>
              <span class="trap-title">团队能力退化</span>
            </div>
            <div class="trap-body">
              <p>如果长期不看设计、不写核心逻辑、不做决策，团队会变成"会用工具，但不会工程"</p>
              <div class="trap-solution">
                <strong>对策：</strong>强制保留人类负责的"思考区"
              </div>
            </div>
          </div>
        </div>

        <hr />

        <h3>一句话总结</h3>

        <blockquote class="final-conclusion">
          AI 时代，软件团队的核心竞争力，不是写代码速度，而是：<br />
          <strong>能否建立一套「人控制目标、AI 放大执行」的工程体系。</strong>
        </blockquote>

        <hr />

        <h2>六、下一步行动建议</h2>

        <p>如果你认同以上观点，下一步可以考虑这三件具体的事：</p>

        <div class="next-steps">
          <div class="next-step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>制定团队 AI Coding 使用规范</h4>
              <p>把上述铁律和流程写成可直接内部发布的规范文档，让团队有章可循。</p>
            </div>
          </div>

          <div class="next-step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>建立 AI 角色分工表</h4>
              <p>按照 Spec-Driven 流程，明确在每个阶段中 AI 和人各自的职责边界。</p>
            </div>
          </div>

          <div class="next-step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>定义"红线清单"</h4>
              <p>列出哪些模块永远不能完全交给 AI —— 资金、权限、风控、结算等核心逻辑。</p>
            </div>
          </div>
        </div>

        <blockquote>
          选一个方向，直接往实战里走。<br />
          理论再好，不落地就是空谈。
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

/* Extension Divider */
.extension-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--spacing-16) 0;
  position: relative;
}

.extension-divider::before,
.extension-divider::after {
  content: '';
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
}

.extension-divider span {
  padding: 0 var(--spacing-6);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Core Premise */
.core-premise {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  margin: var(--spacing-8) 0;
}

.core-premise h3 {
  margin-top: 0;
  color: #92400e;
}

.premise-content {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
}

.premise-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  text-align: center;
  margin-bottom: var(--spacing-4);
}

.premise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-4);
}

.premise-item {
  padding: var(--spacing-3);
  border-radius: var(--radius-md);
  text-align: center;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.premise-item.good {
  background: #dcfce7;
  color: #166534;
}

.premise-item.bad {
  background: #fee2e2;
  color: #991b1b;
}

.premise-conclusion {
  text-align: center;
  font-size: var(--font-size-lg);
  margin: 0;
}

/* Iron Rules */
.iron-rules {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  margin: var(--spacing-6) 0;
}

.iron-rule {
  display: flex;
  gap: var(--spacing-4);
  background: white;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--spacing-5);
  align-items: flex-start;
}

.rule-number {
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  color: white;
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-md);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  white-space: nowrap;
}

.rule-content h4 {
  margin: 0 0 var(--spacing-2) 0;
}

.rule-content ul {
  margin: 0;
  padding-left: var(--spacing-5);
}

.rule-content li {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-1);
}

/* Phase Flow */
.phase-flow {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  margin: var(--spacing-6) 0;
}

.phase-card {
  background: white;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.phase-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-4) var(--spacing-5);
  background: var(--color-neutral-50);
  border-bottom: 1px solid var(--color-border-light);
}

.phase-tag {
  background: var(--color-primary);
  color: white;
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
}

.phase-0 .phase-tag { background: #7c3aed; }
.phase-1 .phase-tag { background: #2563eb; }
.phase-2 .phase-tag { background: #dc2626; }
.phase-3 .phase-tag { background: #059669; }
.phase-4 .phase-tag { background: #d97706; }

.phase-title {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.phase-body {
  padding: var(--spacing-5);
}

.phase-body p {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-3);
}

.phase-body ul {
  margin: var(--spacing-3) 0;
  padding-left: var(--spacing-5);
}

.phase-body li {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-2);
}

.phase-note {
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
}

.phase-warning {
  color: #b45309;
  font-weight: var(--font-weight-medium);
}

/* Role Cards */
.role-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-6);
  margin: var(--spacing-6) 0;
}

.role-card {
  background: white;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.role-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-4) var(--spacing-5);
  border-bottom: 1px solid var(--color-border-light);
}

.role-card.junior .role-header { background: #fef3c7; }
.role-card.mid .role-header { background: #dbeafe; }
.role-card.senior .role-header { background: #f3e8ff; }

.role-icon {
  font-size: 24px;
}

.role-title {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.role-body {
  padding: var(--spacing-5);
}

.role-section {
  margin-bottom: var(--spacing-4);
}

.role-section:last-child {
  margin-bottom: 0;
}

.role-section h5 {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-2);
  color: var(--color-text-secondary);
}

.role-section.not-allowed h5 { color: #dc2626; }
.role-section.allowed h5 { color: #059669; }
.role-section.required h5 { color: #7c3aed; }

.role-section ul {
  margin: 0;
  padding-left: var(--spacing-5);
}

.role-section li {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-1);
}

.role-goal {
  font-size: var(--font-size-sm);
  text-align: center;
  padding: var(--spacing-3);
  background: var(--color-neutral-50);
  border-radius: var(--radius-md);
  margin: var(--spacing-4) 0 0;
}

/* Trap List */
.trap-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  margin: var(--spacing-6) 0;
}

.trap-card {
  background: white;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.trap-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-4) var(--spacing-5);
  background: #fef2f2;
  border-bottom: 1px solid #fecaca;
}

.trap-number {
  background: #dc2626;
  color: white;
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
}

.trap-title {
  font-weight: var(--font-weight-semibold);
  color: #991b1b;
}

.trap-body {
  padding: var(--spacing-5);
}

.trap-body p {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-3);
}

.trap-solution {
  background: #ecfdf5;
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  color: #065f46;
}

/* Final Conclusion */
.article-content blockquote.final-conclusion {
  background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
  color: white;
  border-left: none;
  font-style: normal;
  font-size: var(--font-size-xl);
  text-align: center;
  padding: var(--spacing-10);
  border-radius: var(--radius-xl);
}

.article-content blockquote.final-conclusion strong {
  color: white;
}

/* Next Steps */
.next-steps {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  margin: var(--spacing-6) 0;
}

.next-step-card {
  display: flex;
  gap: var(--spacing-4);
  background: white;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--spacing-5);
  align-items: flex-start;
  transition: all var(--transition-fast);
}

.next-step-card:hover {
  border-color: var(--color-primary-200);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.1);
}

.step-number {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
}

.step-content h4 {
  margin: 0 0 var(--spacing-2) 0;
  color: var(--color-text-primary);
}

.step-content p {
  margin: 0;
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
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
