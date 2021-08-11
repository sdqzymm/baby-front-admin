<template>
  <div class="aside">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const message = ref('Aside')
</script>

<style scoped></style>
