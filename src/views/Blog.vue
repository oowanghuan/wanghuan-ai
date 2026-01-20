<template>
  <div class="blog-page">
    <!-- Subtle background / atmosphere -->
    <div class="bg" aria-hidden="true"></div>

    <header class="top">
      <div class="kicker">{{ $t('blog.kicker') }}</div>
      <h1 class="title">{{ $t('blog.title') }}</h1>
      <p class="desc">
        {{ $t('blog.desc') }}
      </p>

      <div class="controls">
        <div class="search">
          <span class="search-icon">⌘</span>
          <input
            v-model="searchQuery"
            class="search-input"
            type="text"
            :placeholder="$t('blog.searchPlaceholder')"
            autocomplete="off"
          />
          <button v-if="searchQuery" class="clear-btn" @click="searchQuery = ''" title="清空">×</button>
        </div>

        <div class="chips" role="tablist" aria-label="标签筛选">
          <button
            class="chip"
            :class="{ active: activeTag === allTag }"
            @click="activeTag = allTag"
            role="tab"
          >
            {{ $t('blog.all') }}
          </button>
          <button
            v-for="tag in topTags"
            :key="tag"
            class="chip"
            :class="{ active: activeTag === tag }"
            @click="activeTag = tag"
            role="tab"
          >
            {{ tag }}
          </button>
        </div>
      </div>
    </header>

    <main class="content">
      <!-- Empty -->
      <section v-if="grouped.length === 0" class="empty">
        <div class="empty-title">{{ $t('blog.noResults') }}</div>
        <div class="empty-desc">{{ $t('blog.tryAgain') }}</div>
      </section>

      <!-- Year groups -->
      <section v-for="g in grouped" :key="g.year" class="year-block">
        <div class="year-head">
          <div class="year">{{ g.year }}</div>
          <div class="year-meta">{{ g.items.length }} {{ $t('blog.articles') }}</div>
        </div>

        <ol class="list">
          <li v-for="post in g.items" :key="post.slug" class="item">
            <router-link v-if="post.isInternal" class="item-link" :to="post.link">
              <article class="row">
                <div class="row-main">
                  <div class="row-title">{{ post.title }}</div>
                  <div v-if="post.subtitle" class="row-sub">{{ post.subtitle }}</div>
                  <div class="row-summary">{{ post.summary }}</div>
                  <div class="row-meta">
                    <span class="meta-text">{{ post.dateDisplay }}{{ post.readingMins ? ` · ${post.readingMins} min` : '' }}</span>
                    <span class="meta-tags">
                      <span v-for="t in post.tags" :key="t" class="tag">{{ t }}</span>
                    </span>
                  </div>
                </div>
                <div class="row-arrow" aria-hidden="true">→</div>
              </article>
            </router-link>

            <a v-else class="item-link" :href="post.link" target="_blank">
              <article class="row">
                <div class="row-main">
                  <div class="row-title">
                    {{ post.title }}
                    <span class="external-icon">↗</span>
                  </div>
                  <div v-if="post.subtitle" class="row-sub">{{ post.subtitle }}</div>
                  <div class="row-summary">{{ post.summary }}</div>
                  <div class="row-meta">
                    <span class="meta-text">{{ post.dateDisplay }}{{ post.readingMins ? ` · ${post.readingMins} min` : '' }}</span>
                    <span class="meta-tags">
                      <span v-for="t in post.tags" :key="t" class="tag">{{ t }}</span>
                    </span>
                  </div>
                </div>
                <div class="row-arrow" aria-hidden="true">→</div>
              </article>
            </a>
          </li>
        </ol>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-line"></div>
      <div class="footer-text">
        {{ $t('blog.footerCta') }}
        <router-link class="footer-link" to="/products">{{ $t('blog.footerLink') }}</router-link>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const searchQuery = ref('')
const allTag = computed(() => t('blog.all'))
const activeTag = ref(allTag.value)

