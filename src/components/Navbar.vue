<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container navbar-container">
      <router-link to="/" class="logo">
        <span class="logo-icon">W</span>
        <span class="logo-text">Wang Huan</span>
      </router-link>

      <div class="nav-links" :class="{ 'mobile-open': mobileMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMobileMenu">首页</router-link>
        <router-link to="/products" class="nav-link" @click="closeMobileMenu">产品</router-link>
        <router-link to="/blog" class="nav-link" @click="closeMobileMenu">博客</router-link>
        <router-link to="/about" class="nav-link" @click="closeMobileMenu">关于</router-link>
        <a href="https://ai-coding-org.vercel.app" target="_blank" class="nav-link external">
          AI 团队转型
          <el-icon><TopRight /></el-icon>
        </a>
      </div>

      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <el-icon v-if="!mobileMenuOpen"><Menu /></el-icon>
        <el-icon v-else><Close /></el-icon>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, Close, TopRight } from '@element-plus/icons-vue'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: var(--spacing-md) 0;
  transition: all var(--transition-base);
  background: transparent;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-sm);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-weight: 700;
  font-size: var(--font-size-xl);
  color: var(--color-text-primary);
  text-decoration: none;
}

.logo-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  color: white;
  border-radius: var(--radius-lg);
  font-weight: 700;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.nav-link {
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-base);
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-primary);
  background: rgba(102, 126, 234, 0.1);
}

.nav-link.external {
  color: var(--color-primary);
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--color-text-primary);
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-lg);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-base);
  }

  .nav-links.mobile-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .mobile-menu-btn {
    display: flex;
  }
}
</style>
