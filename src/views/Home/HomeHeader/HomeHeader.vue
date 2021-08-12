<template>
  <n-card size="small">
    <n-space>
      <n-button @click="handleThemeChange(darkTheme)">深色</n-button>
      <n-button @click="handleThemeChange(null)">浅色</n-button>
    </n-space>
  </n-card>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { BuiltInGlobalTheme } from 'naive-ui/lib/themes/interface'

const emit = defineEmits<{
  (event: 'themeChange', theme: BuiltInGlobalTheme | null): void
}>()

// 触发更改主题事件
const handleThemeChange = (theme: BuiltInGlobalTheme | null) => {
  emit('themeChange', theme)
}
</script>

<style scoped></style>
