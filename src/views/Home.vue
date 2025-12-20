<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="container hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="greeting">{{ $t('home.greeting') }}</span>
            <span class="name">{{ $t('home.name') }}</span>
          </h1>
          <p class="hero-subtitle">
            {{ $t('home.subtitle') }}
          </p>
          <p class="hero-desc">
            {{ $t('home.desc') }}
          </p>
          <div class="hero-actions">
            <router-link to="/products" class="btn btn-primary">
              <el-icon><Box /></el-icon>
              {{ $t('home.viewProducts') }}
            </router-link>
            <router-link to="/blog" class="btn btn-outline">
              <el-icon><Document /></el-icon>
              {{ $t('home.readBlog') }}
            </router-link>
          </div>
        </div>
        <div class="hero-visual">
          <div class="avatar-container">
            <div class="avatar">
              <span>W</span>
            </div>
            <div class="orbit orbit-1">
              <span class="orbit-icon">AI</span>
            </div>
            <div class="orbit orbit-2">
              <span class="orbit-icon">Code</span>
            </div>
            <div class="orbit orbit-3">
              <span class="orbit-icon">Build</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What I Do Section -->
    <section class="section what-i-do">
      <div class="container">
        <div class="section-title">
          <h2>{{ $t('home.whatIDo') }}</h2>
          <p>{{ $t('home.whatIDoDesc') }}</p>
        </div>

        <div class="cards-grid">
          <div class="card feature-card">
            <div class="card-icon">
              <el-icon><Cpu /></el-icon>
            </div>
            <h3>{{ $t('home.aiCollabDev') }}</h3>
            <p>
              {{ $t('home.aiCollabDevDesc') }}
            </p>
          </div>

          <div class="card feature-card">
            <div class="card-icon">
              <el-icon><DataAnalysis /></el-icon>
            </div>
            <h3>{{ $t('home.teamTransform') }}</h3>
            <p>
              {{ $t('home.teamTransformDesc') }}
            </p>
          </div>

          <div class="card feature-card">
            <div class="card-icon">
              <el-icon><Opportunity /></el-icon>
            </div>
            <h3>{{ $t('home.productBuilding') }}</h3>
            <p>
              {{ $t('home.productBuildingDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Product -->
    <section class="section featured-product">
      <div class="container">
        <div class="featured-content">
          <div class="featured-info">
            <span class="featured-label">{{ $t('home.featuredLabel') }}</span>
            <h2>{{ $t('home.featuredTitle') }}</h2>
            <p>
              {{ $t('home.featuredDesc') }}
            </p>
            <ul class="featured-points">
              <li>
                <el-icon><Check /></el-icon>
                {{ $t('home.featuredPoint1') }}
              </li>
              <li>
                <el-icon><Check /></el-icon>
                {{ $t('home.featuredPoint2') }}
              </li>
              <li>
                <el-icon><Check /></el-icon>
                {{ $t('home.featuredPoint3') }}
              </li>
              <li>
                <el-icon><Check /></el-icon>
                {{ $t('home.featuredPoint4') }}
              </li>
            </ul>
            <a href="https://ai-coding-org.vercel.app" target="_blank" class="btn btn-primary">
              {{ $t('home.visitProject') }}
              <el-icon><TopRight /></el-icon>
            </a>
          </div>
          <div class="featured-preview">
            <div class="preview-window">
              <div class="window-header">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <div class="preview-content">
                <div class="preview-sidebar">
                  <div class="sidebar-item active"></div>
                  <div class="sidebar-item"></div>
                  <div class="sidebar-item"></div>
                  <div class="sidebar-item"></div>
                </div>
                <div class="preview-main">
                  <div class="preview-title"></div>
                  <div class="preview-text"></div>
                  <div class="preview-text short"></div>
                  <div class="preview-cards">
                    <div class="preview-card"></div>
                    <div class="preview-card"></div>
                    <div class="preview-card"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Coming Soon -->
    <section class="section coming-soon-section">
      <div class="container">
        <div class="section-title">
          <h2>{{ $t('home.comingSoon') }}</h2>
          <p>{{ $t('home.comingSoonDesc') }}</p>
        </div>

        <div class="coming-soon-grid">
          <div class="coming-soon-card">
            <div class="coming-soon-icon">
              <el-icon><Connection /></el-icon>
            </div>
            <h3>{{ $t('home.platformTitle') }}</h3>
            <p>{{ $t('home.platformDesc') }}</p>
            <span class="status">{{ $t('home.platformStatus') }}</span>
          </div>

          <div class="coming-soon-card">
            <div class="coming-soon-icon">
              <el-icon><ChatDotRound /></el-icon>
            </div>
            <h3>{{ $t('home.digitalTwinTitle') }}</h3>
            <p>{{ $t('home.digitalTwinDesc') }}</p>
            <span class="status">{{ $t('home.digitalTwinStatus') }}</span>
          </div>

          <div class="coming-soon-card">
            <div class="coming-soon-icon">
              <el-icon><UserFilled /></el-icon>
            </div>
            <h3>{{ $t('home.communityTitle') }}</h3>
            <p>{{ $t('home.communityDesc') }}</p>
            <span class="status">{{ $t('home.communityStatus') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ $t('home.ctaTitle') }}</h2>
          <p>{{ $t('home.ctaDesc') }}</p>
          <a href="mailto:oowanghuan@gmail.com" class="btn btn-primary btn-large">
            <el-icon><Message /></el-icon>
            {{ $t('home.contactMe') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  Box,
  Document,
  Cpu,
  DataAnalysis,
  Opportunity,
  Check,
  TopRight,
  Connection,
  ChatDotRound,
  UserFilled,
  Message
} from '@element-plus/icons-vue'
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-hero);
  opacity: 0.05;
  z-index: -1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.hero-title {
  font-size: 64px;
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
}

.hero-title .greeting {
  display: block;
  font-size: 24px;
  font-weight: 400;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-sm);
}

.hero-title .name {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: var(--font-size-2xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
}

.hero-desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
}

/* Hero Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-container {
  position: relative;
  width: 300px;
  height: 300px;
}

.avatar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  box-shadow: var(--shadow-xl);
}

.orbit {
  position: absolute;
  border: 2px dashed rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  animation: orbit 20s linear infinite;
}

.orbit-1 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.orbit-2 {
  width: 260px;
  height: 260px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-duration: 25s;
  animation-direction: reverse;
}

.orbit-3 {
  width: 320px;
  height: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-duration: 30s;
}

.orbit-icon {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--gradient-primary);
  color: white;
  padding: 8px 16px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

@keyframes orbit {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

/* What I Do Section */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.feature-card {
  text-align: center;
  padding: var(--spacing-2xl);
}

.card-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--spacing-lg);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: var(--color-primary);
}

