<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container navbar-container">
      <router-link to="/" class="logo">
        <span class="logo-icon">W</span>
        <span class="logo-text">Wang Huan</span>
      </router-link>

      <div class="nav-links" :class="{ 'mobile-open': mobileMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMobileMenu">{{ $t('nav.home') }}</router-link>
        <router-link to="/products" class="nav-link" @click="closeMobileMenu">{{ $t('nav.products') }}</router-link>
        <router-link to="/blog" class="nav-link" @click="closeMobileMenu">{{ $t('nav.blog') }}</router-link>
        <router-link to="/about" class="nav-link" @click="closeMobileMenu">{{ $t('nav.about') }}</router-link>
        <a href="https://ai-coding-org.vercel.app" target="_blank" class="nav-link external">
          {{ $t('nav.aiTeamTransform') }}
          <el-icon><TopRight /></el-icon>
        </a>
        <LanguageSwitcher class="mobile-lang-switcher" />
      </div>

      <div class="nav-right">
        <LanguageSwitcher class="desktop-lang-switcher" />
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <el-icon v-if="!mobileMenuOpen"><Menu /></el-icon>
          <el-icon v-else><Close /></el-icon>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, Close, TopRight } from '@element-plus/icons-vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

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
  background: rgba(12, 10, 29, 0.85);
  backdrop-filter: blur(16px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(139, 92, 246, 0.1);
  border-bottom: 1px solid rgba(139, 92, 246, 0.15);
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
  color: white;
  text-decoration: none;
}

.navbar.scrolled .logo {
  color: rgba(255, 255, 255, 0.95);
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
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.nav-link {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
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
  color: white;
  background: rgba(139, 92, 246, 0.2);
}

.nav-link.external {
  color: rgba(255, 255, 255, 0.85);
}

.navbar.scrolled .nav-link {
  color: rgba(196, 181, 253, 0.9);
}

.navbar.scrolled .nav-link:hover,
.navbar.scrolled .nav-link.router-link-active {
  color: #a78bfa;
  background: rgba(139, 92, 246, 0.15);
}

.navbar.scrolled .nav-link.external {
  color: rgba(167, 139, 250, 0.9);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  position: relative;
  z-index: 10;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
}

.mobile-lang-switcher {
  display: none;
}

.desktop-lang-switcher {
  display: block;
  position: relative;
  z-index: 10;
}

.navbar.scrolled .mobile-menu-btn {
  color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(12, 10, 29, 0.98);
    backdrop-filter: blur(16px);
    flex-direction: column;
    padding: var(--spacing-lg);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    border-bottom: 1px solid rgba(139, 92, 246, 0.2);
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

  .nav-links .nav-link {
    color: rgba(196, 181, 253, 0.9);
    width: 100%;
    justify-content: center;
    padding: var(--spacing-md);
  }

  .nav-links .nav-link:hover,
  .nav-links .nav-link.router-link-active {
    color: #a78bfa;
    background: rgba(139, 92, 246, 0.15);
  }

  .mobile-menu-btn {
    display: flex;
  }

  .mobile-lang-switcher {
    display: block;
    margin-top: var(--spacing-md);
  }

  .desktop-lang-switcher {
    display: none;
  }
}
</style>
