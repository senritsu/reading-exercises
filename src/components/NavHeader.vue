<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header class="mb-4 bg-dark-2 p-1">
    <nav class="flex flex-col items-center">
      <ul class="flex gap-2">
        <li>
          <router-link to="/">
            {{ t('pages.home.title') }}
          </router-link>
        </li>
        <li>
          <router-link to="/grid">
            {{ t('pages.grid.title') }}
          </router-link>
        </li>
        <li>
          <router-link to="/sheet">
            {{ t('pages.sheet.title') }}
          </router-link>
        </li>
        <li>
          <router-link to="/settings">
            {{ t('pages.settings.title') }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
a {
  text-decoration: underline;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
}

a.router-link-active {
  font-weight: bold;
  text-decoration: none;
  border-bottom: 6px solid skyblue;
}
</style>
