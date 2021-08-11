<template>
  <n-config-provider :theme="theme" abstract>
    <div class="home">
      <n-layout>
        <n-layout-header>
          <home-header @themeChange="handleThemeChange"></home-header>
        </n-layout-header>
        <n-layout-content>
          <n-layout has-sider>
            <n-layout-sider content-style="padding: 24px;">
              <home-sider></home-sider>
            </n-layout-sider>
            <n-layout>
              <home-main></home-main>
            </n-layout>
          </n-layout>
        </n-layout-content>
      </n-layout>
    </div>
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

<style scoped>
.home {
  height: 100%;
}
</style>