.feature-card h3 {
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-xl);
}

.feature-card p {
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* Featured Product */
.featured-product {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
}

.featured-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.featured-label {
  display: inline-block;
  background: var(--gradient-primary);
  color: white;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
}

.featured-info h2 {
  margin-bottom: var(--spacing-md);
}

.featured-info > p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xl);
}

.featured-points {
  list-style: none;
  margin-bottom: var(--spacing-xl);
}

.featured-points li {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) 0;
  color: var(--color-text-secondary);
}

.featured-points .el-icon {
  color: var(--color-primary);
}

/* Preview Window */
.preview-window {
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
}

.window-header {
  display: flex;
  gap: 8px;
  padding: var(--spacing-md);
  background: #f5f5f5;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f57; }
.dot.yellow { background: #febc2e; }
.dot.green { background: #28c840; }

.preview-content {
  display: flex;
  height: 300px;
}

.preview-sidebar {
  width: 80px;
  background: var(--color-bg-dark);
  padding: var(--spacing-md);
}

.sidebar-item {
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-base);
  margin-bottom: var(--spacing-sm);
}

.sidebar-item.active {
  background: var(--color-primary);
}

.preview-main {
  flex: 1;
  padding: var(--spacing-lg);
}

.preview-title {
  height: 24px;
  width: 60%;
  background: #e0e0e0;
  border-radius: var(--radius-base);
  margin-bottom: var(--spacing-md);
}

.preview-text {
  height: 12px;
  background: #f0f0f0;
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-sm);
}

.preview-text.short {
  width: 80%;
}

.preview-cards {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
}

.preview-card {
  flex: 1;
  height: 100px;
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
  border-radius: var(--radius-base);
}

/* Coming Soon Section */
.coming-soon-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.coming-soon-card {
  background: white;
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-base);
  text-align: center;
  position: relative;
  border: 2px dashed rgba(102, 126, 234, 0.3);
}

.coming-soon-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto var(--spacing-lg);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: var(--color-primary);
}

.coming-soon-card h3 {
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-lg);
}

.coming-soon-card p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-md);
}

.coming-soon-card .status {
  display: inline-block;
  background: rgba(102, 126, 234, 0.1);
  color: var(--color-primary);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
}

/* CTA Section */
.cta-section {
  background: var(--gradient-primary);
  color: white;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  color: white;
  margin-bottom: var(--spacing-md);
}

.cta-content p {
  opacity: 0.9;
  margin-bottom: var(--spacing-xl);
  font-size: var(--font-size-lg);
}

.cta-section .btn-primary {
  background: white;
  color: var(--color-primary);
}

.btn-large {
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: var(--font-size-lg);
}

/* Responsive */
@media (max-width: 968px) {
  .hero-content,
  .featured-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-title {
    font-size: 48px;
  }

  .hero-desc {
    max-width: 100%;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-visual {
    order: -1;
  }

  .avatar-container {
    width: 250px;
    height: 250px;
  }

  .cards-grid,
  .coming-soon-grid {
    grid-template-columns: 1fr;
  }

  .featured-preview {
    order: -1;
  }
}
</style>