const posts = ref([
  {
    title: '写给新同事：Claude Code + AI Coding Template 入门指南',
    subtitle: '从零开始，让你第一天就能和 AI 一起写代码',
    slug: 'claude-code-onboarding',
    date: '2026-01-19',
    dateDisplay: '2026/01/19',
    tags: ['AI-Coding', 'Onboarding', 'Tutorial'],
    summary: '手把手教你使用 Claude Code 和 AI Coding Template：10分钟安装配置、8阶段工作流、Slash命令速查、实战演示。附新人第一周 Checklist 和常见问题 FAQ。',
    readingMins: 20,
    link: '/blog/claude-code-onboarding',
    isInternal: true
  },
  {
    title: "Don't Treat AI as a God, Treat It as Your 24/7 \"Super Intern\"",
    subtitle: 'How to Actually Use AI in Real Life and Real Work',
    slug: 'ai-super-intern-en',
    date: '2026-01-08',
    dateDisplay: '2026/01/08',
    tags: ['AI-Guide', 'Mindset', 'Beginner', 'English'],
    summary: 'Demystifying AI: it\'s a "word prediction master + super database", not a god. When in doubt, ask AI. Hand the "mentally draining first draft" to AI, keep the "valuable judgment call" for yourself. Includes: career-level practice guide + Prompt/Context/Task optimization tips.',
    readingMins: 15,
    link: '/blog/ai-super-intern-en',
    isInternal: true
  },
  {
    title: '写给朋友们：别把 AI 当神，把它当那个随叫随到的「超级实习生」',
    subtitle: '在真实生活和真实职场里，AI 到底应该怎么用',
    slug: 'ai-super-intern',
    date: '2026-01-06',
    dateDisplay: '2026/01/06',
    tags: ['AI-Guide', 'Mindset', 'Beginner'],
    summary: '祛魅 AI：它是「文字接龙高手 + 超级资料库」，不是神。遇事不决问AI，把「最消耗心力的第一稿」交给 AI，把「最值钱的判断权」留给自己。附：职场分层实战指南 + Prompt/Context/Task 三维调优心法。',
    readingMins: 15,
    link: '/blog/ai-super-intern',
    isInternal: true
  },
  {
    title: '专业软件开发者不靠感觉，靠掌控',
    subtitle: 'Hacker News 热议：AI 编程时代，开发者的角色正在转变',
    slug: 'professional-developers-control',
    date: '2025-12-31',
    dateDisplay: '2025/12/31',
    tags: ['AI-Coding', 'Reflection', 'Role'],
    summary: '专业工程师不只靠感觉，而是靠掌控和控制。AI 并不能替代软件工程经验，职业开发者的价值正从写代码向监督代码、评估代码、架构控制转移。附：团队/流程/个人/技术四层可落地操作指南。',
    readingMins: 18,
    link: '/blog/professional-developers-control',
    isInternal: true
  },
  {
    title: 'AI Coding Template 项目规模化开发探讨',
    subtitle: '会议纪要：功能拆解、大文档管理与 API 契约驱动开发',
    slug: 'ai-coding-template-scaling',
    date: '2025-12-29',
    dateDisplay: '2025/12/29',
    tags: ['AI-Coding', 'Spec-Driven', 'Architecture'],
    summary: '从简单工具到企业级系统的规模化挑战，以及"抓大放小、契约优先"的解决方案：领域驱动拆分、API 契约优先、AI 角色模拟、大文档 Token 优化等最佳实践。',
    readingMins: 15,
    link: '/blog/ai-coding-template-scaling',
    isInternal: true
  },
  {
    title: 'AI 规划能力与自我反思机制：一次深度对话',
    subtitle: '从"能写代码"到"能自校验"的关键机制',
    slug: 'ai-planning-and-reflection',
    date: '2025-12-19',
    dateDisplay: '2025/12/19',
    tags: ['AI-Coding', 'Reflection', 'Architecture'],
    summary: '在开发 AI 协作开发框架过程中，梳理 AI 如何规划、如何自我校验、以及我们该如何把这些能力变成工程化流程。',
    readingMins: 12,
    link: '/blog/ai-planning-and-reflection',
    isInternal: true
  },
  {
    title: '从 AI Coding Template 到人机协同 Workflow',
    subtitle: '让 AI 变成可重复、可交付的"同事"',
    slug: 'ai-coding-template-to-workflow',
    date: '2025-12-10',
    dateDisplay: '2025/12/10',
    tags: ['Workflow', 'Spec-Driven', 'Tooling'],
    summary: '把对话变成流程：Context → Spec → Demo → Review → Integrate。以及在团队协作中如何避免 spec 过大与上下文爆炸。',
    readingMins: 10,
    link: '/blog/ai-coding-template-to-workflow',
    isInternal: true
  },
  {
    title: 'AI 的三不渡',
    subtitle: '写给 AI Coding 时代的先行者',
    slug: 'ai-three-non-deliverances',
    date: '2025-12-05',
    dateDisplay: '2025/12/05',
    tags: ['Reflection', 'Philosophy'],
    summary: '无缘者不渡、无信者不渡、无愿者不渡。AI 将渡的是愿意自渡的人。',
    readingMins: 6,
    link: '/blog/ai-three-non-deliverances',
    isInternal: true
  },
  {
    title: '为什么传统开发模式在 AI 时代失效了',
    slug: 'why-change',
    date: '2025-11-28',
    dateDisplay: '2025/11/28',
    tags: ['Team', 'Transformation'],
    summary: '探讨 AI coding 带来的三个核心变化：编码成本趋零、瓶颈转移、协作模式重构。',
    readingMins: 8,
    link: 'https://ai-coding-org.vercel.app/why-change',
    isInternal: false
  },
  {
    title: 'AI Product Engineer：新时代的核心角色',
    slug: 'ai-pe',
    date: '2025-11-20',
    dateDisplay: '2025/11/20',
    tags: ['AI-Coding', 'Role', 'Team'],
    summary: '详解 AI PE 的职责、能力要求和工作方式，为什么它是连接需求和实现的关键。',
    readingMins: 10,
    link: 'https://ai-coding-org.vercel.app/deep-dive/ai-pe',
    isInternal: false
  },
  {
    title: 'Spec 驱动开发：让 AI 更好地理解需求',
    slug: 'spec-driven',
    date: '2025-11-15',
    dateDisplay: '2025/11/15',
    tags: ['Spec-Driven', 'Tooling', 'Process'],
    summary: '如何写出 AI 能理解的结构化需求文档，提高 AI 生成代码的质量。',
    readingMins: 9,
    link: 'https://ai-coding-org.vercel.app/deep-dive/ai-pe-spec-template',
    isInternal: false
  },
  {
    title: '架构师在 AI 时代的新定位',
    slug: 'architect-kickoff',
    date: '2025-11-10',
    dateDisplay: '2025/11/10',
    tags: ['Architecture', 'Role', 'Team'],
    summary: '从写代码到定规则，架构师如何成为 AI 开发的"规则制定者"。',
    readingMins: 7,
    link: 'https://ai-coding-org.vercel.app/deep-dive/architect-kickoff',
    isInternal: false
  }
])

