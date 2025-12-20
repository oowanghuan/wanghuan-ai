<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p class="copyright">{{ $t('footer.copyright', { year: currentYear }) }}</p>
      <p class="built-with">{{ $t('footer.builtWith') }}</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: transparent;
  padding: var(--spacing-xl) 0 var(--spacing-lg);
  margin-top: auto;
  position: relative;
  z-index: 2;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-sm);
  color: rgba(196, 181, 253, 0.5);
}

.copyright {
  margin: 0;
}

.built-with {
  margin: 0;
  font-style: italic;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.7;
}

@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    gap: var(--spacing-xs);
    text-align: center;
  }
}
</style>
