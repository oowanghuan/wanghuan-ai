<template>
  <div class="training-page">
    <!-- Header -->
    <header class="training-header">
      <div class="container">
        <div class="header-badge">
          <span class="badge-icon">🎓</span>
          <span>AI Commander Training Series</span>
        </div>
        <h1>AI Commander Training</h1>
        <p class="subtitle">From Executor to Commander: Master the Mindset and Skills of AI Collaboration</p>
        <div class="header-stats">
          <div class="stat">
            <span class="stat-icon">📚</span>
            <span>4 Modules</span>
          </div>
          <div class="stat">
            <span class="stat-icon">🎧</span>
            <span>~2 Hours Audio</span>
          </div>
          <div class="stat">
            <span class="stat-icon">📄</span>
            <span>PDF Handouts</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Course Overview -->
    <section class="course-overview">
      <div class="container container-md">
        <h2>Course Overview</h2>
        <p class="overview-text">
          This training will help you transform from "someone who uses AI" to "someone who commands AI".
          It's not about becoming an AI expert — it's about <strong>working more clearly, making better decisions, and using AI as leverage, not as an excuse</strong>.
        </p>
        <div class="core-principle">
          <span class="principle-icon">🎯</span>
          <span>Core Principle: <strong>AI executes, humans decide, responsibility always stays with humans</strong></span>
        </div>
        <div class="learning-path">
          <div class="path-item">
            <div class="path-number">0</div>
            <div class="path-content">
              <h4>Shared Language</h4>
              <p>Align on core AI collaboration concepts</p>
            </div>
          </div>
          <div class="path-arrow">→</div>
          <div class="path-item">
            <div class="path-number">1</div>
            <div class="path-content">
              <h4>Mindset Shift</h4>
              <p>From executor to commander mentality</p>
            </div>
          </div>
          <div class="path-arrow">→</div>
          <div class="path-item">
            <div class="path-number">2</div>
            <div class="path-content">
              <h4>Operational Strategy</h4>
              <p>Tactics for working with AI</p>
            </div>
          </div>
          <div class="path-arrow">→</div>
          <div class="path-item">
            <div class="path-number">3</div>
            <div class="path-content">
              <h4>Standard Workflow</h4>
              <p>6-step cycle for repeatable results</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modules -->
    <section class="modules-section">
      <div class="container container-md">
        <h2>Course Modules</h2>

        <!-- Module 0 -->
        <div class="module-card">
          <div class="module-header">
            <div class="module-badge part0">Part 0</div>
            <div class="module-title">
              <h3>AI Workflow Business Vocabulary</h3>
              <p class="module-subtitle">A shared language for everyone</p>
            </div>
          </div>
          <div class="module-desc">
            <p>Build a common vocabulary so everyone understands the same concepts and uses the same terms.</p>
            <ul class="module-points">
              <li>What is a "Prompt"? What does it actually mean in work terms</li>
              <li>What is "Context"? How to understand it in business language</li>
              <li>How to think about AI without technical fear</li>
              <li>The foundational mental model for AI collaboration</li>
            </ul>
          </div>
          <div class="module-resources">
            <a :href="audioUrls.part0" target="_blank" class="resource-btn audio" :class="{ disabled: !audioUrls.part0 }">
              <span class="resource-icon">🎧</span>
              <span class="resource-text">
                <strong>Audio</strong>
                <small>33.1 MB · ~30 min</small>
              </span>
            </a>
            <a :href="pdfUrls.part0" target="_blank" class="resource-btn pdf" :class="{ disabled: !pdfUrls.part0 }">
              <span class="resource-icon">📄</span>
              <span class="resource-text">
                <strong>PDF Handout</strong>
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
              <h3>From Executor to Commander</h3>
              <p class="module-subtitle">The critical mindset shift</p>
            </div>
          </div>
          <div class="module-desc">
            <p>How your role changes when AI becomes part of the workflow.</p>
            <ul class="module-points">
              <li><strong>AI executes, you decide</strong> — the core division of labor</li>
              <li>Responsibility always stays with humans, not tools</li>
              <li>From "the person who does things" to "the person who directs things"</li>
              <li>How to make this mindset transition</li>
            </ul>
          </div>
          <div class="module-resources">
            <a :href="audioUrls.part1" target="_blank" class="resource-btn audio" :class="{ disabled: !audioUrls.part1 }">
              <span class="resource-icon">🎧</span>
              <span class="resource-text">
                <strong>Audio</strong>
                <small>31.2 MB · ~28 min</small>
              </span>
            </a>
            <a :href="pdfUrls.part1" target="_blank" class="resource-btn pdf" :class="{ disabled: !pdfUrls.part1 }">
              <span class="resource-icon">📄</span>
              <span class="resource-text">
                <strong>PDF Handout</strong>
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
              <h3>AI Command Operational Strategy</h3>
              <p class="module-subtitle">Practical methods for working with AI</p>
            </div>
          </div>
          <div class="module-desc">
            <p>How to actually work with AI — concrete operational methods.</p>
            <ul class="module-points">
              <li>How to assign tasks to AI</li>
              <li>How to iterate and refine AI's output</li>
              <li>When and how to intervene when AI is wrong</li>
              <li>Real scenarios: brand operations, short-video content, product sales</li>
            </ul>
          </div>
          <div class="module-resources">
            <a :href="audioUrls.part2" target="_blank" class="resource-btn audio" :class="{ disabled: !audioUrls.part2 }">
              <span class="resource-icon">🎧</span>
              <span class="resource-text">
                <strong>Audio</strong>
                <small>29 MB · ~26 min</small>
              </span>
            </a>
            <a :href="pdfUrls.part2" target="_blank" class="resource-btn pdf" :class="{ disabled: !pdfUrls.part2 }">
              <span class="resource-icon">📄</span>
              <span class="resource-text">
                <strong>PDF Handout</strong>
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
              <h3>Standard AI Work Cycle & Reporting</h3>
              <p class="module-subtitle">Making AI collaboration your default workflow</p>
            </div>
          </div>
          <div class="module-desc">
            <p>How AI collaboration becomes the default workflow, and how to report results.</p>
            <ul class="module-points">
              <li>The 6-step standard work cycle: from task definition to result validation</li>
              <li>How to communicate and report AI collaboration outcomes</li>
              <li>Reporting upward — management cares about results, not tools</li>
              <li>Using AI as leverage, not as an excuse</li>
            </ul>
          </div>
          <div class="module-resources">
            <a :href="audioUrls.part3" target="_blank" class="resource-btn audio" :class="{ disabled: !audioUrls.part3 }">
              <span class="resource-icon">🎧</span>
              <span class="resource-text">
                <strong>Audio</strong>
                <small>27.3 MB · ~25 min</small>
              </span>
            </a>
            <a :href="pdfUrls.part3" target="_blank" class="resource-btn pdf" :class="{ disabled: !pdfUrls.part3 }">
              <span class="resource-icon">📄</span>
              <span class="resource-text">
                <strong>PDF Handout</strong>
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
        <h2>How to Use This Material</h2>
        <div class="use-steps">
          <div class="use-step">
            <div class="step-icon">🎧</div>
            <h4>Listen First</h4>
            <p>Listen during commute, exercise, or chores to build the conceptual framework</p>
          </div>
          <div class="use-step">
            <div class="step-icon">📄</div>
            <h4>Read the Handouts</h4>
            <p>Review the PDF handouts to deepen understanding of key concepts</p>
          </div>
          <div class="use-step">
            <div class="step-icon">💻</div>
            <h4>Practice</h4>
            <p>Apply what you learned in real projects using AI tools</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Resources -->
    <section class="related-section">
      <div class="container container-md">
        <h2>Related Resources</h2>
        <div class="related-grid">
          <router-link to="/blog/ai-training-materials" class="related-card">
            <span class="related-icon">🇨🇳</span>
            <div class="related-content">
              <h4>Chinese Version</h4>
              <p>View this page in Chinese</p>
            </div>
            <span class="related-arrow">→</span>
          </router-link>
          <router-link to="/blog/ai-super-intern-en" class="related-card">
            <span class="related-icon">🧠</span>
            <div class="related-content">
              <h4>Treat AI as Super Intern</h4>
              <p>Build the right mental model for AI</p>
            </div>
            <span class="related-arrow">→</span>
          </router-link>
          <a href="https://github.com/oowanghuan/ai-coding-template" target="_blank" class="related-card">
            <span class="related-icon">🛠️</span>
            <div class="related-content">
              <h4>AI Coding Template</h4>
              <p>Team AI collaboration framework</p>
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
          <p>Questions or feedback? Feel free to reach out</p>
          <a href="mailto:oowanghuan@gmail.com" class="contact-btn">
            <span>📧</span> oowanghuan@gmail.com
          </a>
        </div>
        <div class="back-link">
          <router-link to="/blog">← Back to Blog</router-link>
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
  max-width: 700px;
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