// 取常用标签（前 6 个）
const topTags = computed(() => {
  const map = new Map()
  for (const p of posts.value) {
    for (const t of p.tags) map.set(t, (map.get(t) ?? 0) + 1)
  }
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map((x) => x[0])
})

const filtered = computed(() => {
  const kw = searchQuery.value.trim().toLowerCase()

  return posts.value
    .filter((p) => {
      const tagOK = activeTag.value === allTag.value ? true : p.tags.includes(activeTag.value)
      if (!tagOK) return false
      if (!kw) return true

      const hay = [
        p.title,
        p.subtitle ?? '',
        p.summary,
        p.tags.join(' '),
        p.date,
      ]
        .join(' ')
        .toLowerCase()

      return hay.includes(kw)
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
})

const grouped = computed(() => {
  const byYear = new Map()
  for (const p of filtered.value) {
    const y = p.date.slice(0, 4)
    if (!byYear.has(y)) byYear.set(y, [])
    byYear.get(y).push(p)
  }
  return [...byYear.entries()]
    .sort((a, b) => (a[0] < b[0] ? 1 : -1))
    .map(([year, items]) => ({ year, items }))
})
</script>

<style scoped>
.blog-page {
  position: relative;
  min-height: 100vh;
  color: rgba(255, 255, 255, 0.92);
  padding: 120px 24px 60px;
}

.bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  background:
    radial-gradient(900px 700px at 20% 10%, rgba(139, 92, 246, 0.22), transparent 60%),
    radial-gradient(700px 500px at 80% 20%, rgba(59, 130, 246, 0.16), transparent 55%),
    radial-gradient(800px 700px at 55% 90%, rgba(139, 92, 246, 0.10), transparent 55%),
    linear-gradient(180deg, #0c0a1d 0%, #1a1333 40%, #0f172a 100%);
}

/* Layout */
.top,
.content,
.footer {
  max-width: 1080px;
  margin: 0 auto;
}

.kicker {
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(167, 139, 250, 0.8);
  margin-bottom: 10px;
}

.title {
  font-size: 34px;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 10px;
  font-weight: 650;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.desc {
  margin: 0;
  max-width: 840px;
  line-height: 1.7;
  color: rgba(196, 181, 253, 0.7);
}

/* Controls */
.controls {
  margin-top: 28px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
}

.search {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 14px;
  background: rgba(26, 19, 51, 0.6);
  border: 1px solid rgba(139, 92, 246, 0.2);
  backdrop-filter: blur(12px);
  min-width: 320px;
  flex: 1 1 320px;
  transition: all 0.2s ease;
}

.search:focus-within {
  border-color: rgba(139, 92, 246, 0.5);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
}

.search-icon {
  font-size: 12px;
  opacity: 0.55;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 8px;
  padding: 4px 6px;
  color: rgba(167, 139, 250, 0.8);
}

.search-input {
  width: 100%;
  background: transparent;
  border: 0;
  outline: none;
  color: rgba(255, 255, 255, 0.86);
  font-size: 14px;
}

.search-input::placeholder {
  color: rgba(196, 181, 253, 0.5);
}

.clear-btn {
  border: 0;
  background: rgba(139, 92, 246, 0.2);
  color: rgba(196, 181, 253, 0.8);
  width: 26px;
  height: 26px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease;
}

.clear-btn:hover {
  background: rgba(139, 92, 246, 0.4);
}

.chips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
}

.chip {
  border: 1px solid rgba(139, 92, 246, 0.2);
  background: rgba(26, 19, 51, 0.5);
  color: rgba(196, 181, 253, 0.72);
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 13px;
  cursor: pointer;
  transition: 0.2s ease;
}

.chip:hover {
  background: rgba(139, 92, 246, 0.15);
  border-color: rgba(139, 92, 246, 0.4);
}

.chip.active {
  border-color: rgba(139, 92, 246, 0.6);
  background: rgba(139, 92, 246, 0.25);
  color: rgba(255, 255, 255, 0.92);
}

/* Content */
.content {
  margin-top: 36px;
}

.year-block {
  margin-top: 32px;
}

.year-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 14px 4px;
  border-bottom: 1px solid rgba(139, 92, 246, 0.15);
}

.year {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: white;
}

.year-meta {
  font-size: 13px;
  color: rgba(167, 139, 250, 0.6);
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.item {
  margin: 0;
}

.item-link {
  display: block;
  text-decoration: none;
  color: inherit;
  padding: 20px 4px;
  border-bottom: 1px solid rgba(139, 92, 246, 0.08);
  transition: 0.2s ease;
  border-radius: 8px;
  margin: 0 -4px;
}

.item-link:hover {
  background: linear-gradient(
    90deg,
    rgba(139, 92, 246, 0.12),
    rgba(139, 92, 246, 0.00)
  );
  padding-left: 12px;
}

/* Row */
.row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 14px;
  align-items: center;
}

.row-title {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: white;
}

.external-icon {
  font-size: 12px;
  opacity: 0.5;
  margin-left: 6px;
}

.row-sub {
  margin-top: 6px;
  font-size: 14px;
  color: rgba(167, 139, 250, 0.8);
}

.row-summary {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.65;
  color: rgba(196, 181, 253, 0.6);
  max-width: 860px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.row-meta {
  margin-top: 12px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

.meta-text {
  font-size: 12px;
  color: rgba(167, 139, 250, 0.55);
}

.meta-tags {
  display: inline-flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  font-size: 11px;
  color: rgba(196, 181, 253, 0.65);
  border: 1px solid rgba(139, 92, 246, 0.2);
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(139, 92, 246, 0.08);
}

.row-arrow {
  font-size: 18px;
  color: rgba(167, 139, 250, 0.3);
  transform: translateY(-2px);
  transition: 0.2s ease;
}

.item-link:hover .row-arrow {
  color: rgba(167, 139, 250, 0.7);
  transform: translate(4px, -2px);
}

/* Empty state */
.empty {
  padding: 48px 0;
  text-align: center;
  border: 1px dashed rgba(139, 92, 246, 0.25);
  border-radius: 16px;
  background: rgba(26, 19, 51, 0.4);
}

.empty-title {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.empty-desc {
  margin-top: 10px;
  font-size: 14px;
  color: rgba(196, 181, 253, 0.6);
}

/* Footer */
.footer {
  margin-top: 48px;
}

.footer-line {
  height: 1px;
  background: rgba(139, 92, 246, 0.15);
  margin-bottom: 20px;
}

.footer-text {
  font-size: 14px;
  color: rgba(196, 181, 253, 0.6);
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
}

.footer-link {
  color: rgba(167, 139, 250, 0.9);
  text-decoration: none;
  transition: 0.2s ease;
}

.footer-link:hover {
  color: #c4b5fd;
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 820px) {
  .blog-page {
    padding: 100px 16px 40px;
  }

  .title {
    font-size: 26px;
  }

  .search {
    min-width: 100%;
  }

  .row {
    grid-template-columns: 1fr;
  }

  .row-arrow {
    display: none;
  }
}
</style>
