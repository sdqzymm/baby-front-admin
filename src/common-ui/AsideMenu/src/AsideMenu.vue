<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="collapsed"
    show-trigger
    show-collapsed-content
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <n-menu
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :render-label="useRenderMenuLabel"
      :render-icon="useRenderMenuIcon"
      :expand-icon="useRenderExpandIcon"
    />
  </n-layout-sider>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'
import type { menuOption } from '@/common-ui/AsideMenu/types'
import {
  useMenuOptions,
  // 渲染菜单标签
  useRenderMenuLabel,
  // 渲染菜单图标
  useRenderMenuIcon,
  // 渲染折叠/展开图标
  useRenderExpandIcon
} from '../hooks'

// props数据
const props = defineProps({
  menuOptions: {
    type: Array as PropType<menuOption[]>,
    required: true
  },
  defaultCollapsed: {
    type: Boolean,
    default: () => false
  }
})

// 初始化菜单选项
useMenuOptions(props.menuOptions)

// 控制菜单项折叠
const collapsed = ref(props.defaultCollapsed)
</script>

<style scoped></style>
