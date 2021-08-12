<template>
  <n-layout>
    <div class="main">
      {{ message }}
    </div>
  </n-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const message = ref('Main')
</script>

<style scoped></style>
