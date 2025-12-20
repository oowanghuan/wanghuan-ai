<template>
  <div class="language-switcher" ref="switcherRef">
    <button
      class="lang-toggle"
      @click="toggleDropdown"
      :aria-expanded="isOpen"
    >
      <span class="lang-icon">{{ currentFlag }}</span>
      <span class="lang-code">{{ currentCode }}</span>
      <el-icon class="arrow" :class="{ 'is-open': isOpen }">
        <ArrowDown />
      </el-icon>
    </button>

    <transition name="dropdown">
      <div v-if="isOpen" class="lang-dropdown">
        <button
          v-for="lang in languages"
          :key="lang.code"
          class="lang-option"
          :class="{ active: locale === lang.code }"
          @click="switchLanguage(lang.code)"
        >
          <span class="lang-flag">{{ lang.flag }}</span>
          <span class="lang-name">{{ lang.name }}</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n'
import { ArrowDown } from '@element-plus/icons-vue'

const { locale } = useI18n()
const isOpen = ref(false)
const switcherRef = ref(null)

const languages = [
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
]

const currentFlag = computed(() => {
  const lang = languages.find(l => l.code === locale.value)
  return lang ? lang.flag : '🌐'
})

const currentCode = computed(() => {
  return locale.value === 'zh-CN' ? '中' : 'EN'
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const switchLanguage = (code) => {
  setLocale(code)
  isOpen.value = false
}

// Close dropdown when clicking outside
const handleClickOutside = (e) => {
  if (switcherRef.value && !switcherRef.value.contains(e.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.language-switcher {
  position: relative;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: var(--radius-full);
  color: rgba(196, 181, 253, 0.9);
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: var(--font-size-sm);
}

.lang-toggle:hover {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.4);
  color: white;
}

.lang-icon {
  font-size: 14px;
}

.lang-code {
  font-weight: 500;
}

.arrow {
  font-size: 12px;
  transition: transform var(--transition-fast);
}

.arrow.is-open {
  transform: rotate(180deg);
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 140px;
  background: rgba(26, 19, 51, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: var(--radius-lg);
  padding: 6px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  z-index: 1000;
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  color: rgba(196, 181, 253, 0.8);
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: var(--font-size-sm);
  text-align: left;
}

.lang-option:hover {
  background: rgba(139, 92, 246, 0.15);
  color: white;
}

.lang-option.active {
  background: rgba(139, 92, 246, 0.25);
  color: #a78bfa;
}

.lang-flag {
  font-size: 16px;
}

.lang-name {
  font-weight: 500;
}

/* Dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
