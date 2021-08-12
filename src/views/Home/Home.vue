<template>
  <n-config-provider :theme="theme" abstract>
    <n-layout>
      <n-layout-header>
        <home-header @themeChange="handleThemeChange"></home-header>
      </n-layout-header>
      <n-layout-content>
        <n-layout has-sider>
          <home-sider></home-sider>
          <home-main></home-main>
        </n-layout>
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BuiltInGlobalTheme } from 'naive-ui/lib/themes/interface'

import HomeHeader from './HomeHeader/HomeHeader.vue'
import HomeSider from './HomeSider/HomeSider.vue'
import HomeMain from './HomeMain/HomeMain.vue'

let theme = ref()
const handleThemeChange = (val: BuiltInGlobalTheme | null) => {
  if (theme.value !== val) theme.value = val
}
</script>

<style scoped lang="scss"></style>
