<template>
  <n-card size="small">
    <n-space>
      <n-button @click="handleThemeChange(darkTheme)">深色</n-button>
      <n-button @click="handleThemeChange(null)">浅色</n-button>
    </n-space>
  </n-card>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import { darkTheme } from 'naive-ui'
import { BuiltInGlobalTheme } from 'naive-ui/lib/themes/interface'

const emit = defineEmits<{
  (event: 'themeChange', theme: BuiltInGlobalTheme | null): void
}>()

const handleThemeChange = (theme: BuiltInGlobalTheme | null) => {
  emit('themeChange', theme)
}
</script>

<style scoped></style>
