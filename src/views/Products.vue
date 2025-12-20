<template>
  <div class="products-page" ref="pageRef">
    <!-- Particle Background -->
    <canvas ref="canvasRef" class="particle-canvas"></canvas>

    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>{{ $t('products.title') }}</h1>
        <p>{{ $t('products.subtitle') }}</p>
        <p class="hero-subtitle">{{ $t('products.systemNote') }}</p>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="section">
      <div class="container">
        <!-- 🧭 核心项目 -->
        <div class="products-section">
          <h2 class="section-label">
            <span class="section-icon">🧭</span>
            {{ $t('products.coreProject') }}
          </h2>

          <div class="product-card featured">
            <div class="product-content">
              <div class="product-header">
                <div class="product-icon">
                  <el-icon><Promotion /></el-icon>
                </div>
                <span class="product-status live">{{ $t('products.core') }}</span>
              </div>
              <h3>{{ $t('products.blueprintTitle') }}</h3>
              <p class="product-subtitle">{{ $t('products.blueprintSubtitle') }}</p>
              <p class="product-desc">
                {{ $t('products.blueprintDesc') }}
              </p>

              <ul class="feature-list">
                <li><span class="feature-icon">👥</span> {{ $t('products.blueprintFeature1') }}</li>
                <li><span class="feature-icon">📐</span> {{ $t('products.blueprintFeature2') }}</li>
                <li><span class="feature-icon">🔄</span> {{ $t('products.blueprintFeature3') }}</li>
                <li><span class="feature-icon">🧠</span> {{ $t('products.blueprintFeature4') }}</li>
                <li><span class="feature-icon">📦</span> {{ $t('products.blueprintFeature5') }}</li>
              </ul>

              <div class="target-audience">
                <h4>{{ $t('products.targetAudience') }}</h4>
                <div class="audience-tags">
                  <span>{{ $t('products.audience1') }}</span>
                  <span>{{ $t('products.audience2') }}</span>
                  <span>{{ $t('products.audience3') }}</span>
                </div>
              </div>

              <div class="product-features">
                <span class="feature-tag">AI Coding</span>
                <span class="feature-tag">Team Operating System</span>
                <span class="feature-tag">Spec Driven</span>
                <span class="feature-tag">Vue 3</span>
              </div>
              <div class="product-actions">
                <a href="https://ai-coding-org.vercel.app" target="_blank" class="btn btn-primary">
                  {{ $t('products.visitProject') }}
                  <el-icon><TopRight /></el-icon>
                </a>
                <a href="https://github.com/oowanghuan/ai-coding-org" target="_blank" class="btn btn-outline">
                  <el-icon><Link /></el-icon>
                  GitHub
                </a>
              </div>
            </div>
            <div class="product-preview hero-box" ref="heroBoxRef">
              <div class="hero-badge"><span class="hero-dot"></span> {{ $t('products.coreProjectBadge') }} · Live</div>
              <canvas ref="starsCanvasRef" class="stars-canvas"></canvas>
              <div class="parallax" ref="parallaxRef">
                <div class="ring r3"></div>
                <div class="ring r2"></div>
                <div class="ring r1"></div>
                <div class="orbit o3"><span class="p"></span><span class="p alt"></span></div>
                <div class="orbit o2"><span class="p"></span><span class="p alt"></span></div>
                <div class="orbit o1"><span class="p"></span><span class="p alt"></span></div>
                <div class="core">
                  <div class="ai-text">AI</div>
                  <div class="ai-sub">team operating system</div>
                </div>
              </div>
              <div class="hero-hint">
                <span>Spec Driven</span>
                <span>AI Review</span>
                <span>Multi-Agent</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 🧩 开发工具 & 模板 -->
        <div class="products-section">
          <h2 class="section-label">
            <span class="section-icon">🧩</span>
            {{ $t('products.toolsAndTemplates') }}
            <span class="section-badge">{{ $t('products.public') }}</span>
          </h2>

          <div class="products-grid two-col">
            <div class="product-card tool-card">
              <div class="product-header">
                <div class="product-icon">
                  <el-icon><Document /></el-icon>
                </div>
                <span class="product-status tool">{{ $t('products.template') }}</span>
              </div>
              <h3>{{ $t('products.aiCodingTemplateTitle') }}</h3>
              <p class="product-subtitle">{{ $t('products.aiCodingTemplateSubtitle') }}</p>
              <p class="product-desc">
                {{ $t('products.aiCodingTemplateDesc') }}
              </p>
              <ul class="mini-feature-list">
                <li>{{ $t('products.aiCodingTemplateFeature1') }}</li>
                <li>{{ $t('products.aiCodingTemplateFeature2') }}</li>
                <li>{{ $t('products.aiCodingTemplateFeature3') }}</li>
                <li>{{ $t('products.aiCodingTemplateFeature4') }}</li>
              </ul>
              <p class="product-note">📌 {{ $t('products.aiCodingTemplateNote') }}</p>
              <div class="product-features">
                <span class="feature-tag">Claude Code</span>
                <span class="feature-tag">Workflow</span>
                <span class="feature-tag">Template</span>
              </div>
              <div class="product-actions">
                <a href="https://github.com/oowanghuan/ai-coding-template" target="_blank" class="btn btn-outline">
                  <el-icon><Link /></el-icon>
                  GitHub
                </a>
              </div>
            </div>

            <div class="product-card tool-card">
              <div class="product-header">
                <div class="product-icon">
                  <el-icon><Setting /></el-icon>
                </div>
                <span class="product-status tool">{{ $t('products.tooling') }}</span>
              </div>
              <h3>{{ $t('products.mcpManagerTitle') }}</h3>
              <p class="product-subtitle">{{ $t('products.mcpManagerSubtitle') }}</p>
              <p class="product-desc">
                {{ $t('products.mcpManagerDesc') }}
              </p>
              <ul class="mini-feature-list">
                <li>{{ $t('products.mcpManagerFeature1') }}</li>
                <li>{{ $t('products.mcpManagerFeature2') }}</li>
                <li>{{ $t('products.mcpManagerFeature3') }}</li>
              </ul>
              <div class="product-features">
                <span class="feature-tag">Claude Code</span>
                <span class="feature-tag">MCP</span>
                <span class="feature-tag">Tooling</span>
              </div>
              <div class="product-actions">
                <a href="https://github.com/oowanghuan/claude-mcp-manager" target="_blank" class="btn btn-outline">
                  <el-icon><Link /></el-icon>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 🏗️ 实战型产品 - 已上线 -->
        <div class="products-section">
          <h2 class="section-label">
            <span class="section-icon">🏗️</span>
            {{ $t('products.practiceProducts') }}
            <span class="section-badge live">{{ $t('products.live') }}</span>
          </h2>

          <p class="section-intro">
            {{ $t('products.practiceIntro') }}
          </p>

          <div class="products-grid two-col">
            <div class="product-card tool-card">
              <div class="product-header">
                <div class="product-icon">
                  <el-icon><User /></el-icon>
                </div>
                <span class="product-status live">{{ $t('products.live') }}</span>
              </div>
              <h3>{{ $t('products.talentFlowTitle') }}</h3>
              <p class="product-subtitle">{{ $t('products.talentFlowSubtitle') }}</p>
              <p class="product-desc">
                {{ $t('products.talentFlowDesc') }}
              </p>
              <div class="product-features">
                <span class="feature-tag">AI Recruitment</span>
                <span class="feature-tag">SaaS</span>
              </div>
              <div class="product-actions">
                <a href="https://www.aitalentflow.ai/" target="_blank" class="btn btn-primary">
                  {{ $t('products.visitProject') }}
                  <el-icon><TopRight /></el-icon>
                </a>
              </div>
            </div>

            <div class="product-card tool-card">
              <div class="product-header">
                <div class="product-icon">
                  <el-icon><VideoCamera /></el-icon>
                </div>
                <span class="product-status live">{{ $t('products.live') }}</span>
              </div>
              <h3>{{ $t('products.postVideoTitle') }}</h3>
              <p class="product-subtitle">{{ $t('products.postVideoSubtitle') }}</p>
              <p class="product-desc">
                {{ $t('products.postVideoDesc') }}
              </p>
              <div class="product-features">
                <span class="feature-tag">Content</span>
                <span class="feature-tag">Analytics</span>
              </div>
              <div class="product-actions">
                <a href="https://postvideo.vercel.app/" target="_blank" class="btn btn-primary">
                  {{ $t('products.visitProject') }}
                  <el-icon><TopRight /></el-icon>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 🔧 开发中 -->
        <div class="products-section">
          <h2 class="section-label">
            <span class="section-icon">🔧</span>
            {{ $t('products.inDevelopment') }}
            <span class="section-badge dev">{{ $t('products.inDev') }}</span>
          </h2>

          <div class="products-grid two-col">
            <div class="product-card mini dev-card">
              <div class="product-header">
                <div class="product-icon">
                  <el-icon><Headset /></el-icon>
                </div>
                <span class="product-status dev">{{ $t('products.building') }}</span>
              </div>
              <h3>{{ $t('products.soundLibTitle') }}</h3>
              <p class="product-subtitle">{{ $t('products.soundLibSubtitle') }}</p>
              <p class="product-desc">
                www.beautiday.com
              </p>
              <div class="product-features">
                <span class="feature-tag">Audio</span>
                <span class="feature-tag">Library</span>
              </div>
              <div class="product-actions">
                <a href="https://github.com/oowanghuan/sound-lib" target="_blank" class="btn btn-outline">
                  <el-icon><Link /></el-icon>
                  GitHub
                </a>
              </div>
            </div>

            <div class="product-card mini dev-card">
              <div class="product-header">
                <div class="product-icon">
                  <el-icon><Folder /></el-icon>
                </div>
                <span class="product-status dev">{{ $t('products.building') }}</span>
              </div>
              <h3>{{ $t('products.contentMgmtTitle') }}</h3>
              <p class="product-subtitle">{{ $t('products.contentMgmtSubtitle') }}</p>
              <p class="product-desc">
                content-management-sys.vercel.app
              </p>
              <div class="product-features">
                <span class="feature-tag">CMS</span>
                <span class="feature-tag">Management</span>
              </div>
              <div class="product-actions">
                <a href="https://github.com/oowanghuan/content-management-sys" target="_blank" class="btn btn-outline">
                  <el-icon><Link /></el-icon>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 🔮 即将推出 -->
        <div class="products-section">
          <h2 class="section-label">
            <span class="section-icon">🔮</span>
            {{ $t('products.comingSoon') }}
          </h2>

          <div class="products-grid two-col">
            <div class="product-card mini coming-card">
              <div class="product-header">
                <div class="product-icon">
                  <el-icon><ChatDotRound /></el-icon>
                </div>
                <span class="product-status coming">{{ $t('products.exploring') }}</span>
              </div>
              <h3>{{ $t('products.digitalTwinTitle') }}</h3>
              <p class="product-desc">
                {{ $t('products.digitalTwinDesc') }}
              </p>
              <p class="product-purpose">
                {{ $t('products.digitalTwinPurpose') }}
              </p>
              <div class="product-features">
                <span class="feature-tag">AI Assistant</span>
                <span class="feature-tag">RAG</span>
              </div>
            </div>

            <div class="product-card mini coming-card">
              <div class="product-header">
                <div class="product-icon">
                  <el-icon><ChatLineSquare /></el-icon>
                </div>
                <span class="product-status coming">{{ $t('products.planning') }}</span>
              </div>
              <h3>{{ $t('products.communityTitle') }}</h3>
              <p class="product-desc">
                {{ $t('products.communityDesc') }}
              </p>
              <div class="product-features">
                <span class="feature-tag">Community</span>
                <span class="feature-tag">Discussion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ $t('products.ctaTitle') }}</h2>
          <p>{{ $t('products.ctaDesc') }}</p>
          <a href="mailto:oowanghuan@gmail.com" class="btn btn-primary">
            <el-icon><Message /></el-icon>
            {{ $t('products.contactMe') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import {
  Promotion,
  TopRight,
  Link,
  Connection,
  ChatDotRound,
  ChatLineSquare,
  Message,
  Document,
  Setting,
  User,
  VideoCamera,
  Lock,
  Headset,
  Folder
} from '@element-plus/icons-vue'

const pageRef = ref(null)
const canvasRef = ref(null)
const heroBoxRef = ref(null)
const parallaxRef = ref(null)
const starsCanvasRef = ref(null)

let scene, camera, renderer, particles
let animationId = null
let mouse = { x: 0, y: 0 }

// Hero Box 星尘动画
let starsCtx = null
let starsW = 0, starsH = 0
let stars = []
let starsAnimationId = null

const initParticles = () => {
  if (!canvasRef.value || !pageRef.value) return

  // Scene setup
  scene = new THREE.Scene()

  const width = window.innerWidth
  const height = pageRef.value.scrollHeight || window.innerHeight

  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    alpha: true,
    antialias: true
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Create particles - visible density for products page
  const particleCount = 4000
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)
  const sizes = new Float32Array(particleCount)

  // Color palette - purple/blue nebula
  const colorPalette = [
    new THREE.Color(0x8b5cf6), // Purple
    new THREE.Color(0x6366f1), // Indigo
    new THREE.Color(0x3b82f6), // Blue
    new THREE.Color(0x06b6d4), // Cyan
    new THREE.Color(0xa78bfa), // Light purple
  ]

  for (let i = 0; i < particleCount; i++) {
    // Spread particles across the full page height
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15

    // Random color from palette
    const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b

    sizes[i] = Math.random() * 5 + 3
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  // Shader material for colored particles
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) }
    },
    vertexShader: `
      attribute float size;
      attribute vec3 color;
      varying vec3 vColor;
      uniform float uTime;
      uniform vec2 uMouse;

      void main() {
        vColor = color;

        vec3 pos = position;

        // Slow floating animation
        pos.x += sin(uTime * 0.1 + position.y * 0.5) * 0.1;
        pos.y += cos(uTime * 0.08 + position.x * 0.5) * 0.1;
        pos.z += sin(uTime * 0.12 + position.z * 0.5) * 0.05;

        // Mouse influence - gentle attraction
        vec2 mouseInfluence = uMouse * 2.0;
        float distToMouse = length(vec2(pos.x, pos.y) - mouseInfluence);
        float influence = smoothstep(3.0, 0.0, distToMouse) * 0.3;
        pos.xy += normalize(mouseInfluence - pos.xy) * influence;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (4.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;

      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;

        float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
        alpha *= 0.8; // Overall transparency - more visible

        gl_FragColor = vec4(vColor, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  })

  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  // Start animation
  animate()
}

const animate = () => {
  animationId = requestAnimationFrame(animate)

  if (particles) {
    // Slow rotation
    particles.rotation.y += 0.0003
    particles.rotation.x += 0.0001

    // Update time uniform
    particles.material.uniforms.uTime.value += 0.01
    particles.material.uniforms.uMouse.value.set(mouse.x, mouse.y)
  }

  renderer.render(scene, camera)
}

const handleMouseMove = (e) => {
  // Normalize mouse position
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
}

const handleResize = () => {
  if (!camera || !renderer || !pageRef.value) return

  const width = window.innerWidth
  const height = pageRef.value.scrollHeight || window.innerHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

// Hero Box 视差效果
const initHeroParallax = () => {
  if (!heroBoxRef.value || !parallaxRef.value) return

  heroBoxRef.value.addEventListener('mousemove', (e) => {
    const rect = heroBoxRef.value.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    const rx = (-y * 6).toFixed(2)
    const ry = (x * 8).toFixed(2)
    parallaxRef.value.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`
  })

  heroBoxRef.value.addEventListener('mouseleave', () => {
    parallaxRef.value.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg)`
  })
}

// Hero Box 星尘动画
const initStarsCanvas = () => {
  if (!starsCanvasRef.value || !heroBoxRef.value) return

  const c = starsCanvasRef.value
  starsCtx = c.getContext('2d')

  const resizeStars = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    starsW = c.width = heroBoxRef.value.clientWidth * dpr
    starsH = c.height = heroBoxRef.value.clientHeight * dpr
    c.style.width = heroBoxRef.value.clientWidth + 'px'
    c.style.height = heroBoxRef.value.clientHeight + 'px'

    const count = Math.floor((heroBoxRef.value.clientWidth * heroBoxRef.value.clientHeight) / 9000)
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * starsW,
      y: Math.random() * starsH,
      r: (Math.random() * 1.2 + 0.4) * dpr,
      vx: (Math.random() * 0.15 + 0.05) * dpr,
      a: Math.random() * 0.5 + 0.25
    }))
  }

  const tickStars = () => {
    starsAnimationId = requestAnimationFrame(tickStars)
    if (!starsCtx) return

    starsCtx.clearRect(0, 0, starsW, starsH)
    starsCtx.fillStyle = 'rgba(255,255,255,0.8)'
    for (const s of stars) {
      s.x += s.vx
      if (s.x > starsW + 20) s.x = -20
      starsCtx.globalAlpha = s.a
      starsCtx.beginPath()
      starsCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      starsCtx.fill()
    }
  }

  resizeStars()
  tickStars()
  window.addEventListener('resize', resizeStars)
}

onMounted(() => {
  initParticles()
  initHeroParallax()
  initStarsCanvas()
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', handleResize)

  // Update canvas height when page content loads
  setTimeout(handleResize, 100)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  if (starsAnimationId) {
    cancelAnimationFrame(starsAnimationId)
  }
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', handleResize)

  // Cleanup Three.js
  if (renderer) {
    renderer.dispose()
  }
  if (particles) {
    particles.geometry.dispose()
    particles.material.dispose()
  }
})
</script>

<style scoped>
.products-page {
  position: relative;
  background: var(--gradient-dark);
  min-height: 100vh;
  overflow-x: hidden;
}

.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.page-hero {
  position: relative;
  z-index: 1;
  background:
    radial-gradient(ellipse 1000px 600px at 50% 30%, rgba(139, 92, 246, 0.15), transparent 50%),
    transparent;
  color: white;
  padding: 140px 0 80px;
  text-align: center;
}

.page-hero h1 {
  color: white;
  font-size: var(--font-size-5xl);
  margin-bottom: var(--spacing-md);
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-hero p {
  font-size: var(--font-size-xl);
  color: rgba(196, 181, 253, 0.9);
}

.hero-subtitle {
  font-size: var(--font-size-lg) !important;
  color: rgba(196, 181, 253, 0.6) !important;
  font-style: italic;
  margin-top: var(--spacing-sm);
}

.section {
  position: relative;
  z-index: 1;
  padding: var(--spacing-16) 0;
}

.products-section {
  margin-bottom: var(--spacing-3xl);
}

.section-label {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-xl);
  color: white;
}

.section-icon {
  font-size: 24px;
}

.section-badge {
  margin-left: var(--spacing-sm);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
}

.section-badge.private {
  background: rgba(168, 85, 247, 0.15);
  color: #c4b5fd;
}

.section-badge.live {
  background: rgba(40, 200, 64, 0.15);
  color: #4ade80;
}

.section-badge.dev {
  background: rgba(6, 182, 212, 0.15);
  color: #22d3ee;
}

.section-intro {
  color: rgba(196, 181, 253, 0.8);
  margin-bottom: var(--spacing-xl);
  font-size: var(--font-size-lg);
}

.section-intro strong {
  color: #c4b5fd;
}

/* Product Cards */
.product-card {
  background: rgba(26, 19, 51, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: var(--radius-xl);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all var(--transition-base);
}

.product-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 60px rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.5);
  transform: translateY(-6px);
}

.product-card.featured {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
}

.product-content {
  padding: var(--spacing-2xl);
}

.product-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-lg);
}

.product-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.3) 100%);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #a78bfa;
}

.product-status {
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
}

.product-status.live {
  background: rgba(40, 200, 64, 0.15);
  color: #4ade80;
}

.product-status.tool {
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
}

.product-status.private {
  background: rgba(168, 85, 247, 0.15);
  color: #c4b5fd;
}

.product-status.coming {
  background: rgba(254, 188, 46, 0.15);
  color: #fbbf24;
}

.product-status.dev {
  background: rgba(6, 182, 212, 0.15);
  color: #22d3ee;
}

.product-card h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-sm);
  color: white;
}

.product-subtitle {
  color: #a78bfa;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-base);
}

.product-desc {
  color: rgba(196, 181, 253, 0.8);
  line-height: 1.7;
  margin-bottom: var(--spacing-md);
}

.product-purpose {
  color: rgba(196, 181, 253, 0.6);
  font-size: var(--font-size-sm);
  font-style: italic;
  margin-top: var(--spacing-sm);
}

.product-note {
  color: #06b6d4;
  font-size: var(--font-size-sm);
  font-weight: 500;
  margin: var(--spacing-md) 0;
}

/* Feature Lists */
.feature-list {
  list-style: none;
  margin: var(--spacing-lg) 0;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) 0;
  color: rgba(196, 181, 253, 0.9);
  font-size: var(--font-size-sm);
  line-height: 1.5;
}

.feature-icon {
  flex-shrink: 0;
}

.mini-feature-list {
  list-style: none;
  margin: var(--spacing-md) 0;
}

.mini-feature-list li {
  position: relative;
  padding: var(--spacing-xs) 0 var(--spacing-xs) var(--spacing-lg);
  color: rgba(196, 181, 253, 0.8);
  font-size: var(--font-size-sm);
}

.mini-feature-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #a78bfa;
}

/* Target Audience */
.target-audience {
  background: rgba(139, 92, 246, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
  border: 1px solid rgba(139, 92, 246, 0.15);
}

.target-audience h4 {
  color: rgba(196, 181, 253, 0.9);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-sm);
}

.audience-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.audience-tags span {
  background: rgba(139, 92, 246, 0.15);
  color: #c4b5fd;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
}

/* Product Features */
.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
}

.feature-tag {
  background: rgba(139, 92, 246, 0.15);
  color: #c4b5fd;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 500;
  border: 1px solid rgba(139, 92, 246, 0.2);
}

.product-actions {
  display: flex;
  gap: var(--spacing-md);
}

/* Hero Box - AI Rings Animation */
.hero-box {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #0c0a1d 0%, #1a1333 50%, #0f172a 100%);
  min-height: 380px;
}

.hero-badge {
  position: absolute;
  top: 20px;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: rgba(196, 181, 253, 0.8);
  z-index: 10;
}

.hero-dot {
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  box-shadow: 0 0 8px #4ade80;
  animation: hero-dot-pulse 2s ease-in-out infinite;
}

@keyframes hero-dot-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.stars-canvas {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.parallax {
  position: relative;
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease-out;
  transform-style: preserve-3d;
  z-index: 2;
}

/* Rings */
.ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(139, 92, 246, 0.25);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.08);
  animation: breathe 4s ease-in-out infinite;
}

.ring.r1 {
  width: 100px;
  height: 100px;
  border-color: rgba(139, 92, 246, 0.4);
}

.ring.r2 {
  width: 160px;
  height: 160px;
  animation-delay: -1.3s;
}

.ring.r3 {
  width: 220px;
  height: 220px;
  animation-delay: -2.6s;
}

@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.04); opacity: 1; }
}

/* Orbits */
.orbit {
  position: absolute;
  border-radius: 50%;
  animation: spin 20s linear infinite;
}

.orbit.o1 {
  width: 100px;
  height: 100px;
  animation-duration: 8s;
}

.orbit.o2 {
  width: 160px;
  height: 160px;
  animation-duration: 14s;
  animation-direction: reverse;
}

.orbit.o3 {
  width: 220px;
  height: 220px;
  animation-duration: 22s;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Orbit particles */
.orbit .p {
  position: absolute;
  width: 6px;
  height: 6px;
  background: linear-gradient(135deg, #a78bfa, #06b6d4);
  border-radius: 50%;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(167, 139, 250, 0.6);
}

.orbit .p.alt {
  left: 100%;
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  box-shadow: 0 0 10px rgba(6, 182, 212, 0.6);
}

/* Core */
.core {
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 5;
}

.ai-text {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
}

.ai-sub {
  font-size: 8px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(196, 181, 253, 0.7);
  margin-top: 2px;
}

/* Hero hint tags */
.hero-hint {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.hero-hint span {
  padding: 6px 14px;
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 20px;
  font-size: 11px;
  font-weight: 500;
  color: rgba(196, 181, 253, 0.85);
  letter-spacing: 0.02em;
}

/* Grid Layouts */
.products-grid {
  display: grid;
  gap: var(--spacing-xl);
}

.products-grid.two-col {
  grid-template-columns: repeat(2, 1fr);
}

.products-grid.three-col {
  grid-template-columns: repeat(3, 1fr);
}

.product-card.mini {
  padding: var(--spacing-xl);
}

.product-card.mini h3 {
  font-size: var(--font-size-xl);
}

.product-card.tool-card {
  padding: var(--spacing-xl);
}

.product-card.private-card {
  border-style: dashed;
}

.product-card.coming-card {
  border-color: rgba(254, 188, 46, 0.2);
}

.product-card.dev-card {
  border-color: rgba(6, 182, 212, 0.25);
  padding: var(--spacing-xl);
}

.product-card.dev-card:hover {
  border-color: rgba(6, 182, 212, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 40px rgba(6, 182, 212, 0.15);
}

/* Private Notice */
.private-notice {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xl);
  padding: var(--spacing-md);
  background: rgba(168, 85, 247, 0.08);
  border-radius: var(--radius-lg);
  color: rgba(196, 181, 253, 0.7);
  font-size: var(--font-size-sm);
}

.private-notice .el-icon {
  color: #a78bfa;
}

/* CTA Section */
.cta-section {
  background:
    radial-gradient(ellipse 800px 400px at 50% 50%, rgba(139, 92, 246, 0.2), transparent 60%),
    rgba(12, 10, 29, 0.9);
  color: white;
}

.cta-content {
  text-align: center;
}

.cta-content h2 {
  color: white;
  margin-bottom: var(--spacing-md);
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-content p {
  color: rgba(196, 181, 253, 0.8);
  margin-bottom: var(--spacing-xl);
}

/* Responsive */
@media (max-width: 968px) {
  .product-card.featured {
    grid-template-columns: 1fr;
  }

  .products-grid.two-col,
  .products-grid.three-col {
    grid-template-columns: 1fr;
  }

  .product-preview {
    order: -1;
    min-height: 200px;
  }
}
</style>
