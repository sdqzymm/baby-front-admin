<template>
  <aside-menu
    :menuOptions="menuOptions"
    :default-collapsed="defaultCollapsed"
  ></aside-menu>
</template>

<script setup lang="ts">
import AsideMenu from '@/common-ui/AsideMenu'
import menuOptions from './config'
const defaultCollapsed = false
</script>

<style scoped></style>
